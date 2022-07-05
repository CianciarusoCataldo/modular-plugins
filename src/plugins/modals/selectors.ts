/**
 * @file `modal` plugin slice selectors
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright Cataldo Cianciaruso 2022
 */

import { ModularEngineGlobalState } from "modular-engine-types";

import { createModularSelector } from "modular-utils";

import { ModalState } from "./types";

import modalInitialState from "./initial-state";

/**
 * Returns `modal` plugin slice, or the default slice state if the plugin is not enabled
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright Cataldo Cianciaruso 2022
 *
 */
export const getModalView = (
  state: ModularEngineGlobalState<{ modal?: ModalState }>
): ModalState => state.modal || modalInitialState;

/**
 * Returns the app modal visibility
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright Cataldo Cianciaruso 2022
 *
 */
export const isModalVisible = createModularSelector(
  getModalView,
  ({ isVisible }) => isVisible
);

/**
 * Returns actually opened modal type, null if no modal is opened
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright Cataldo Cianciaruso 2022
 *
 */
export const getModalType = createModularSelector(
  getModalView,
  ({ type }) => type
);

/**
 * Returns actual modal context
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright Cataldo Cianciaruso 2022
 *
 */
export const getModalContext = createModularSelector(
  getModalView,
  ({ context }) => context
);
