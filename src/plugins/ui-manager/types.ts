/**
 * @file `ui-manager` plugin types definitions
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright Cataldo Cianciaruso 2022
 */

import {
  ModularEngineCustomState,
  ModularEnginePlugin,
} from "modular-engine-types";

/**
 * `ui-manager` plugin state slice
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright Cataldo Cianciaruso 2022
 */
export type UIState = ModularEngineCustomState<{
  darkMode: boolean;
}>;

/**
 * `ui-manager` plugin settings
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright Cataldo Cianciaruso 2022
 */
export type UiPlugin = ModularEnginePlugin<{
  darkMode?: boolean;
  onDarkModeChange?: ((newDarkMode: boolean) => void)[];
}>;
