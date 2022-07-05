import { ModularEnginePlugin } from "modular-engine-types";

export type ModularUiThemeField = {
  bodyColor?: string;
  uiColor?: string;
};

export type ModularUiTheme = {
  default?: ModularUiThemeField;
  dark?: ModularUiThemeField;
};

export type ModulaUiConnectorPlugin = ModularEnginePlugin<{
  theme?: ModularUiTheme;
}>;
