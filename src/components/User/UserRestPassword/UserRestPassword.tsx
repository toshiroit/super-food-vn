import LoadingSpinner from "@/components/Loading/LoadingSpinner";
import { selectUserSliceDataUpdatePassword } from "@/redux/features/user/user-selects";
import { updatePasswordUser } from "@/redux/features/user/user-thunks";
import { useAppDispatch, useAppSelector } from "@/redux/hooks/hooks";
import { validateUpdateNewPassword } from "@/schema/userSchema";
import { AuthUpdatePassword } from "@/types/user/user";
import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";

const UserRestPassword = () => {
  const dispatch = useAppDispatch();
  const dataUpdatePassword = useAppSelector(selectUserSliceDataUpdatePassword);
  const [isRestPass, setIsRestPass] = useState<boolean>(false);
  const [dataPassword] = useState<AuthUpdatePassword>({
    phone: "",
    password_root: "",
    password_new: "",
    password_new_confirm: "",
  });
  const formik = useFormik({
    initialValues: dataPassword,
    validationSchema: validateUpdateNewPassword,
    onSubmit(values, formikHelpers) {
      setIsRestPass(true);
      dispatch(updatePasswordUser(values));
    },
  });
  const onUpdatePassword = () => {
    formik.handleSubmit();
  };
  useEffect(() => {
    console.log("1 : ", isRestPass);
    console.log("2 : ", dataUpdatePassword);
    if (
      isRestPass &&
      !dataUpdatePassword.error &&
      !dataUpdatePassword.loading
    ) {
      formik.resetForm();
      toast.success(`Thay đổi mật khẩu thành công`, {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
    //eslint-disable-next-line
  }, [dataUpdatePassword.loading]);
  return (
    <div className="content">
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <div className="title">
        <h4>
          <i className="fa-solid fa-key fa-size" />
          Thay đổi mật khẩu
        </h4>
        <i id="showMenuUserIdx" className="fa-solid fa-bars" />
      </div>
      <div className="content__restPass">
        {dataUpdatePassword.loading ? (
          <LoadingSpinner css={{ padding: "30px", textAlign: "center" }} />
        ) : (
          <div className="content__restPass___main">
            <div className="title">
              <label htmlFor="">
                <i className="fa-solid fa-passport fa-size" />
              </label>
              <p>
                Mật khẩu mới nên có các kí tự đặc biệt kèm chữ hóa để tăng độ
                bảo mật
              </p>
            </div>
            <div style={{ marginTop: "15px" }} className="ipnPass">
              <div className="ipnPass__item">
                <label htmlFor="">
                  <i className="fa-solid fa-key fa-size" /> Mật khẩu cũ
                </label>
                <input
                  onChange={formik.handleChange}
                  value={formik.values.password_root}
                  type="password"
                  name="password_root"
                  id=""
                />
                <p
                  style={{
                    color: "#F33033",
                    fontSize: "0.9rem",
                    marginTop: "4px",
                  }}
                >
                  {formik.touched.password_root && formik.errors.password_root}
                </p>
              </div>
              <div className="ipnPass__item">
                <label htmlFor="">
                  <i className="fa-solid fa-key fa-size" /> Mật khẩu mới
                </label>
                <input
                  onChange={formik.handleChange}
                  value={formik.values.password_new}
                  type="password"
                  name="password_new"
                  id=""
                />
                <p
                  style={{
                    color: "#F33033",
                    fontSize: "0.9rem",
                    marginTop: "4px",
                  }}
                >
                  {formik.touched.password_new && formik.errors.password_new}
                </p>
              </div>
              <div className="ipnPass__item">
                <label htmlFor="">
                  <i className="fa-solid fa-key fa-size" /> Nhập lại mật khảu
                </label>
                <input
                  onChange={formik.handleChange}
                  value={formik.values.password_new_confirm}
                  type="password"
                  name="password_new_confirm"
                  id=""
                />
                <p
                  style={{
                    color: "#F33033",
                    fontSize: "0.9rem",
                    marginTop: "4px",
                  }}
                >
                  {formik.touched.password_new_confirm &&
                    formik.errors.password_new_confirm}
                </p>
              </div>
              <p
                style={{
                  color: "#F33033",
                  fontSize: "0.9rem",
                  marginTop: "4px",
                }}
              >
                {dataUpdatePassword.error && dataUpdatePassword.error.message}
              </p>
              <button onClick={onUpdatePassword} type="button">
                Xác nhận
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default UserRestPassword;
