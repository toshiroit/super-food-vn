import Link from "next/link";

const UserSecurity = () => {
  return (
    <div className="content">
      <div className="title">
        <h4>
          <i className="fa-solid fa-shield fa-size" /> Bảo mật tài khoản
        </h4>
        <i id="showMenuUserIdx" className="fa-solid fa-bars" />
      </div>
      <div className="content__security">
        <div className="content__security___main">
          <div className="content__security___main____item">
            <h4 className="title">
              <i className="fa-solid fa-user-shield" />
              Tình trạng bảo mật tài khoản
            </h4>
            <div className="content">
              <div className="content__item">
                <div className="wp">
                  <i className="fa-solid fa-shield" />
                  <span>Bảo mật cấp 1</span>
                  <div className="status">
                    <span className="inActive">Hoạt động </span>
                    <Link href={""}>
                      <a>
                        <button>Thay đổi</button>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="content__item">
                <div className="wp">
                  <i className="fa-solid fa-shield" />
                  <span>Bảo mật cấp 2</span>
                  <div className="status">
                    <span className="active">Hoạt động </span>
                  </div>
                </div>
              </div>
              <div className="content__item">
                <div className="wp">
                  <i className="fa-solid fa-shield" />
                  <span>Xác thức OTP khi thanh toán </span>
                  <div className="status">
                    <span className="active">Hoạt động </span>
                  </div>
                </div>
              </div>
              <div className="content__item">
                <div className="wp">
                  <i className="fa-solid fa-shield" />
                  <span>Xác thực khi đăng nhập qua OTP </span>
                  <div className="status">
                    <span className="active">Hoạt động </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="content__security___main____line" />
          <div className="content__security___main____item">
            <h4 className="title">
              <i className="fa-solid fa-key" />
              Tình trạng mật khẩu
            </h4>
            <div className="content">
              <div className="content__item">
                <div className="wp">
                  <i className="fa-solid fa-shield" />
                  <span>Mật khẩu cấp 1</span>
                  <div className="status">
                    <span className="inActive">Bảo mật Kém </span>
                    <button>Thay đổi</button>
                  </div>
                </div>
                <div style={{ display: "none" }} className="inputPass">
                  <input type="password" name="" id="" />
                  <button>Xác nhận</button>
                </div>
              </div>
              <div className="content__item">
                <div className="wp">
                  <i className="fa-solid fa-shield" />
                  <span>Mật khẩu cấp 2</span>
                  <div className="status">
                    <span className="active">Bảo mật cao </span>
                    <button>Thay đổi</button>
                  </div>
                </div>
              </div>
              <div className="content__item">
                <div className="wp">
                  <i className="fa-solid fa-shield" />
                  <span>Xác thức OTP khi thanh toán</span>
                  <div className="status">
                    <span className="active">Bảo mật cao </span>
                    <button>Thay đổi</button>
                  </div>
                </div>
              </div>
              <div className="content__item">
                <div className="wp">
                  <i className="fa-solid fa-shield" />
                  <span>Xác thực khi đăng nhập qua OTP</span>
                  <div className="status">
                    <span className="active">Bảo mật cao </span>
                    <button>Thay đổi</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="content__security___not">
          <h4 className="content__security___not____title">
            <i className="fa-solid fa-quote-left" /> Lưu ý
          </h4>
          <div className="content__security___not____item">
            <p>
              <b>
                <i className="fa-solid fa-angles-right" />
              </b>{" "}
              Tình trạng bảo mật tài khoản của bạn sẽ được thông báo ngay tại
              đây.Hãy thường xuyên kiểm tra tình trạng tài khoản của bạn
            </p>
            <p>
              <b>
                <i className="fa-solid fa-angles-right" />
              </b>
              Hãy bật các lớp bảo vệ cho tài khoản của bạn để bảo mật tài khoản
              của bạn tốt hơn
            </p>
            <p>
              <b>
                <i className="fa-solid fa-angles-right" />
              </b>
              Bạn nên bật thanh toán qua OTP khi thanh toán hoặc mua hàng để
              tránh việc kẻ gian phá hoại tài khoản của bạn
            </p>
            <p>
              <b>
                <i className="fa-solid fa-angles-right" />
              </b>{" "}
              Tài khoản ngân hàng của bạn được bảo vệ 1 cách tốt nhất khi đăng
              kí trên Web của chúng tôi
            </p>
            <p>
              <b>
                <i className="fa-solid fa-angles-right" />
              </b>{" "}
              Không cung cấp tài khoản mật khẩu ngân hàng với các đối tượng lạ
              qua việc nhắn tin và không cung cấp thông tin ngần hàng với nhân
              viên
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default UserSecurity;
