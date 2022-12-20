import {
  selectAuthSliceDataConfirmOTP,
  selectAuthSliceDataRestPassword,
  selectAuthSliceDataSendCode,
  selectAuthSliceDataVerifyCode,
} from "@/redux/features/auth/auth-selects";
import { onSetConfirmOTP, restartAuth } from "@/redux/features/auth/auth-slice";
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
  validationNewPassword2,
  validationRestPassword,
} from "@/schema/userSchema";
import { LoginRestPasswordData, RestPasswordData } from "@/types/login/login";
import { AuthNewRestPass } from "@/types/user/user";
import { useFormik } from "formik";
import { ChangeEvent, useEffect, useState } from "react";
import { useAuthContext } from "src/contexts/Auth/AuthContext";

const RestPassword = () => {
  const { loading, setUpRecaptcha, setLoading } = useAuthContext();
  const dataConfirmOTP = useAppSelector(selectAuthSliceDataConfirmOTP);
  const phoneRestPassword = useAppSelector(selectLoginPhone);
  const dataVerifyCode = useAppSelector(selectAuthSliceDataVerifyCode);
  const dataRestPassRdx = useAppSelector(selectAuthSliceDataRestPassword);
  const dataSendCode = useAppSelector(selectAuthSliceDataSendCode);
  const [error, setError] = useState<string>();
  const dispatch = useAppDispatch();
  const [isVerify, setIsVerify] = useState<boolean>(false);
  const [isSubmit, setIsSubmit] = useState<boolean>(false);
  const [isUpdatePass, setIsUpdatePass] = useState<boolean>(false);
  const [dataPasswordConfirm] = useState<AuthNewRestPass>({
    password: "",
    passwordConfirm: "",
  });
  const [dataRestPass] = useState<LoginRestPasswordData>({
    phone: "",
  });
  const [dataPasswordNew] = useState<RestPasswordData>({
    password: "",
    repeat_password: "",
  });
  const [dataCode] = useState<{ code: string }>({
    code: "",
  });
  const formikUpdatePass = useFormik({
    initialValues: dataPasswordNew,
    validationSchema: validationNewPassword2,
    onSubmit(values, formikHelpers) {
      setIsUpdatePass(true);
      dispatch(
        authRestPassword({
          phone: formik.values.phone,
          password: values.password,
        })
      );
    },
  });
  const formik = useFormik({
    initialValues: dataRestPass,
    validationSchema: validationRestPassword,
    onSubmit: async (values, formikHelpers) => {
      try {
        const response = await setUpRecaptcha(`+84${values.phone}`);
        dispatch(onSetConfirmOTP({ data: response }));
        setLoading(false);
        setIsVerify(true);
      } catch (error) {
        setIsVerify(false);
        setLoading(false);
      }
    },
  });

  const formik2 = useFormik({
    initialValues: dataCode,
    validationSchema: validationCodeOTP,
    onSubmit: async (values, formikHelpers) => {
      try {
        if (dataConfirmOTP.data) {
          setLoading(true);
          await dataConfirmOTP.data.confirm(values.code);
          setLoading(false);
          setIsSubmit(true);
        }
      } catch (error) {
        setLoading(false);
        setError("Mã xác nhận không chính xác vui lòng kiểm tra lại");
      }
    },
  });
  const onClose = () => {
    dispatch(onRestDisplay());
    dispatch(restartAuth());
  };
  useEffect(() => {
    if (isUpdatePass && !dataRestPassRdx.loading && !dataRestPassRdx.error) {
      dispatch(onRestDisplay());
      dispatch(onDisplayLogin({ isShowFixed: true, isShowPhone: true }));
    }
    //eslint-disable-next-line
  }, [dataRestPassRdx]);
  if (isSubmit) {
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
              <form
                onSubmit={formikUpdatePass.handleSubmit}
                className="regUser"
              >
                <div className="regUser__item">
                  <label htmlFor="code">Nhập mật khẩu mới</label>
                  <input
                    type="password"
                    name="password"
                    onChange={formikUpdatePass.handleChange}
                    value={formikUpdatePass.values.password}
                    id="code"
                  />
                </div>
                <div className="regUser__item">
                  <label htmlFor="code">Nhập lại mật khẩu mới</label>
                  <input
                    type="password"
                    name="repeat_password"
                    onChange={formikUpdatePass.handleChange}
                    value={formikUpdatePass.values.repeat_password}
                    id="code"
                  />
                </div>
                {console.log(formikUpdatePass.errors)}
                <div className="btnLogin">
                  <button type="submit">Xác nhận</button>
                </div>
              </form>
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
            {isVerify ? (
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
                  {error && error}
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
                <div
                  style={{ display: "flex", justifyContent: "center" }}
                  id="recaptcha-container"
                />
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
                    {loading ? (
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
