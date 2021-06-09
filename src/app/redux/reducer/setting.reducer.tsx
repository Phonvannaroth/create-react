/* eslint-disable no-console */
import { createReducer } from "reduxsauce";
import types from "../types";

export interface ISettingReducer {
  expanded: boolean;
  sidebar: number;
  loading: boolean;
}
const INITIAL_STATE: ISettingReducer = {
  expanded: true,
  loading: false,
  sidebar: 0,
};

// :FX1:<- Log In ->
const onChangeExpanded = (
  state: ISettingReducer = INITIAL_STATE,
  action: any
) => {
  return { ...state, expanded: action.param };
};

// :FX2:<- Set Sidebar ->
const onSetSidebar = (state: ISettingReducer = INITIAL_STATE) => {
  return { ...state };
};
const onSetSidebarSuccess = (
  state: ISettingReducer = INITIAL_STATE,
  action: any
) => {
  return { ...state, sidebar: action.payload };
};

const HANDLERS = {
  // :FX1:<- Log In ->
  [types.CHANGE_EXPANDED]: onChangeExpanded,

  // :FX2:<- Set Sidebar ->
  [types.SET_SIDE_BAR]: onSetSidebar,
  [types.SET_SIDE_BAR_SUCCESS]: onSetSidebarSuccess,
};
export default createReducer(INITIAL_STATE, HANDLERS);
