import { selectAuthData, selectAuthLoading } from "@/redux/features/auth/auth-selects";
import { restartAuth } from "@/redux/features/auth/auth-slice"; import { authLogin } from "@/redux/features/auth/auth-thunks";
import { onDisplayLogin } from "@/redux/features/display/display-slice";
import { selectLoginPhone } from "@/redux/features/login/login-selects";
import { useAppDispatch, useAppSelector } from "@/redux/hooks/hooks";
import { LoginConfirmation } from "@/types/login/login";
import { useFormik } from "formik";
import { useRouter } from "next/router";
import { FormEvent, useEffect, useState } from "react";
import { validationRegister } from "src/schemas/userSchema";

const LoginConfirmation = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const phoneConfirmation = useAppSelector(selectLoginPhone);
  const dataReg = useAppSelector(selectAuthData)
  const loadingReg = useAppSelector(selectAuthLoading)
  const [dataFormConfirmation, setDataFormConfirmation] =
    useState<LoginConfirmation>({
      fullName: "",
      username: "",
      phone: phoneConfirmation,
      passwordConfirmation: "",
      password: "",
      role: "USER",
    });

  const hideFromLogin = () => {
    dispatch(onDisplayLogin({ isShowFixed: false }));
    dispatch(restartAuth());
  };
  const formik = useFormik({
    initialValues: dataFormConfirmation,
    validationSchema: validationRegister,
    onSubmit(values) { },
  });

  const onRegister = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formik.isValid) {
      dispatch(authLogin(formik.values));
      router.push("/");
      dispatch(

        onDisplayLogin({ isShowFixed: false, isShowConfirmation: false })
      );

    }
  };
  useEffect(() => {
    console.log(dataReg, loadingReg)
    if (dataReg && !loadingReg) {


    }
    // eslint-disable-line
  }, [loadingReg, dispatch, dataReg])
  return (
    <div className="fixedLogin" style={{}}>
      <div className="fixedLogin__inner">
        <div onClick={hideFromLogin} className="close">
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
          <p>Điền các thông tin đầy đủ để sử dụng hệ thống</p>
        </div>
        <div className="inputLogin">
          <form onSubmit={onRegister} className="regUser">
            <div className="regUser__item">
              <label htmlFor="user">Tên của bạn </label>
              <input
                type="text"
                onChange={formik.handleChange}
                value={formik.values.fullName}
                name="fullName"
                id=""
              />
              {formik.errors.fullName ? (
                <p
                  className="error"
                  style={{
                    marginTop: "5px",
                    fontSize: "0.9rem",
                    color: "#f70e0e",
                  }}
                >
                  {formik.errors.fullName}
                </p>
              ) : (
                ""
              )}
            </div>
            <div className="regUser__item">
              <label htmlFor="user">Tên đăng nhập </label>
              <input
                // className={formError?.username ? "error" : ""}
                type="text"
                value={formik.values.username}
                onChange={formik.handleChange}
                name="username"
                id=""
              />
              {formik.errors.username ? (
                <p
                  className="error"
                  style={{
                    marginTop: "5px",
                    fontSize: "0.9rem",
                    color: "#f70e0e",
                  }}
                >
                  {formik.errors.username}
                </p>
              ) : (
                ""
              )}
            </div>
            <div className="regUser__item">
              <label htmlFor="user">Mật khẩu </label>
              <input
                onChange={formik.handleChange}
                value={formik.values.password}
                // className={formError?.password ? "error" : ""}
                type="password"
                name="password"
                id=""
              />
              {formik.errors.password ? (
                <p
                  className="error"
                  style={{
                    marginTop: "5px",
                    fontSize: "0.9rem",
                    color: "#f70e0e",
                  }}
                >
                  {formik.errors.password}
                </p>
              ) : (
                ""
              )}
            </div>
            <div className="regUser__item">
              <label htmlFor="user">Xác nhận mật khẩu </label>
              <input
                value={formik.values.passwordConfirmation}
                // className={formError?.passwordConfirmation ? "error" : ""}
                onChange={formik.handleChange}
                type="password"
                name="passwordConfirmation"
                id=""
              />
              {formik.errors.passwordConfirmation ? (
                <p
                  className="error"
                  style={{
                    marginTop: "5px",
                    fontSize: "0.9rem",
                    color: "#f70e0e",
                  }}
                >
                  {formik.errors.passwordConfirmation}
                </p>
              ) : (
                ""
              )}
            </div>
            <p style={{ textAlign: 'center', fontSize: '0.9rem', color: '#f70e0e' }}>Đăng kí tài khoản không thành công </p>
            <div className="btnLogin">
              <button type="reset" className="sendCode">
                Đặt lại
              </button>
              <button type="submit">
                {
                  loadingReg ? 'Đang đăng kí ' : 'Đăng kí'
                }
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default LoginConfirmation;
