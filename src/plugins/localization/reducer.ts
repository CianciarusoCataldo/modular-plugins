/**
 * @file `localization` plugin reducer file
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright Cataldo Cianciaruso 2022
 */

import { ModularEngineReducerCases } from "modular-engine-types";

import { LocalizationState } from "./types";

import { changeLanguage } from "./actions";

/**
 * `localization` plugin reducer
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright Cataldo Cianciaruso 2022
 */
const localizationReducer: ModularEngineReducerCases<LocalizationState> = {
  [changeLanguage.type]: (state, action) => ({
    ...state,
    language: action.payload.language,
  }),
};

export default localizationReducer;
