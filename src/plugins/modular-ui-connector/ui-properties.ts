import { ModularUiTheme } from "./types";

export const uiProperties = {
  default: {
    background: "--modular-custom-background-light",
    text: "--modular-custom-text-color-light",
  },
  dark: {
    background: "--modular-custom-background-dark",
    text: "--modular-custom-text-color-dark",
  },
} as const;

export const defaultTheme: ModularUiTheme = {
  default: {},
  dark: {},
};
