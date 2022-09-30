import {
  ErrorLoginCode,
  IsCheckCodeLogin,
  LoginCodeValue,
} from "@/types/login/login";
import { useState } from "react";

const LoginCode = () => {
  const [code, setCode] = useState<LoginCodeValue>({
    code1: undefined,
    code2: undefined,
    code3: undefined,
    code4: undefined,
    code5: undefined,
    code6: undefined,
  });
  const [errorCode, setErrorCode] = useState<ErrorLoginCode>({
    isCode: true,
    message: null,
  });
  const [isCheckCode, setIsCheckCode] = useState<IsCheckCodeLogin>({
    isCheckCodeSubmit: false,
    message: null,
  });
  const onGetCode = () => {};
  const hideFromLogin = () => {};
  const onCheckCode = () => {};
  return (
    <div className="fixedLogin">
      <div className="fixedLogin__inner">
        <div className="prev">
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
        <form onSubmit={onCheckCode} method="POST">
          <div className="inputCode">
            <ul className="inputLogin__code" style={{ overflowX: "scroll" }}>
              <li className="inputLogin__code___item">
                <input
                  onChange={onGetCode}
                  value={code.code1}
                  type="text"
                  name="code1"
                  className="codew1"
                />
              </li>
              <li className="inputLogin__code___item">
                <input
                  onChange={onGetCode}
                  value={code.code2}
                  type="text"
                  name="code2"
                  className="codew1"
                />
              </li>
              <li className="inputLogin__code___item">
                <input
                  onChange={onGetCode}
                  value={code.code3}
                  type="text"
                  name="code3"
                  className="codew1"
                />
              </li>
              <li className="inputLogin__code___item">
                <input
                  onChange={onGetCode}
                  value={code.code4}
                  type="text"
                  name="code4"
                  className="codew1"
                />
              </li>
              <li className="inputLogin__code___item">
                <input
                  onChange={onGetCode}
                  value={code.code5}
                  type="text"
                  name="code5"
                  className="codew1"
                />
              </li>
              <li className="inputLogin__code___item">
                <input
                  onChange={onGetCode}
                  value={code.code6}
                  type="text"
                  name="code6"
                  className="codew1"
                />
              </li>
            </ul>
            {errorCode.isCode ? (
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
                <p>{errorCode.message} </p>
              </div>
            )}{" "}
            {isCheckCode.isCheckCodeSubmit ? (
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
                <p>Mã xác nhận hết hạn hoặc không tổn tại </p>
              </div>
            )}
            {/* <div className="btnLogin">
              <p style={{ fontSize: "0.9rem" }}>
                {!isNaN(Number(second))
                  ? `Mã chỉ tồn tại trong ${second}`
                  : second}
              </p>
              <button
                style={{ marginTop: "5px" }}
                href="#"
                onClick={onRestSendCode}
                className="sendCode"
              >
                {loadingSendCode ? "Đang gửi" : " Gửi lại mã xác nhận"}
              </button>
              <a href="">
                <button type="submit">XÁC NHẬN</button>
              </a>
            </div> */}
            <a href="">
              <button type="submit">XÁC NHẬN</button>
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};
export default LoginCode;
