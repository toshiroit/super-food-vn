import { CreateRequest } from "./../types/api/api";
import axios from "axios";
import { configAPI } from "@/config/config";
const setHeader = (
  isAuthRequired: boolean,
  contentType: string,
  Authorization: string
) => {
  if (isAuthRequired) {
    axios.defaults.headers.common["Authorization"] = Authorization;
  } else {
    delete axios.defaults.headers.common["Authorization"];
  }
  axios.defaults.headers.common["Access-Control-Allow-Credentials"] = true;
  axios.defaults.headers.common["Access-Control-Allow-Origin"] =
    configAPI.URL_ALLOW_ORIGIN;
  axios.defaults.headers.common["Access-Control-Allow-Methods"] = [
    "POST",
    "GET",
    "OPTIONS",
    "PUT",
    "DELETE",
    "PATCH",
  ];
  axios.defaults.headers.common["Access-Control-Allow-Headers"] = [
    "X-CSRF-Token",
    "Accept",
    "Accept-Version",
    "Content-Length",
    "Content-MD5",
    "Content-Type",
    "Date",
    "X-Api-Version",
    "X-Requested-With",
  ];
  axios.defaults.headers.common["Content-Type"] = contentType;
  return axios.defaults.headers.common;
  //   return axios.defaults.headers;
};
const createRequest: any = ({
  method,
  url,
  body,
  isAuthRequired,
  contentType,
  authorization,
}: CreateRequest) => {
  return axios({
    withCredentials: true,
    method: method,
    url: url,
    data: body,
    params: body,
    headers: setHeader(isAuthRequired, contentType, authorization),
  });
};
export const RequestServices = {
  get: ({
    method = "GET",
    url,
    body = null,
    isAuthRequired,
    contentType,
    authorization,
  }: CreateRequest) => {
    return createRequest({
      method,
      url,
      body,
      isAuthRequired,
      contentType,
      authorization,
    });
  },
  post: ({
    method = "POST",
    url,
    body = null,
    isAuthRequired,
    contentType,
    authorization,
  }: CreateRequest) => {
    return createRequest({
      method,
      url,
      body,
      isAuthRequired,
      contentType,
      authorization,
    });
  },
  put: ({
    method = "PUT",
    url,
    body = null,
    isAuthRequired,
    contentType,
    authorization,
  }: CreateRequest) => {
    return createRequest({
      method,
      url,
      body,
      isAuthRequired,
      contentType,
      authorization,
    });
  },
  del: ({
    method = "DELETE",
    url,
    isAuthRequired,
    contentType,
    authorization,
  }: CreateRequest) => {
    return createRequest({
      method,
      url,
      isAuthRequired,
      contentType,
      authorization,
    });
  },
};
