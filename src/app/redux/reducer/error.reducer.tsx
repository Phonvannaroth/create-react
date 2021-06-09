import { createReducer } from "reduxsauce";

import types from "../types";

export interface IErrorReducer {
  message: string;
  error: boolean;
  globalError: boolean;
}
const INITIAL_STATE: IErrorReducer = {
  message: "",
  error: false,
  globalError: false,
};

// :FX0:<- Handle Error ->
const onAPIError = (state: IErrorReducer = INITIAL_STATE, action: any) => {
  return { ...state, error: true, message: action.message };
};

// :FX1:<- Handle Error ->
const onGlobalError = (state: IErrorReducer = INITIAL_STATE) => {
  return { ...state, globalError: true };
};

const HANDLERS = {
  [types.API_ERROR]: onAPIError,
  [types.GLOBAL_ERROR]: onGlobalError,
};
export default createReducer(INITIAL_STATE, HANDLERS);
