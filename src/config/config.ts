import { ConfigFormatVND } from "src/types/format/format";
export const configFormatVND: ConfigFormatVND = {
  style: "currency",
  currency: "VND",
  maximumFractionDigits: 9,
};
export const configAPI = {
  URL_BACKEND:
    (process.env.URL_BACKEND_NODE_JS_V16 as string) ||
    "http://localhost:8080/api",
};
