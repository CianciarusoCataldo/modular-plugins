/** utils */
import { computeValue, fillObject } from "modular-utils";

/** internal  */
import i18nDefaultSettings from "./i18n/default-settings";
import { initi18n, setI18nLanguage } from "./i18n/utils";
import i18nInstance from "./i18n/instance";

import { LocalizationPlugin } from "./types";
import { updateTitle } from "./helper";
import * as actions from "./actions";
import localizationReducer from "./reducer";

const localization: LocalizationPlugin = () => {
  const language =
    computeValue(() => navigator.language.split("-")[0], "") || "";

  return {
    redux: (config) => ({
      slice: "localization",
      reducerCases: localizationReducer,
      initialState: {
        ...config.i18n,
        language,
      },
    }),
    create: (config) => ({
      field: "i18n",
      content: fillObject({
        toFill: config.i18n,
        defaultObj: i18nDefaultSettings,
      }),
    }),

    format: (config, enabledPlugins) => {
      let inputConfig = { ...config };

      initi18n({
        config: { ...inputConfig.i18n, language },
        callBack:
          enabledPlugins.router &&
          ((t) => {
            updateTitle({
              tFunction: t,
              routeKey: config.router.initialRouteKey,
              ns: inputConfig.i18n.titlesNamespace,
              appName: inputConfig.appName,
            });
          }),
      });

      enabledPlugins.router &&
        inputConfig.router.onLocationChange.push((path, routeKey) => {
          updateTitle({
            routeKey,
            ns: inputConfig.i18n.titlesNamespace,
            appName: inputConfig.appName,
            tFunction: i18nInstance.t,
          });
        });

      inputConfig.redux.middlewares.push((action, store) => {
        const state = store.getState();

        switch (action.type) {
          case actions.changeLanguage.type:
            {
              state.localization.supportedLanguages.includes(
                action.payload.language
              ) &&
                setI18nLanguage({
                  language: action.payload.language,
                  callback: (t) =>
                    enabledPlugins.router &&
                    updateTitle({
                      routeKey: state.router.routeKey,
                      tFunction: t,
                      appName: state.config.appName,
                      ns: state.localization.titlesNamespace,
                    }),
                });
            }
            break;
        }
      });

      if (enabledPlugins.urlChecker) {
        inputConfig.urlChecker.queryParameters["lang"] = ({
          store,
          urlParam,
          config,
        }) => {
          store.dispatch(actions.changeLanguage(urlParam));

          return config;
        };

        config.urlChecker.after.push("lang");
      }

      return inputConfig;
    },
  };
};

export default localization;
