import { IAuthReducer } from "../reducer/auth/auth.reducer";
import { ICategoryReducer } from "../reducer/category.reduce";
import { ICommonReducer } from "../reducer/common.reducer";
import { IErrorReducer } from "../reducer/error.reducer";
import { ISettingReducer } from "../reducer/setting.reducer";
import { ISuccessfulReducer } from "../reducer/successful.reducer";

export interface IReducer {
  authReducer: IAuthReducer;
  settingReducer: ISettingReducer;
  errorReducer: IErrorReducer;
  successfulReducer: ISuccessfulReducer;
  commonReducer: ICommonReducer;
  categoryReducer: ICategoryReducer
}
