import { useState } from "react";

const LoginPhone = () => {
  const [phoneLogin, setPhoneLogin] = useState<string>();
  const [loadingSendCode] = useState(true);
  const [isLogin, setIsLogin] = useState({
    isPhone: true,
    errorPhone: true,
    message: "",
  });
  const hideFromLogin = () => {};
  const onRegPhone = () => {};
  return (
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
                defaultValue={phoneLogin && phoneLogin}
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
              {loadingSendCode ? (
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
                  {" "}
                  <i className="fa-solid fa-right-to-bracket" />
                  ĐĂNG NHẬP{" "}
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
          <button type="button" className="loginFacebook">
            {/* <i className="fa-brands fa-facebook" /> */}
            ĐĂNG KÍ TÀI KHOẢN
          </button>
          <button type="button" className="loginGoogle">
            Quên mật khẩu
          </button>
        </div>
      </form>
    </div>
  );
};
export default LoginPhone;
