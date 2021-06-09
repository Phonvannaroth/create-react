/* eslint-disable import/no-cycle */
/* eslint-disable no-unneeded-ternary */
/* eslint-disable dot-notation */
import axios from "axios";
import axiosRetry from "axios-retry";
import qs from "qs";
import firebase from '../env/Environments'

const baseUrl = `${process.env.REACT_APP_BASE_URL}/api`;
const tokenUrl: string = `${process.env.REACT_APP_BASE_URL}/oauth/token`;
const tokenRevoke: string = `${process.env.REACT_APP_BASE_URL}/oauth/revoke`;

export const Axios = axios.create({
  baseURL: baseUrl,
  headers: { "Content-Type": "application/json" },
  timeout: 12000,
  timeoutErrorMessage: "Connection timeout",
});

export const AxiosDownload = axios.create({
  baseURL: baseUrl,
  method: "GET",
  headers: { "Content-Type": "application/json" },
  responseType: "blob",
  timeout: 12000,
  timeoutErrorMessage: "Connection timeout",
});

axiosRetry(Axios, {
  retries: 3,
  retryDelay: (retryCount) => {
    return retryCount * 1000;
  },
  retryCondition: (e) => {
    if (e.request._method === "POST") {
      return true;
    }
    return false;
  },
});
export async function tokenRef(user: string, pass: string) {
  const payload: any = qs.stringify({
    username: user,
    password: pass,
    grant_type: "password",
  });
  const config: any = {
    method: "post",
    url: tokenUrl,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: "Basic YmRtX2dhdGV3YXk6V2luZ0AxMjM=",
    },
    data: payload,
  };
  const res: any = await axios.post(config.url, payload, config);
  if (res.data.result) {
    Axios.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${res.data.body.access_token}`;
    AxiosDownload.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${res.data.body.access_token}`;
  }

  return res ? res : null;
}

export async function tokenRevokeRef(accessToken: string) {
  const config: any = {
    method: "post",
    url: `${tokenRevoke}/${accessToken}`,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: "Basic YmRtX2dhdGV3YXk6V2luZ0AxMjM=",
    },
  };
  const res: any = await axios.post(config.url, config);
  return res ? res : null;
}

const db = firebase.firestore();

export function createId() {
  return db.collection('category').doc().id;
}
export function categoryRef() {
  return db.collection('category');
}
