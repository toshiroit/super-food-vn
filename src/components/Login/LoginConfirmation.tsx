import {
  selectAuthData,
  selectAuthLoading,
  selectAuthSliceDataAll,
  selectAuthSliceDataLoginRegister,
} from "@/redux/features/auth/auth-selects";
import { restartAuth } from "@/redux/features/auth/auth-slice";
import { authLogin, authLoginPhone } from "@/redux/features/auth/auth-thunks";
import displaySlice, {
  onDisplayLogin,
} from "@/redux/features/display/display-slice";
import { selectLoginPhone } from "@/redux/features/login/login-selects";
import { useAppDispatch, useAppSelector } from "@/redux/hooks/hooks";
import { LoginConfirmation } from "@/types/login/login";
import { useFormik } from "formik";
import { useRouter } from "next/router";
import { FormEvent, useEffect, useState } from "react";
import { useAuthContext } from "src/contexts/Auth/AuthContext";
import { validationRegister } from "src/schemas/userSchema";

const LoginConfirmation = () => {
  const router = useRouter();
  const { data, isLogged } = useAuthContext();
  const dispatch = useAppDispatch();
  const [isSubmit, setIsSubmit] = useState<boolean>(false);
  const [isLoginPhone, setIsLoginPhone] = useState<boolean>(false);
  const phoneConfirmation = useAppSelector(selectLoginPhone);
  const dataReg = useAppSelector(selectAuthData);
  const dataAuthAllRdx = useAppSelector(selectAuthSliceDataAll);
  const dataLoginRegister = useAppSelector(selectAuthSliceDataLoginRegister);
  const loadingReg = useAppSelector(selectAuthLoading);
  const [dataFormConfirmation, setDataFormConfirmation] =
    useState<LoginConfirmation>({
      fullName: "",
      username: "",
      phone: phoneConfirmation,
      email: "",
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
    onSubmit(values) {},
  });

  const onRegister = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formik.isValid) {
      dispatch(authLogin(formik.values));
      setIsSubmit(true);
    }
  };
  useEffect(() => {
    if (isSubmit && !dataAuthAllRdx.loading) {
      setIsLoginPhone(true);
      dispatch(authLoginPhone(formik.values));
      //  dispatch(onDisplayLogin({ isShowFixed: false }));
    }
    //eslint-disable-next-line
  }, [isSubmit, dataAuthAllRdx.loading]);

  useEffect(() => {
    if (isLogged && !dataLoginRegister.loading) {
      dispatch(restartAuth());
      dispatch(onDisplayLogin({ isShowFixed: false }));
    }
    //eslint-disable-next-line
  }, [isLogged, dataLoginRegister.loading]);
  return (
    <div className="fixedLogin">
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
            {dataAuthAllRdx.loading ? (
              <></>
            ) : dataLoginRegister.loading ? (
              <></>
            ) : (
              <>
                <div className="regUser__item">
                  <label htmlFor="user">Tên của bạn </label>
                  <input
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.fullName}
                    name="fullName"
                    id=""
                  />
                  {formik.touched.fullName && formik.errors.fullName ? (
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
                  {formik.touched.username && formik.errors.username ? (
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
                  <label htmlFor="user">Email </label>
                  <input
                    // className={formError?.username ? "error" : ""}
                    type="text"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    name="email"
                    id=""
                  />
                  {formik.touched.email && formik.errors.email ? (
                    <p
                      className="error"
                      style={{
                        marginTop: "5px",
                        fontSize: "0.9rem",
                        color: "#f70e0e",
                      }}
                    >
                      {formik.errors.email}
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
                  {formik.touched.password && formik.errors.password ? (
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
                  {formik.touched.passwordConfirmation &&
                  formik.errors.passwordConfirmation ? (
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
              </>
            )}
            <div className="btnLogin">
              <button
                className={`${dataAuthAllRdx.loading ? "btn-disable" : ""}`}
                disabled={dataAuthAllRdx.loading}
                type="submit"
              >
                {dataAuthAllRdx.loading
                  ? "Đang đăng kí - Không reload lại trang"
                  : dataLoginRegister.loading
                  ? "Đang đăng nhập ...... "
                  : "Đăng kí"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default LoginConfirmation;
