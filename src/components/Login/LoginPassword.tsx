import { useState } from "react";

const LoginPassword = () => {
  const [dataPassword, setDataPassword] = useState({
    password: "",
    passwordConfirmation: "",
  });
  const onSubmitLogin = () => {};
  return (
    <>
      <div className="fixedLogin" style={{}}>
        <div className="fixedLogin__inner">
          <div className="close">
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
                  onChange={(e) =>
                    setDataPassword({
                      ...dataPassword,
                      password: e.target.value,
                    })
                  }
                  type="password"
                  name="password"
                  id=""
                />
              </div>
              <div className="regUser__item">
                <label htmlFor="user"> Nhập lại mật khẩu </label>
                <input
                  onChange={(e) =>
                    setDataPassword({
                      ...dataPassword,
                      passwordConfirmation: e.target.value,
                    })
                  }
                  type="password"
                  name="passwordConfirmation"
                  id=""
                />
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
