/* eslint-disable no-control-regex */
/* eslint-disable prefer-template */
import moment from "moment";

export function formatShotDate(Date: any) {
  return moment(Date).format("DD MMM YYYY");
}
export function formatDateTime(Date: any) {
  return moment(Date).format("DD MMM YYYY, h:mm:ss a");
}

export function formatShotDateDetail(Date: any) {
  return moment(Date).format("DD/MMM/YYYY");
}

export function formatSize(size: any) {
  const data = Math.round(((size / 1024) * 100) / 100);
  const str = String(data) + " KB";
  return str;
}

export function validateHtml(params: string) {
  const d = document.createElement("div");
  d.innerHTML = params;
  return d.innerHTML;
}

export function formatDate(Date: any) {
  return moment(Date).format("YYYYMMDD");
}
export function formatDefaultDate(Date: any) {
  return moment(Date).format("YYYY-MM-DD");
}
export function formatDefaultTime(Date: any) {
  return moment(Date).format("hh:mm");
}
export function formatTime(time: any) {
  return time.replace(":", "");
}
