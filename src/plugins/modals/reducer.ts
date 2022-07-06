/**
 * @file `modal` state slice reducer file
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright Cataldo Cianciaruso 2022
 */

import { ModularEngineEffects } from "modular-engine-types";

import { ModalState } from "./types";

import {
  closeModal,
  openModal,
  setModalContext,
  setModalForm,
  setModalVisiblity,
} from "./actions";

/**
 * Internal `modal` reducer
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright Cataldo Cianciaruso 2022
 *
 */
const modalReducer: ModularEngineEffects<ModalState> = {
  [openModal.type]: (state, action) => ({
    ...state,
    isVisible: true,
    type: action.payload.type,
    context: action.payload.context || state.context,
  }),
  [closeModal.type]: (state) => ({
    ...state,
    isVisible: false,
    type: null,
    context: {},
  }),
  [setModalContext.type]: (state, action) => ({
    ...state,
    context: action.payload.context,
  }),
  [setModalVisiblity.type]: (state, action) => ({
    ...state,
    isVisible: action.payload.visibility,
  }),
  [setModalForm.type]: (state, action) => ({
    ...state,
    type: action.payload.type,
  }),
};

export default modalReducer;
