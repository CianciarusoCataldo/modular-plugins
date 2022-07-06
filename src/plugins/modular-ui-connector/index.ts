/** types */
import { ModulaUiConnectorPlugin } from "./types";

/** utils */
import { fillObject } from "modular-utils";

/** internal */
import { defaultTheme, uiProperties } from "./ui-properties";

const modularUiConnector: ModulaUiConnectorPlugin = () => ({
  feature: "modularUiConnector",
  create: (config) => {
    const theme = fillObject({
      toFill: config.theme,
      defaultObj: defaultTheme,
    });
    let uiStyle = "";
    let bodyStyle = "";
    const defaultColors = theme.default || {};
    const darkColors = theme.dark || {};

    if (defaultColors.uiColor) {
      uiStyle += `${uiProperties.default.background}: ${defaultColors.uiColor}; `;
    }

    if (defaultColors.bodyColor) {
      bodyStyle += ` body.light { background: ${defaultColors.bodyColor}; }`;
    }

    if (darkColors.uiColor) {
      uiStyle += `${uiProperties.dark.background}: ${darkColors.uiColor}; `;
    }

    if (darkColors.bodyColor) {
      bodyStyle += ` body.dark { background: ${darkColors.bodyColor}; }`;
    }

    let customStyle: string = `
      * {
        ${uiStyle}
      }
      ${bodyStyle}
    * {
      scrollbar-width: thin;
      scrollbar-color: #c0c0c0;
    }
    
    *::-webkit-scrollbar {
      width: 12px;
    }
    
    *::-webkit-scrollbar-track {
      background: linear-gradient(to right, #2d3748, #1d232e);
    }
    
    *::-webkit-scrollbar-thumb {
      background-color: #c0c0c0;
      border-radius: 20px;
      border: 3px solid #c0c0c0;
    }
    `;

    const style = document.createElement("style");
    style.textContent = customStyle;
    document.head.append(style);

    return {
      field: "theme",
      content: theme,
    };
  },
  format: (config, enabledPlugins) => {
    enabledPlugins.ui &&
      config.ui.onDarkModeChange.push((darkMode) => {
        window.document.body.classList.remove("dark", "light");

        window.document.body.classList.add(darkMode ? "dark" : "light");
        window.document.body.style.background = "";
      });

    return config;
  },
  preInit: (config, enabledPlugins) => {
    if (enabledPlugins.ui) {
      window.document.body.classList.remove("light", "dark");

      window.document.body.classList.add(config.ui.darkMode ? "dark" : "light");
    }
  },
});

export default modularUiConnector;
