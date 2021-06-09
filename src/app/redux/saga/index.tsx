import { all } from "redux-saga/effects";
import { authSagas } from "./auth/auth.saga";
import { categorySagas } from "./category.saga";
import { settingSagas } from "./setting.saga";

export default function* rootSaga() {
  yield all([
    ...authSagas,
    ...settingSagas,
    ...categorySagas
  ]);
}
