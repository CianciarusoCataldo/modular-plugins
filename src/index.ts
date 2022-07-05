export { default as epics } from "./plugins/epics";
export { default as localization } from "./plugins/localization";
export { default as modals } from "./plugins/modals";
export { default as modularUiConnector } from "./plugins/modular-ui-connector";
export { default as routing } from "./plugins/router";
export { default as ui } from "./plugins/ui-manager";
export { default as urlChecker } from "./plugins/url-checker";

export { changeLanguage } from "./plugins/localization/actions";
export { locationChange, goBack, requestRoute } from "./plugins/router/actions";
export { setDarkMode } from "./plugins/ui-manager/actions";
export {
  openModal,
  closeModal,
  setModalContext,
  setModalForm,
  setModalVisiblity,
} from "./plugins/modals/actions";

export {
  getLocalizationConfig,
  getLanguage,
  getLanguages,
} from "./plugins/localization/selectors";
export {
  getModalView,
  getModalContext,
  getModalType,
  isModalVisible,
} from "./plugins/modals/selectors";
export {
  getAppBaseName,
  getHomePage,
  getRouterPluginConfig,
  getRouterView,
  getRoutes,
  isHomePage,
} from "./plugins/router/selectors";
export { getUIView, isInDarkMode } from "./plugins/ui-manager/selectors";
