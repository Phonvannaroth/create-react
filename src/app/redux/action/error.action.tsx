import types from "../types";

export const errorAction = {
  onResetError: () => {
    return {
      type: types.RESET_ERROR,
    };
  },
};
