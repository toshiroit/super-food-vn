import { selectDisplayIsShowLogin } from "@/redux/features/display/display-selects";
import { useSelector } from "react-redux";
import LoginCode from "./LoginCode";
import LoginConfirmation from "./LoginConfirmation";
import LoginPassword from "./LoginPassword";
import LoginPhone from "./LoginPhone";

const Login = () => {
  const isShowLogin = useSelector(selectDisplayIsShowLogin);
  return (
    <>
      {isShowLogin.isShowPhone ? (
        <LoginPhone />
      ) : isShowLogin.isShowCode ? (
        <LoginCode />
      ) : isShowLogin.isShowConfirmation ? (
        <LoginConfirmation />
      ) : isShowLogin.isShowPassword ? (
        <LoginPassword />
      ) : (
        ""
      )}
    </>
  );
};
export default Login;
