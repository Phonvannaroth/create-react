/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
/* eslint-disable prefer-destructuring */

import { eventChannel } from "redux-saga";
import { delay, put, take, takeLatest } from "redux-saga/effects";
import { IActionCreateNewCategory, IActionFetchCategoryDetail, ICategory } from "../interface/category.interfac";
import { categoryRef, createId } from "../service/data.service";
import { pushToArray } from "../service/mapping.service";

import types from "../types";

function* onCreateNewCategory(action: IActionCreateNewCategory) {
  try {
    const { payload } = action

    const doc: ICategory = {
      key: createId(),
      name: payload.name,
      description: payload.description,
      imageUrl: payload.image,
      createdDate: new Date(),
      createdByKey: payload.account.key,
      createdBy: payload.account.name,
      dateKey: Number(new Date()),
      status: payload.status,
    }
    const res = yield categoryRef().doc(doc.key)
      .set(doc)
      .then(() => { return true })
      .catch(() => { return false })
    if (res) {
      yield put({
        type: types.CREATE_NEW_CATEGORY_SUCCESS,
      });
      yield put({ type: types.SUCCESSFUL, message: "Upload Successfully!" });
      yield delay(1200);
      yield payload.navigate(-1);
    } else {
      yield put({
        type: types.CREATE_NEW_CATEGORY_ERROR,
      });
      yield put({ type: types.RESET_ERROR, message: "Error Successfully!" });
    }
  } catch (error) {
    yield put({
      type: types.GLOBAL_ERROR,
    });
  }
}

function* onFetchCategory() {
  try {
    const channel = eventChannel((emit) => categoryRef()
      .orderBy('name', 'asc')
      .onSnapshot(emit))

    while (true) {
      const data = yield take(channel)
      const payload = pushToArray(data)
      yield put({ type: types.FETCH_CATEGORY_SUCCESS, payload })
    }
  } catch (err) {
    yield put({ type: types.FETCH_CATEGORY_ERROR })
    yield put({
      type: types.GLOBAL_ERROR,
    });
  }
}

function* onFetchCategoryDetail(action: IActionFetchCategoryDetail) {
  try {
    const { id } = action.payload
    const payload = yield categoryRef().where("key", "==", id).get()
      .then((item) => {
        return pushToArray(item)
      })
      .catch((err) => {
        console.log(`err`, err)
        return []
      })
    yield put({ type: types.FETCH_CATEGORY_DETAIL_SUCCESS, payload: payload[0] })
  } catch (err) {
    yield put({ type: types.FETCH_CATEGORY_DETAIL_ERROR })
    yield put({
      type: types.GLOBAL_ERROR,
    });
  }
}

export const categorySagas = [
  takeLatest(types.CREATE_NEW_CATEGORY, onCreateNewCategory),
  takeLatest(types.FETCH_CATEGORY, onFetchCategory),
  takeLatest(types.FETCH_CATEGORY_DETAIL, onFetchCategoryDetail),
];
