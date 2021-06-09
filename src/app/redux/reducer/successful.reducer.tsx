import { createReducer } from "reduxsauce";

import types from "../types";

export interface ISuccessfulReducer {
  message: string;
  successful: boolean;
}
const INITIAL_STATE: ISuccessfulReducer = {
  message: "",
  successful: false,
};

// :FX0:<- Handle Successful ->
const onSuccessful = (
  state: ISuccessfulReducer = INITIAL_STATE,
  action: any
) => {
  return { ...state, successful: true, message: action.message };
};

const HANDLERS = {
  [types.SUCCESSFUL]: onSuccessful,
};
export default createReducer(INITIAL_STATE, HANDLERS);
