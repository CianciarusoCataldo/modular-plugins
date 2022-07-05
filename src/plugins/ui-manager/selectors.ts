/**
 * @file `ui-manager` plugin slice selectors
 *
 * @see https://github.com/CianciarusoCataldo/modular-engine/#ui
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright Cataldo Cianciaruso 2022
 */

import { ModularEngineGlobalState } from "modular-engine-types";
import { createModularSelector } from "modular-utils";

import { UIState } from "./types";

/**
 * Return the `ui-manager` plugin slice (if `features.ui` is set to false, or not set, inside app.config.json,
 * a default slice state is returned)
 *
 * @see https://github.com/CianciarusoCataldo/modular-engine/#ui
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright Cataldo Cianciaruso 2022
 */
export const getUIView = createModularSelector(
  (state: Partial<ModularEngineGlobalState>): UIState =>
    state.ui || {
      isHomePage: true,
      darkMode: false,
      homeRoute: "",
    },
  (uiState) => uiState
);

/**
 * Returns true if dark mode is enabled, false otherwise
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright Cataldo Cianciaruso 2022
 */
export const isInDarkMode = createModularSelector(
  getUIView,
  ({ darkMode }) => darkMode
);
