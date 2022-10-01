import Link from "next/link";

const UserInfo = () => {
  const onChangeUser = () => {};
  const onSubmitUser = () => {};
  const onChangeUpdate = () => {};

  return (
    <div className="content">
      <div className="title">
        <h4>Thông tin tài khoản</h4>
        <Link href={"/user"}>
          <a>
            <i id="showMenuUserIdx" className="fa-solid fa-bars" />
          </a>
        </Link>
      </div>
      <div className="wp">
        <>
          <div className="avatar inline">
            <picture>
              <img src="/images/avatar_nam.jpg" alt="" />
            </picture>
            <i className="fa-solid fa-pen fa-size" />
          </div>
          <ul className="infoUser inline">
            <form onSubmit={onSubmitUser} onChange={onChangeUser}>
              <li className="infoUser__item">
                <label htmlFor="">
                  <i className="fa-solid fa-signature fa-size" />
                  Tên người dùng
                </label>
                <input
                  type="text"
                  name="fullName"
                  placeholder="Thêm tên người dùng "
                />
              </li>
              <li className="infoUser__item">
                <label htmlFor="">
                  <i className="fa-solid fa-calendar-days fa-size" />
                  Ngày sinh
                </label>
                <div className="date">
                  <select name="day" id="">
                    <option value={-1}>Ngày</option>
                    <option value={1}>1</option>
                  </select>
                  <select name="month" id="">
                    <option value={-1}>Tháng</option>
                    <option value={1}>1</option>
                  </select>
                  <select name="five" id="">
                    <option value={-1}>Năm</option>
                    <option value={2020}>2020</option>
                  </select>
                </div>
              </li>
              <li className="infoUser__item">
                <label htmlFor="">
                  <i className="fa-solid fa-genderless fa-size" />
                  Giới tính
                </label>
                <div className="checkSex">
                  <div className="checkSex__item">
                    <input type="radio" name="sex" value="1" id="" />
                    <span>Nam </span>
                  </div>
                  <div className="checkSex__item">
                    <input type="radio" name="sex" value="0" id="" />
                    <span>Nữ </span>
                  </div>
                </div>
              </li>
              <li className="infoUser__item">
                <div className="qt">
                  <label htmlFor="">
                    <i className="fa-solid fa-earth-africa fa-size" />
                    Địa điểm
                  </label>
                  <select
                    name="address"
                    onChange={onChangeUser}
                    style={{ maxWidth: "100%", width: "100%" }}
                  >
                    <option value={-1}>Chọn địa điểm </option>
                    {/* {Province.map((item) => {
                      return (
                        <option key={item.code} value={item.code}>
                          {item.name}
                        </option>
                      );
                    })} */}
                  </select>
                </div>
              </li>
              <div className="save">
                <button type="submit">
                  <>
                    {" "}
                    <i className="fa-solid fa-floppy-disk fa-size" />
                    Lưu thông tin
                  </>
                </button>
              </div>
            </form>
          </ul>
        </>
        <ul className="infoUser inline">
          <div className="bow">
            <span className="textFxBow">Số điện thoại / Thư điện tử</span>
            <li className="infoUser__item">
              <label htmlFor="">
                <i className="fa-solid fa-square-envelope fa-size" />
                Địa chỉ thư điện tử
              </label>
              <div className="ipn">
                <input type="text" onChange={onChangeUpdate} name="email" />
                <button type="button">Thay đổi</button>
              </div>
            </li>
            <li className="infoUser__item">
              <label htmlFor="">
                <i className="fa-solid fa-phone fa-size" /> Số điện thoại
              </label>
              <div className="ipn">
                <input type="text" onChange={onChangeUpdate} name="phone" />
                <button type="button">Thay doi</button>
              </div>
            </li>
          </div>
          <div className="bow">
            <span className="textFxBow">Bảo mật / Bảo mật cấp 2</span>
            <li className="infoUser__item">
              <label htmlFor="">
                <i className="fa-solid fa-lock fa-size" />
                Mật khẩu cấp 1
              </label>
              <div className="ipn">
                <input type="password" defaultValue="##########" />
                <button type="button">Thiết lập</button>
              </div>
            </li>
            <li className="infoUser__item">
              <label htmlFor="">
                <i className="fa-solid fa-lock fa-size" />
                Mật khẩu cấp 2
              </label>
              <div className="ipn">
                <input type="password" defaultValue="##########" />
                <button type="button">Thiết lập</button>
              </div>
            </li>
          </div>
          <div className="bow">
            <span className="textFxBow">Liên kết mạng xã hội </span>
            <li className="infoUser__item">
              <div className="ipn mxh">
                <h4 className="lkmxh face">
                  <i className="fa-brands fa-facebook fa-size" />
                  Facebook
                </h4>
                <button type="button">Cập nhât</button>
              </div>
            </li>
            <li className="infoUser__item">
              <div className="ipn mxh">
                <h4 className="lkmxh zalo">
                  <i className="fa-solid fa-comment fa-size" />
                  Zalo
                </h4>
                <button type="button">Cập nhât</button>
              </div>
            </li>
          </div>
        </ul>
      </div>
    </div>
  );
};
export default UserInfo;
