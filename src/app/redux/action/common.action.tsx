import { IPayloadUpdateRequestStatus } from "../interface/common.interface";
import types from "../types";

export const commonAction = {
  onUpdateRequestStatus: (payload: IPayloadUpdateRequestStatus) => {
    return {
      type: types.UPDATE_REQUEST_STATUS,
      payload,
    };
  },
};
