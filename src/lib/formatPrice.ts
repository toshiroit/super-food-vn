import { configFormatVND } from "@/config/config";
import { ConfigFormatVND } from "@/types/format/format";

export const formatPriceVND = (price: number | bigint) => {
  const configFormat: ConfigFormatVND = configFormatVND;
  const formatted = new Intl.NumberFormat("vi-VN", configFormat).format(price);
  return formatted;
};
