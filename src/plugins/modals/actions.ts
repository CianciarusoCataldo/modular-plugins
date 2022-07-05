/**
 * @file `modal` state slice actions, used to interact with app modal (to show/hide it, for example)
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright Cataldo Cianciaruso 2022
 */

import { createModularAction } from "modular-utils";

/**
 * Open modular-engine modal, with selected content inside (from app/modals) and with given context (default to empty object)
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright Cataldo Cianciaruso 2022
 *
 */
export const openModal = createModularAction<{
  type: string;
  context?: Record<string, any>;
}>(
  "@@modal/OPEN_MODAL",
  ({ form, context }: { form: string; context?: Record<string, any> }) => ({
    type: form,
    context: context,
  })
);

/**
 * Close modular-engine modal
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright Cataldo Cianciaruso 2022
 *
 */
export const closeModal = createModularAction("@@modal/CLOSE_MODAL");

/**
 * set modular-engine modal context
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright Cataldo Cianciaruso 2022
 *
 */
export const setModalContext = createModularAction(
  "@@modal/SET_CONTEXT",
  (context: Record<string, any>) => ({ context: context })
);

/**
 * set modular-engine modal context
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright Cataldo Cianciaruso 2022
 *
 */
export const setModalVisiblity = createModularAction(
  "@@modal/SET_VISIBILITY",
  (visibility: boolean) => ({ visibility })
);

/**
 * set modular-engine modal form type
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright Cataldo Cianciaruso 2022
 *
 */
export const setModalForm = createModularAction(
  "@@modal/SET_FORM_TYPE",
  (type: string) => ({
    payload: { type },
  })
);
