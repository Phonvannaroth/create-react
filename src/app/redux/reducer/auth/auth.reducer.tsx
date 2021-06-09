import { createReducer } from "reduxsauce";

import types from "../../types";

export interface IAuthReducer {
  account: any;
  loading: boolean;
  progress: boolean;
  error: boolean;
}
const INITIAL_STATE: IAuthReducer = {
  account: null,
  loading: false,
  progress: false,
  error: false,
};

// :FX1:<- User CanActive ->
const onCanActive = (state: IAuthReducer = INITIAL_STATE) => {
  return { ...state, loading: true };
};
const onCanActiveSuccess = (
  state: IAuthReducer = INITIAL_STATE,
  action: any
) => {
  return {
    ...state,
    loading: false,
    account: action.account,
  };
};
const onCanActiveError = (state: IAuthReducer = INITIAL_STATE) => {
  return {
    ...state,
    loading: false,
  };
};

// :FX2:<- Login With Email and Password ->
const onloginWithEmailPassword = (state: IAuthReducer = INITIAL_STATE) => {
  return { ...state, progress: true };
};
const onloginWithEmailPasswordSuccess = (
  state: IAuthReducer = INITIAL_STATE,
  action: any
) => {
  return {
    ...state,
    progress: false,
    account: action.account,
  };
};
const onloginWithEmailPasswordError = (state: IAuthReducer = INITIAL_STATE) => {
  return {
    ...state,
    progress: false,
  };
};

// :FX3:<- User SignOut->
const onSignOut = (state: IAuthReducer = INITIAL_STATE) => {
  return { ...state, progress: true };
};
const onSignOutSuccess = (
  state: IAuthReducer = INITIAL_STATE,
) => {
  return {
    ...state,
    progress: false,
    account: null,
  };
};
const onSignOutError = (state: IAuthReducer = INITIAL_STATE) => {
  return {
    ...state,
    progress: false,
  };
};

const HANDLERS = {
  // :FX1:<- User CanActive ->
  [types.CAN_ACTIVE]: onCanActive,
  [types.CAN_ACTIVE_SUCCESS]: onCanActiveSuccess,
  [types.CAN_ACTIVE_ERROR]: onCanActiveError,

  // :FX2:<- Login With Email and Password ->
  [types.LOGIN_WITH_EMAIL_PASSWORD]: onloginWithEmailPassword,
  [types.LOGIN_WITH_EMAIL_PASSWORD_SUCCESS]: onloginWithEmailPasswordSuccess,
  [types.LOGIN_WITH_EMAIL_PASSWORD_ERROR]: onloginWithEmailPasswordError,

  // :FX3:<- User SignOut->
  [types.SIGN_OUT]: onSignOut,
  [types.SIGN_OUT_SUCCESS]: onSignOutSuccess,
  [types.SIGN_OUT_ERROR]: onSignOutError,
};
export default createReducer(INITIAL_STATE, HANDLERS);
