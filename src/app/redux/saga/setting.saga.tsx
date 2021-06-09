/* eslint-disable prefer-destructuring */

import { put, takeLatest } from "redux-saga/effects";
import { IActionSetSidebar } from "../interface/setting.interface";
import { saveSetting } from "../service/cookie.service";

import types from "../types";

function* onSetSidebar(action: IActionSetSidebar) {
  try {
    const { index } = action.payload;
    // eslint-disable-next-line no-console
    console.log(`index saga active`, index);
    saveSetting(index);
    yield put({
      type: types.SET_SIDE_BAR_SUCCESS,
      payload: index,
    });
  } catch (error) {
    yield put({
      type: types.GLOBAL_ERROR,
    });
  }
}

export const settingSagas = [takeLatest(types.SET_SIDE_BAR, onSetSidebar)];
