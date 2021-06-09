import { IPayloadLoginWithEmailPassword, PayloadSigOut } from "app/redux/interface/auth.interface";
import types from "app/redux/types";

export const authAction = {
  canActive() {
    return {
      type: types.CAN_ACTIVE,
    }
  },
  signOut(payload: PayloadSigOut) {
    return {
      type: types.SIGN_OUT,
      payload,
    }
  },
  loginWithEmailPassword(payload: IPayloadLoginWithEmailPassword) {
    // eslint-disable-next-line no-console
    console.log(`payload`, payload)
    return {
      type: types.LOGIN_WITH_EMAIL_PASSWORD,
      payload,
    }
  },
};
