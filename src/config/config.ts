import { ConfigFormatVND } from "src/types/format/format";
export const configFormatVND: ConfigFormatVND = {
  style: "currency",
  currency: "VND",
  maximumFractionDigits: 0,
};
export const configAPI = {
  URL_BACKEND:
    (process.env.URL_BACKEND_NODE_JS_V16 as string) ||
    "http://localhost:8080/api",
};
