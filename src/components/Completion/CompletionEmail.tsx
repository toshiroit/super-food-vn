const CompletionEmail = () => {
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
              Xác nhận đó là bạn
            </label>
            <p>Vui lòng nhập mã xác nhận gửi qua Email d*****@gmail.com</p>
          </div>
          <div className="ipn">
            <input type="password" name="" id="" />
            <button>Xác nhận</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CompletionEmail;
