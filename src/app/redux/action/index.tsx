import { authAction } from "./auth/auth.action";
import { commonAction } from "./common.action";
import { settingAction } from "./setting.action";
import { categoryAction } from './category.action'
import { successfulAction } from "./successful.action";
import { errorAction } from "./error.action";

export const action = {
  auth: {
    ...authAction,
  },
  setting: {
    ...settingAction
  },
  common: {
    ...commonAction
  },
  category: {
    ...categoryAction
  },
  successful: {
    ...successfulAction
  },
  error: {
    ...errorAction
  }
};
