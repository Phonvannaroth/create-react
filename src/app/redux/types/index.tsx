/* eslint-disable import/no-anonymous-default-export */
import authType from "./auth.type";
import categoryType from "./category.type";
import commonType from "./common.type";
import errorType from "./error.type";
import settingType from "./setting.type";
import successfulType from "./successful.type";

export default {
  ...authType,
  ...settingType,
  ...errorType,
  ...successfulType,
  ...commonType,
  ...categoryType
};
