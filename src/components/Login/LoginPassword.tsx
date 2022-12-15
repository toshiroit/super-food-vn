import {
  selectAuthData,
  selectAuthError,
  selectAuthLoading,
} from "@/redux/features/auth/auth-selects";
import { restartAuth } from "@/redux/features/auth/auth-slice";
import { authLoginPhone } from "@/redux/features/auth/auth-thunks";
import { onDisplayLogin } from "@/redux/features/display/display-slice";
import {
  selectLoginFullData,
  selectLoginPhone,
} from "@/redux/features/login/login-selects";
import { addPassword } from "@/redux/features/login/login-slice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks/hooks";
import { validationLogin } from "@/schema/userSchema";
import { LoginPhone } from "@/types/login/login";
import { UserLoginPassword } from "@/types/user/user";
import { useFormik } from "formik";
import { useRouter } from "next/router";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";

const LoginPassword = () => {
  const phoneConfirmation = useAppSelector(selectLoginPhone);
  const loadingAuth = useAppSelector(selectAuthLoading);
  const authDataLogin = useAppSelector(selectAuthData);
  const errorAuthLogin = useAppSelector(selectAuthError);
  const router = useRouter();
  const [errorPassword, setErrorPassword] = useState({
    isActive: false,
    message: "",
  });
  const [dataLogin, setDataLogin] = useState<LoginPhone>({
    phone: phoneConfirmation,
    password: "",
    passwordConfirmation: "",
  });
  const dispatch = useAppDispatch();
  const formik = useFormik({
    initialValues: dataLogin,
    validationSchema: validationLogin,
    onSubmit(values, formikHelpers) {
      if (!authDataLogin) {
        dispatch(authLoginPhone(values));
      }
    },
  });
  const onSubmitLogin = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  const onHideLogin = () => {
    dispatch(onDisplayLogin({ isShowFixed: false }));
    dispatch(restartAuth());
  };
  useEffect(() => {
    if (!loadingAuth && authDataLogin) {
      dispatch(onDisplayLogin({ isShowFixed: false }));
      router.push("/");
    }
    //eslint-disable-next-line
  }, [loadingAuth, authDataLogin]);
  useEffect(() => {
    formik.setFieldValue("passwordConfirmation", formik.values.password);
    //eslint-disable-next-line
  }, [formik.values.password]);
  return (
    <>
      <div className="fixedLogin" style={{}}>
        <div className="fixedLogin__inner">
          <div onClick={onHideLogin} className="close">
            <i className="fa-solid fa-xmark fa-size" />
          </div>
          <div className="logo">
            <picture>
              <img
                src="http://static.ybox.vn/2022/5/5/1652409811891-cropped-Logo_genex_convertcircle.png"
                alt=""
              />
            </picture>
          </div>
          <div className="content">
            <h4>XÁC NHẬN THÔNG TIN</h4>
            <p>Vui lòng nhập mật khẩu của bạn </p>
          </div>
          <div className="inputLogin">
            <form onSubmit={formik.handleSubmit} className="regUser" action="">
              <div className="regUser__item">
                <label htmlFor="user"> Mật khẩu của bạn </label>
                <input
                  onChange={formik.handleChange}
                  value={formik.values.password}
                  className={errorPassword.isActive ? "error" : ""}
                  type="password"
                  name="password"
                  id=""
                />
                <p
                  className="error"
                  style={{
                    marginTop: "5px",
                    fontSize: "0.9rem",
                    color: "#f70e0e",
                  }}
                >
                  {formik.touched.password && formik.errors.password}
                </p>
              </div>
              <div className="btnLogin">
                <p
                  className="error"
                  style={{
                    marginTop: "5px",
                    fontSize: "0.9rem",
                    color: "#f70e0e",
                  }}
                >
                  {errorAuthLogin &&
                    errorAuthLogin.response &&
                    errorAuthLogin.response.data?.message}
                  {/* {formik.errors.phone} */}
                </p>
                <button type="submit">
                  {loadingAuth ? (
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
                    "XÁC NHẬN"
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default LoginPassword;
