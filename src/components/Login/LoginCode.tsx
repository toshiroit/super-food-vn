import {
  selectAuthData,
  selectAuthDataCheckPhone,
  selectAuthLoading,
  selectAuthVerifyCode,
} from "@/redux/features/auth/auth-selects";
import { restartAuth } from "@/redux/features/auth/auth-slice";
import {
  authCheckPhone,
  authVerifyCode,
} from "@/redux/features/auth/auth-thunks";
import { onDisplayLogin } from "@/redux/features/display/display-slice";
import { selectLoginPhone } from "@/redux/features/login/login-selects";
import { useAppDispatch, useAppSelector } from "@/redux/hooks/hooks";
import {
  ErrorLoginCode,
  IsCheckCodeLogin,
  LoginCodeValue,
} from "@/types/login/login";
import { useFormik } from "formik";
import { FormEvent, useEffect, useState } from "react";
import { validationCodeSchema } from "src/schemas/userSchema";

const LoginCode = () => {
  const dispatch = useAppDispatch();
  const [code, setCode] = useState<LoginCodeValue>({
    code1: "",
    code2: "",
    code3: "",
    code4: "",
    code5: "",
    code6: "",
  });
  const loadingCheckPhone = useAppSelector(selectAuthLoading);
  const dataVerifyCode = useAppSelector(selectAuthVerifyCode);
  const dataCheckPhone = useAppSelector(selectAuthDataCheckPhone);
  const phoneLogin = useAppSelector(selectLoginPhone);
  const formik = useFormik({
    initialValues: code,
    validationSchema: validationCodeSchema,
    onSubmit: (value) => {
      if (formik.isValid) {
        dispatch(authCheckPhone({ phone: phoneLogin }));
        dispatch(authVerifyCode({ code: "666666" }));
      }
    },
  });

  const hideFromLogin = () => {
    dispatch(onDisplayLogin({ isShowFixed: false }));
    dispatch(restartAuth());
  };
  const onPrevLogin = () => {
    dispatch(onDisplayLogin({ isShowFixed: true, isShowPhone: true }));
    dispatch(restartAuth());
  };
  useEffect(() => {
    if (dataCheckPhone) {
      if (dataCheckPhone.data === 0) {
        dispatch(
          onDisplayLogin({ isShowConfirmation: true, isShowFixed: true })
        );
      } else if (dataCheckPhone.data === 1) {
        dispatch(onDisplayLogin({ isShowPassword: true, isShowFixed: true }));
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dataCheckPhone]);
  return (
    <div className="fixedLogin">
      <div className="fixedLogin__inner">
        <div onClick={onPrevLogin} className="prev">
          <i className="fa-size fa-solid fa-angle-left" />
        </div>
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
          <h4>Xác nhận số điện thoại</h4>
          <p>Xem mã được gửi qua số điện thoại của bạn có 6 chữ số</p>
        </div>
        <form onSubmit={formik.handleSubmit} method="POST">
          <div className="inputCode">
            <ul className="inputLogin__code" style={{ overflowX: "scroll" }}>
              <li className="inputLogin__code___item">
                <input
                  value={formik.values.code1}
                  onChange={formik.handleChange}
                  type="text"
                  name="code1"
                  maxLength={1}
                  className="codew1"
                />
              </li>
              <li className="inputLogin__code___item">
                <input
                  value={formik.values.code2}
                  maxLength={1}
                  onChange={formik.handleChange}
                  type="text"
                  name="code2"
                  className="codew1"
                />
              </li>
              <li className="inputLogin__code___item">
                <input
                  value={formik.values.code3}
                  onChange={formik.handleChange}
                  type="text"
                  maxLength={1}
                  name="code3"
                  className="codew1"
                />
              </li>
              <li className="inputLogin__code___item">
                <input
                  value={formik.values.code4}
                  onChange={formik.handleChange}
                  type="text"
                  name="code4"
                  maxLength={1}
                  className="codew1"
                />
              </li>
              <li className="inputLogin__code___item">
                <input
                  value={formik.values.code5}
                  onChange={formik.handleChange}
                  type="text"
                  name="code5"
                  maxLength={1}
                  className="codew1"
                />
              </li>
              <li className="inputLogin__code___item">
                <input
                  value={formik.values.code6}
                  onChange={formik.handleChange}
                  type="text"
                  name="code6"
                  maxLength={1}
                  className="codew1"
                />
              </li>
            </ul>
            {formik.isValid ? (
              ""
            ) : (
              <div
                className="error"
                style={{
                  textAlign: "center",
                  fontSize: "0.9rem",
                  color: "#f70e0e",
                }}
              >
                <p>{"Không được để trống "} </p>
              </div>
            )}{" "}
            <div className="btnLogin">
              {/* <button
                style={{ marginTop: "5px" }}
                href="#"
                onClick={onRestSendCode}
                className="sendCode"
              >
                {loadingSendCode ? "Đang gửi" : " Gửi lại mã xác nhận"}
              </button> */}
              <a href="">
                <button type="submit">
                  {loadingCheckPhone ? (
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
              </a>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
export default LoginCode;
