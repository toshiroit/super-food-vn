import { checkPhone } from "@/lib/checkPhone";
import {
  selectAuthData,
  selectAuthDataCheckPhone,
  selectAuthLoading,
} from "@/redux/features/auth/auth-selects";
import { authSendCode } from "@/redux/features/auth/auth-thunks";
import { selectDisplayShowLogin } from "@/redux/features/display/display-selects";
import { onDisplayLogin } from "@/redux/features/display/display-slice";
import { selectLoginPhone } from "@/redux/features/login/login-selects";
import { addPhone } from "@/redux/features/login/login-slice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks/hooks";
import {
  ChangeEvent,
  FormEvent,
  HTMLInputTypeAttribute,
  useEffect,
  useState,
} from "react";

const LoginPhone = () => {
  const phoneConfirmation = useAppSelector(selectLoginPhone);
  const loadingCheckPhone = useAppSelector(selectAuthLoading);
  const dataCheckPhone = useAppSelector(selectAuthDataCheckPhone);
  const [phoneLogin, setPhoneLogin] = useState<string>(
    phoneConfirmation && phoneConfirmation
  );
  const [loadingSendCode] = useState(true);
  const [isLogin, setIsLogin] = useState({
    isPhone: true,
    errorPhone: true,
    message: "",
  });
  const dispatch = useAppDispatch();
  const onChangePhone = (e: ChangeEvent<HTMLInputElement>) => {
    setPhoneLogin(e.target.value);
  };
  const hideFromLogin = () => {
    dispatch(onDisplayLogin({ isShowFixed: false }));
  };
  const onRegPhone = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (checkPhone(phoneLogin as string, "VIE")) {
      setIsLogin({
        ...isLogin,
        isPhone: true,
        errorPhone: true,
        message: "",
      });
      dispatch(addPhone({ phone: phoneLogin }));
      // dispatch(authSendCode({ phone: phoneLogin }));
      dispatch(onDisplayLogin({ isShowCode: true, isShowFixed: true }));
    } else {
      setIsLogin({
        ...isLogin,
        isPhone: false,
        errorPhone: false,
        message: "Số điện không đúng định dạng ",
      });
    }
  };
  useEffect(() => {
    if (dataCheckPhone && !loadingCheckPhone) {
      // dispatch(onDisplayLogin({ isShowCode: true, isShowFixed: true }));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loadingCheckPhone, dataCheckPhone]);
  return (
    <>
      <div className="fixedLogin__inner">
        <form onSubmit={onRegPhone} action="">
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
            <h4>Chào mừng bạn đến với Super Ship</h4>
            <p>Nhập số điện thoại để đăng kí tài khoản</p>
          </div>
          <div className="inputLogin">
            <div className="reg">
              <span className="w">
                <picture>
                  <img
                    src="https://tea-3.lozi.vn/v1/statics/resized/country-flag-vn-1570251233"
                    alt=""
                  />
                </picture>
                +84
              </span>
              <div className="input">
                <input
                  type="number"
                  onChange={onChangePhone}
                  value={phoneLogin}
                  className={isLogin.isPhone ? "" : "errorPhone"}
                  placeholder="Nhập số điện thoại của bạn "
                  name="phone"
                  id=""
                />
                {isLogin.errorPhone ? (
                  <></>
                ) : (
                  <p className="error"> {isLogin.message} </p>
                )}
              </div>
            </div>

            <div className="btnLogin">
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
                  <>
                    <i className="fa-solid fa-right-to-bracket" />
                    ĐĂNG NHẬP
                  </>
                )}
              </button>
            </div>
          </div>
          <div className="twLogin">
            <div className="unline" />
            <h4 className="tw">Hoặc</h4>
          </div>
          <div className="orLogin">
            <button type="button" className="loginGoogle">
              Quên mật khẩu
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
export default LoginPhone;
