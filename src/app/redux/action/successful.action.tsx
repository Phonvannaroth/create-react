import types from "../types";

export const successfulAction = {
  onResetSuccess: () => {
    return {
      type: types.RESET_SUCCESS,
    };
  },
};
