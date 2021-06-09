/* eslint-disable import/no-cycle */
/* eslint-disable no-console */
/* eslint-disable dot-notation */
/* eslint-disable no-unneeded-ternary */
import Cookies from "js-cookie";
import { Axios } from "./data.service";

const ACCESS_TOKEN_NAME: string = "USER";
const CONTROL_SETTING: string = "SETTING";
const CONTROL_DATA: string = "DATA";
export interface IUserCookie {
  value: any;
  expires: number;
}
export function saveCookie(data: IUserCookie) {
  const value = JSON.stringify(data);
  Cookies.set(ACCESS_TOKEN_NAME, value, { expires: data.expires });
}

export async function getCookie() {
  const res = Cookies.get(ACCESS_TOKEN_NAME);
  const setting = Cookies.get(CONTROL_SETTING);
  if (res) {
    const data = JSON.parse(res);
    Axios.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${data.value.body.access_token}`;
    const cookie = {
      ...data,
      sidebar: setting,
    };
    return cookie;
  }
  return null;
}
export async function removeCookie() {
  await Cookies.remove(ACCESS_TOKEN_NAME);
  await Cookies.set(CONTROL_SETTING, "0");
}

export function saveSetting(data: number) {
  const value = JSON.stringify(data);
  Cookies.set(CONTROL_SETTING, value);
}
export async function getSetting() {
  const res = Cookies.get(CONTROL_SETTING);
  if (res) {
    const data = JSON.parse(res);
    return data;
  }
  return false;
}
export async function removeSetting() {
  await Cookies.remove(CONTROL_SETTING);
}

export function saveData(data: any) {
  const value = JSON.stringify(data);
  Cookies.set(CONTROL_DATA, value);
}
export function getData() {
  const res = Cookies.get(CONTROL_DATA);
  if (res) {
    const data = JSON.parse(res);
    return data;
  }
  return false;
}
