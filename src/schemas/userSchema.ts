import { messages_vn } from "./../constants/messages/messages_vn";
import * as Yup from "yup";
export const validationRegister = Yup.object().shape({
  fullName: Yup.string().required(messages_vn.REQUIRED),
  phone: Yup.string()
    .required(messages_vn.REQUIRED)
    .trim({ message: "Số điện thoại không được có khoảng trắng " }),
  username: Yup.string().required(messages_vn.REQUIRED).trim({
    message: "Tên đăng nhập không được có khoảng trắng ",
  }),
  password: Yup.string().required("Mật khẩu không được để trống "),
  passwordConfirmation: Yup.string()
    .required("Mật khẩu không được để trống ")
    .oneOf([Yup.ref("password")], "Mật khẩu không giống nhau "),
});
export const validationCodeSchema = Yup.object({
  code1: Yup.string().required("Error").max(1),
  code2: Yup.string().required("Error").max(1),
  code3: Yup.string().required("Error").max(1),
  code4: Yup.string().required("Error").max(1),
  code5: Yup.string().required("Error").max(1),
  code6: Yup.string().required("Error").max(1),
});
export const validationLogin = Yup.object().shape({
  phone: Yup.string().required("Số điện thoại không tồn tại "),
  password: Yup.string()
    .required("Mật khẩu không được để trống ")
    .min(6, "Mật khẩu tối thiểu phải 6 kí tự "),
  passwordConfirmation: Yup.string()
    .required("Mật khẩu không được để trống")
    .min(6, "Mật khẩu tối thiểu phải 6 kí tự ")
    .oneOf([Yup.ref("password")], "Mật khẩu không giống nhau"),
});
