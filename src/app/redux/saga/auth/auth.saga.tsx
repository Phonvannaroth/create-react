/* eslint-disable no-loop-func */
import { getAuthChannel } from "app/redux/functions";
import { IActionLoginWithEmailPassword } from "app/redux/interface/auth.interface";
import { adminRef, auth } from "app/redux/service/auth.service";
import { pushToObject } from "app/redux/service/mapping.service";
import types from "app/redux/types";
import { call, delay, put, take, takeEvery, takeLatest } from "redux-saga/effects"

function* canActive() {
  const channel = yield call(getAuthChannel);
  try {
    while (true) {
      const result = yield take(channel)
      if (result.user) {
        const res: any = yield adminRef()
          .doc(result.user.uid)
          .get().then((item: any) => { return pushToObject(item) })
        yield put({ type: types.CAN_ACTIVE_SUCCESS, account: res })
      } else {
        yield put({ type: types.CAN_ACTIVE_SUCCESS, account: null })
      }
    }
  } catch (err) {
    put({ type: types.CAN_ACTIVE_ERROR })
  }
}

function* loginWithEmailPassword(action: IActionLoginWithEmailPassword) {
  const { email, password, navigate } = action.payload;
  try {
    const res = yield auth().signInWithEmailAndPassword(email, password).then(() => {
      return true;
    }).catch(() => {
      return false
    })
    if (res) {
      yield put({ type: types.LOGIN_WITH_EMAIL_PASSWORD_SUCCESS })
      yield navigate('/products')
      yield window.location.reload();
    } else {
      yield put({ type: types.LOGIN_WITH_EMAIL_PASSWORD_ERROR })
    }
  } catch (err) {
    put({ type: types.LOGIN_WITH_EMAIL_PASSWORD_ERROR })
  }
}
function* signOut(action: any) {
  const param = action.payload;
  try {
    const res = yield auth().signOut().then(() => {
      return true;
    }).catch(() => {
      return false
    })
    if (res) {
      yield param.navigate('/login')
      delay(500)
      yield window.location.reload();
      yield put({ type: types.SIGN_OUT_SUCCESS })
    }
  } catch (err) {
    put({ type: types.SIGN_OUT_ERROR })
  }
}

export const authSagas = [
  takeEvery(types.CAN_ACTIVE, canActive),
  takeLatest(types.LOGIN_WITH_EMAIL_PASSWORD, loginWithEmailPassword),
  takeLatest(types.SIGN_OUT, signOut)
]
