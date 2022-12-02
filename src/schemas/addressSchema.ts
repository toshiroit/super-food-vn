import { messages_vn } from "./../constants/messages/messages_vn";
import * as Yup from "yup";
import { REGEX_PHONE_VN } from "@/constants/validation/regex";
export const validationAddAddress = Yup.object().shape({
  full_name: Yup.string().required(messages_vn.REQUIRED),
  phone: Yup.string().required(messages_vn.REQUIRED).matches(REGEX_PHONE_VN, {
    message: "Số điện thoại không đúng định dạng ",
  }),
  email: Yup.string()
    .required(messages_vn.REQUIRED)
    .email("Email không đúng định dạng "),
  street: Yup.string().required(messages_vn.REQUIRED),
  village: Yup.string().required(messages_vn.REQUIRED),
  district: Yup.string().required(messages_vn.REQUIRED),
  city: Yup.string().required(messages_vn.REQUIRED),
  detail_address: Yup.string().required(messages_vn.REQUIRED),
});
