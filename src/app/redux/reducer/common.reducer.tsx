/* eslint-disable func-names */
/* eslint-disable prefer-arrow-callback */
/* eslint-disable no-console */
import { createReducer } from "reduxsauce";
import types from "../types";

export interface ICommonReducer {
  loading: boolean;
  progress: boolean;
}
const INITIAL_STATE: ICommonReducer = {
  loading: false,
  progress: false,
};

// :FX1:<-Update Request Status ->
const onUpdateRequestStatus = (state: ICommonReducer = INITIAL_STATE) => {
  return { ...state, progress: true };
};
const onUpdateRequestStatusSuccess = (
  state: ICommonReducer = INITIAL_STATE
) => {
  return {
    ...state,
    progress: false,
  };
};
const onUpdateRequestStatusError = (state: ICommonReducer = INITIAL_STATE) => {
  return { ...state, progress: false };
};

const HANDLERS = {
  // :FX1:<-Update Request Status ->
  [types.UPDATE_REQUEST_STATUS]: onUpdateRequestStatus,
  [types.UPDATE_REQUEST_STATUS_SUCCESS]: onUpdateRequestStatusSuccess,
  [types.UPDATE_REQUEST_STATUS_ERROR]: onUpdateRequestStatusError,
};
export default createReducer(INITIAL_STATE, HANDLERS);
