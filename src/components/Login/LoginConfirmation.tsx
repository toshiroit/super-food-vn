import { LoginFormError } from "@/types/login/login";
import { useState } from "react";

const LoginConfirmation = () => {
  const [formError, setFormError] = useState<LoginFormError>();
  const hideFromLogin = () => {};
  const onConfirmRegister = () => {};
  const onChangeUser = () => {};
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
          <form onSubmit={onConfirmRegister} className="regUser" action="">
            <div className="regUser__item">
              <label htmlFor="user">Tên của bạn </label>
              <input
                onChange={onChangeUser}
                className={formError?.fullName ? "error" : ""}
                type="text"
                name="fullName"
                id=""
              />
              {formError?.fullName ? (
                <p
                  className="error"
                  style={{
                    marginTop: "5px",
                    fontSize: "0.9rem",
                    color: "#f70e0e",
                  }}
                >
                  {formError.fullName}
                </p>
              ) : (
                ""
              )}
            </div>
            <div className="regUser__item">
              <label htmlFor="user">Tên đăng nhập </label>
              <input
                onChange={onChangeUser}
                className={formError?.username ? "error" : ""}
                type="text"
                name="userName"
                id=""
              />
              {formError?.username ? (
                <p
                  className="error"
                  style={{
                    marginTop: "5px",
                    fontSize: "0.9rem",
                    color: "#f70e0e",
                  }}
                >
                  {formError?.username}{" "}
                </p>
              ) : (
                ""
              )}
            </div>
            <div className="regUser__item">
              <label htmlFor="user">Mật khẩu </label>
              <input
                onChange={onChangeUser}
                className={formError?.password ? "error" : ""}
                type="password"
                name="passWord1"
                id=""
              />
              {formError?.password ? (
                <p
                  className="error"
                  style={{
                    marginTop: "5px",
                    fontSize: "0.9rem",
                    color: "#f70e0e",
                  }}
                >
                  {formError?.password}
                </p>
              ) : (
                ""
              )}
            </div>
            <div className="regUser__item">
              <label htmlFor="user">Xác nhận mật khẩu </label>
              <input
                onChange={onChangeUser}
                className={formError?.passwordConfirmation ? "error" : ""}
                type="password"
                name="passWord"
                id=""
              />
              {formError?.passwordConfirmation ? (
                <p
                  className="error"
                  style={{
                    marginTop: "5px",
                    fontSize: "0.9rem",
                    color: "#f70e0e",
                  }}
                >
                  {formError.passwordConfirmation}{" "}
                </p>
              ) : (
                ""
              )}
            </div>
            <div className="btnLogin">
              <button type="reset" className="sendCode">
                Đặt lại
              </button>
              <a href="">
                <button type="submit">XÁC NHẬN</button>
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default LoginConfirmation;
