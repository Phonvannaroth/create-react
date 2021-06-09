import { combineReducers } from "redux";
import { resettableReducer } from "reduxsauce";
import authReducer from "./auth/auth.reducer";
import errorReducer from "./error.reducer";
import successfulReducer from "./successful.reducer";
import settingReducer from "./setting.reducer";
import categoryReducer from './category.reduce'

const resettable = resettableReducer("RESET");
const resetError = resettableReducer("RESET_ERROR");
const resetSuccess = resettableReducer("RESET_SUCCESS");

export default combineReducers({
  authReducer: resettable(authReducer),
  errorReducer: resetError(errorReducer),
  successfulReducer: resetSuccess(successfulReducer),
  settingReducer,
  categoryReducer,
});
