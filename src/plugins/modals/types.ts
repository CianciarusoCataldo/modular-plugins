/**
 * @file `modal` state slice type definitions
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright Cataldo Cianciaruso 2022
 */

import { ModularEngineCustomState } from "modular-engine-types";

/**
 * `modal` state slice
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright Cataldo Cianciaruso 2022
 *
 */
export type ModalState = ModularEngineCustomState<{
  isVisible: boolean;
  type: string | null;
  context: Record<string, any>;
}>;
