const Register = () => {
  return (
    <div className="fixedLogin" style={{ display: "none" }}>
      <div className="fixedLogin__inner">
        <div className="prev">
          <i className="fa-size fa-solid fa-angle-left" />
        </div>
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
          <h4>Xác nhận số điện thoại</h4>
          <p>Xem mã được gửi qua số điện thoại của bạn có 6 chữ số</p>
        </div>
        <div className="inputLogin">
          <ul className="inputLogin__code">
            <li className="inputLogin__code___item">
              <input type="text" name="code" className="codew1" />
            </li>
            <li className="inputLogin__code___item">
              <input type="text" name="code" className="codew1" />
            </li>
            <li className="inputLogin__code___item">
              <input type="text" name="code" className="codew1" />
            </li>
            <li className="inputLogin__code___item">
              <input type="text" name="code" className="codew1" />
            </li>
            <li className="inputLogin__code___item">
              <input type="text" name="code" className="codew1" />
            </li>
            <li className="inputLogin__code___item">
              <input type="text" name="code" className="codew1" />
            </li>
          </ul>
          <div className="btnLogin">
            <a href="#" className="sendCode">
              Gửi lại mã xác nhận{" "}
            </a>
            <a href="">
              <button type="button">XÁC NHẬN</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Register;
