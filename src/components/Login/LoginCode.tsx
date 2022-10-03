import { onDisplayLogin } from "@/redux/features/display/display-slice";
import { selectLoginPhone } from "@/redux/features/login/login-selects";
import { useAppDispatch, useAppSelector } from "@/redux/hooks/hooks";
import {
  ErrorLoginCode,
  IsCheckCodeLogin,
  LoginCodeValue,
} from "@/types/login/login";
import { useFormik } from "formik";
import { FormEvent, useState } from "react";
import { validationCodeSchema } from "src/schemas/userSchema";

const LoginCode = () => {
  const [code, setCode] = useState<LoginCodeValue>({
    code1: "",
    code2: "",
    code3: "",
    code4: "",
    code5: "",
    code6: "",
  });
  const [errorCode, setErrorCode] = useState<ErrorLoginCode>({
    isCode: false,
    message: null,
  });
  const [isCheckCode, setIsCheckCode] = useState<IsCheckCodeLogin>({
    isCheckCodeSubmit: false,
    message: null,
  });
  const formik = useFormik({
    initialValues: code,
    validationSchema: validationCodeSchema,
    onSubmit: (value) => {
      if (formik.isValid) {
        dispatch(
          onDisplayLogin({ isShowFixed: true, isShowConfirmation: true })
        );
      }
    },
  });
  const phoneLoginRdx = useAppSelector(selectLoginPhone);
  const dispatch = useAppDispatch();
  const onGetCode = () => {};
  const hideFromLogin = () => {
    dispatch(onDisplayLogin({ isShowFixed: false }));
  };

  const onCheckCode = (e: FormEvent<HTMLFormElement>) => {};
  const onPrevLogin = () => {
    dispatch(onDisplayLogin({ isShowFixed: true, isShowPhone: true }));
  };
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
                <button type="submit">XÁC NHẬN</button>
              </a>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
export default LoginCode;
