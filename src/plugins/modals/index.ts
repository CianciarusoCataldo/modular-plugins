/** types */
import { ModularEnginePlugin } from "modular-engine-types";

/** internal */
import * as actions from "./actions";
import initialState from "./initial-state";
import modalReducer from "./reducer";

const modal: ModularEnginePlugin = () => ({
  feature: "modal",
  redux: (config) => ({
    slice: "modal",
    effects: modalReducer,
    initialState,
  }),
  format: (config, enabledPlugins) => {
    let input = { ...config };

    if (enabledPlugins.urlChecker) {
      input.urlChecker.queryParameters["modal"] = ({
        urlParam,
        config: inputConfig,
        store,
      }) => {
        store.dispatch(actions.openModal({ form: urlParam }));

        return inputConfig;
      };

      input.urlChecker.after.push("modal");
    }

    return input;
  },
});

export default modal;
