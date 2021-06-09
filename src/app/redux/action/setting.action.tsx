import { IPayloadSetSidebar } from "../interface/setting.interface";
import types from "../types";

export const settingAction = {
  onChangeExpanded: (param: boolean) => {
    return {
      type: types.CHANGE_EXPANDED,
      param,
    };
  },
  onSetSidebar: (payload: IPayloadSetSidebar) => {
    return {
      type: types.SET_SIDE_BAR,
      payload,
    };
  },
};
