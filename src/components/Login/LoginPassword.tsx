import { authLogin } from "@/redux/features/auth/auth-thunks";
import { onDisplayLogin } from "@/redux/features/display/display-slice";
import { selectLoginFullData } from "@/redux/features/login/login-selects";
import { addPassword } from "@/redux/features/login/login-slice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks/hooks";
import { ChangeEvent, FormEvent, useState } from "react";

const LoginPassword = () => {
  const [errorPassword, setErrorPassword] = useState({
    isActive: false,
    message: "",
  });
  const dataLogin = useAppSelector(selectLoginFullData);
  const dispatch = useAppDispatch();
  const onChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(
      addPassword({
        ...dataLogin,
        [e.target.name]: e.target.value,
      })
    );
  };
  const onSubmitLogin = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (dataLogin) {
      if (dataLogin.password !== dataLogin.passwordConfirmation) {
        setErrorPassword({
          isActive: true,
          message: "Mật khẩu không trùng nhau ",
        });
      } else if (
        dataLogin.password.length > 100 ||
        dataLogin.passwordConfirmation.length > 100
      ) {
        setErrorPassword({
          isActive: true,
          message: "Mật khẩu quá dài  ",
        });
      }
      dispatch(authLogin);
    }
  };
  const onHideLogin = () => {
    dispatch(onDisplayLogin({ isShowFixed: false }));
  };
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
            <form onSubmit={onSubmitLogin} className="regUser" action="">
              <div className="regUser__item">
                <label htmlFor="user"> Mật khẩu của bạn </label>
                <input
                  onChange={onChangePassword}
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
                  {errorPassword.message}
                </p>
              </div>
              <div className="regUser__item">
                <label htmlFor="user"> Nhập lại mật khẩu </label>
                <input
                  onChange={onChangePassword}
                  type="password"
                  className={errorPassword.isActive ? "error" : ""}
                  name="passwordConfirmation"
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
                  {errorPassword.message}
                </p>
              </div>
              <div className="btnLogin">
                <a href="">
                  <button type="submit">XÁC NHẬN</button>
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default LoginPassword;
