import { messages_vn } from "./../constants/messages/messages_vn";
import * as Yup from "yup";
import { REGEX_PHONE_VN } from "@/constants/validation/regex";
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
});

export const validationUserInfo = Yup.object().shape({
  fullName: Yup.string().required("Không được bỏ trống"),
  phone: Yup.string().required("Không được bỏ trống").matches(REGEX_PHONE_VN, {
    message: "Số điện thoại không đúng định dạng",
  }),
  email: Yup.string()
    .required("Không được bỏ trống ")
    .email("Email không đúng định dạng"),
});
export const validationRestPassword = Yup.object().shape({
  phone: Yup.string().required("Không được bỏ trống").matches(REGEX_PHONE_VN, {
    message: "Số điện thoại không đúng định dạng",
  }),
});
export const validationCodeOTP = Yup.object().shape({
  code: Yup.string()
    .required("Không được bỏ trống")
    .max(6, "Chỉ chưa tối ta 6 kí tự"),
});
export const validationNewPassword = Yup.object().shape({
  password: Yup.string().required("Mật khẩu không được để trống "),
  passwordConfirm: Yup.string()
    .required("Mật khẩu không được để trống ")
    .oneOf([Yup.ref("password")], "Mật khẩu không giống nhau "),
});
export const validationNewPassword2 = Yup.object().shape({
  password: Yup.string().required("Mật khẩu không được để trống "),
  repeat_password: Yup.string()
    .required("Mật khẩu không được để trống ")
    .oneOf([Yup.ref("password")], "Mật khẩu không giống nhau "),
});
export const validateUpdateNewPassword = Yup.object().shape({
  password_root: Yup.string().required("Mật khẩu không được để trống "),
  password_new: Yup.string().required("Mật khẩu không được để trống "),
  password_new_confirm: Yup.string()
    .required("Mật khẩu không được để trống ")
    .oneOf([Yup.ref("password_new")], "Mật khẩu không giống nhau "),
});
