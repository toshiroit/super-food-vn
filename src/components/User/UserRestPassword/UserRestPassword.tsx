const UserRestPassword = () => {
  return (
    <div className="content">
      <div className="title">
        <h4>
          <i className="fa-solid fa-key fa-size" />
          Thay đổi mật khẩu
        </h4>
        <i id="showMenuUserIdx" className="fa-solid fa-bars" />
      </div>
      <div className="content__restPass">
        <div className="content__restPass___main">
          <div className="title">
            <label htmlFor="">
              <i className="fa-solid fa-passport fa-size" />
            </label>
            <p>
              Mật khẩu mới nên có các kí tự đặc biệt kèm chữ hóa để tăng độ bảo
              mật
            </p>
          </div>
          <div className="ipnPass">
            <div className="ipnPass__item">
              <label htmlFor="">
                <i className="fa-solid fa-key fa-size" /> Mật khẩu mới
              </label>
              <input type="password" name="" id="" />
            </div>
            <div className="ipnPass__item">
              <label htmlFor="">
                <i className="fa-solid fa-key fa-size" /> Nhập lại mật khảu
              </label>
              <input type="password" name="" id="" />
            </div>
            <button>Xác nhận</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default UserRestPassword;
