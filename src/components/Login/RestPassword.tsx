import {
  selectAuthSliceDataRestPassword,
  selectAuthSliceDataSendCode,
  selectAuthSliceDataVerifyCode,
} from "@/redux/features/auth/auth-selects";
import { restartAuth } from "@/redux/features/auth/auth-slice";
import {
  authRestPassword,
  authSendCode,
  authVerifyCode,
} from "@/redux/features/auth/auth-thunks";
import {
  onDisplayLogin,
  onRestDisplay,
} from "@/redux/features/display/display-slice";
import { selectLoginPhone } from "@/redux/features/login/login-selects";
import { useAppDispatch, useAppSelector } from "@/redux/hooks/hooks";
import {
  validationCodeOTP,
  validationNewPassword,
  validationRestPassword,
} from "@/schema/userSchema";
import { LoginRestPasswordData } from "@/types/login/login";
import { AuthNewRestPass } from "@/types/user/user";
import { useFormik } from "formik";
import { ChangeEvent, useEffect, useState } from "react";

const RestPassword = () => {
  const phoneRestPassword = useAppSelector(selectLoginPhone);
  const dataVerifyCode = useAppSelector(selectAuthSliceDataVerifyCode);
  const dataRestPassRdx = useAppSelector(selectAuthSliceDataRestPassword);
  const dataSendCode = useAppSelector(selectAuthSliceDataSendCode);
  const dispatch = useAppDispatch();
  const [isVerify, setIsVerify] = useState<boolean>(false);
  const [isSubmit, setIsSubmit] = useState<boolean>(false);
  const [dataPasswordConfirm] = useState<AuthNewRestPass>({
    password: "",
    passwordConfirm: "",
  });
  const [dataRestPass] = useState<LoginRestPasswordData>({
    phone: "",
  });
  const [dataCode] = useState<{ code: string }>({
    code: "",
  });
  const formik = useFormik({
    initialValues: dataRestPass,
    validationSchema: validationRestPassword,
    onSubmit(values, formikHelpers) {
      setIsSubmit(true);
      dispatch(authSendCode({ phone: values.phone }));
    },
  });

  const formik2 = useFormik({
    initialValues: dataCode,
    validationSchema: validationCodeOTP,
    onSubmit(values, formikHelpers) {
      dispatch(authVerifyCode({ code: values.code }));
      setIsVerify(true);
    },
  });
  const onClose = () => {
    dispatch(onRestDisplay());
    dispatch(restartAuth());
  };

  useEffect(() => {
    if (isVerify && !dataVerifyCode.loading && dataVerifyCode.message) {
      dispatch(authRestPassword({ phone: formik.values.phone }));
    }
    //eslint-disable-next-line
  }, [isVerify, dataVerifyCode]);
  if (isVerify && !dataVerifyCode.loading && dataVerifyCode.message) {
    return (
      <div className="fixedLogin__inner">
        <div onClick={onClose} className="close">
          <i className="fa-solid fa-xmark fa-size" />
        </div>
        <>
          <div className="content">
            <h4>Chào mừng bạn đến với Super Ship</h4>
            <p>Đặt lại mật khẩu của bạn</p>
          </div>
          <div className="inputLogin">
            <div className="input">
              <div className="btnLogin">
                <button onClick={onClose} type="button">
                  Thay đổi mật khẩu thành công - Vui lòng kiểm tra tin nhắn mật
                  khẩu mới nhắn về số điện thoại bạn
                </button>
              </div>
            </div>
          </div>
        </>
      </div>
    );
  }
  return (
    <div className="fixedLogin__inner">
      <div onClick={onClose} className="close">
        <i className="fa-solid fa-xmark fa-size" />
      </div>
      <>
        <div className="content">
          <h4>Chào mừng bạn đến với Super Ship</h4>
          <p>Đặt lại mật khẩu của bạn</p>
        </div>
        <div className="inputLogin">
          <div className="input">
            {isSubmit && !dataSendCode.loading ? (
              <form onSubmit={formik2.handleSubmit} className="regUser">
                <div className="regUser__item">
                  <label htmlFor="code">Xác nhận mã OTP</label>
                  <input
                    type="text"
                    name="code"
                    onChange={formik2.handleChange}
                    value={formik2.values.code}
                    id="code"
                    placeholder="Xác nhận OTP"
                  />
                </div>
                <p
                  className="error"
                  style={{
                    marginTop: "5px",
                    fontSize: "0.9rem",
                    color: "#f70e0e",
                  }}
                >
                  {formik2.touched.code && formik2.errors.code}
                  {dataVerifyCode.error && dataVerifyCode.error.message}
                </p>
                <div className="btnLogin">
                  <button type="submit">Xác nhận</button>
                </div>
              </form>
            ) : (
              <form onSubmit={formik.handleSubmit} className="regUser">
                <div className="regUser__item">
                  <label htmlFor="phone">Số điện thoại</label>
                  <input
                    type="text"
                    name="phone"
                    onChange={formik.handleChange}
                    value={formik.values.phone}
                    id="phone"
                    placeholder="Xác nhận số điện thoại"
                  />
                </div>
                <p
                  className="error"
                  style={{
                    marginTop: "5px",
                    fontSize: "0.9rem",
                    color: "#f70e0e",
                  }}
                >
                  {formik.touched.phone && formik.errors.phone}
                </p>
                <div className="btnLogin">
                  <button type="submit">
                    {dataSendCode.loading ? (
                      <div className="loadingio-spinner-spinner-bbeydwj1ls">
                        <div className="ldio-m09wsst1j2">
                          <div></div>
                          <div></div>
                          <div></div>
                          <div></div>
                          <div></div>
                          <div></div>
                          <div></div>
                          <div></div>
                          <div></div>
                          <div></div>
                          <div></div>
                          <div></div>
                        </div>
                      </div>
                    ) : (
                      "Nhận mã xác nhận"
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </>
    </div>
  );
};
export default RestPassword;
