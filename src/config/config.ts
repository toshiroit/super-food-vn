import { ConfigFormatVND } from "src/types/format/format";
export const configFormatVND: ConfigFormatVND = {
  style: "currency",
  currency: "VND",
  maximumFractionDigits: 0,
};
export const configAPI = {
  URL_BACKEND:
    (process.env.NEXT_PUBLIC_URL_BACKEND_NODE_JS_V16 as string) ||
    "http://localhost:8080/api",
  URL_SOCKET_IO: process.env.NEXT_PUBLIC_URL_BACKEND_SOCKET,
  URL_ALLOW_ORIGIN: process.env.NEXT_PUBLIC_ALLOW_ORIGIN,
};

export const configRoot = {};
