import Link from "next/link";

const MenuMobile = () => {
  const showLogin = () => {};
  return (
    <div className="menuFixedIdx">
      <div className="menuFixedIdx__inner">
        <div id="closeMenuFixedRootIdx" className="close">
          <i className="fa-solid fa-circle-xmark fa-size" />
        </div>
        <div className="menuFixedIdx__inner___header">
          <div className="search">
            <i className="fa-solid fa-magnifying-glass fa-size" />
            <input placeholder="Tìm kiếm sản phẩm " type="text" />
          </div>
          <div className="user">
            <div className="avatar">
              <picture>
                <img
                  src="https://i.pinimg.com/736x/5d/69/c5/5d69c5133c8a88d3247d4dec9f657d40.jpg"
                  alt=""
                />
              </picture>
            </div>
            <div className="flexUser">
              <button type="button" onClick={showLogin}>
                <i className="fa-solid fa-arrow-right-to-bracket" /> Đăng nhập
              </button>
              <button type="button" onClick={showLogin}>
                <i className="fa-solid fa-user-plus" /> Đăng kí
              </button>
            </div>
          </div>
        </div>
        <ul className="menuFixedIdx__inner___menu">
          <div className="menuWp">
            <Link href={"/"}>
              <a>
                <li className="menuFixedIdx__inner___menu____item">
                  <i className="fa-solid fa-house fa-size" />
                  <span> Trang chủ </span>
                </li>
              </a>
            </Link>
          </div>
          <div className="menuWp">
            <div className="menuWp__nameFix">
              <span>Tài khoản </span>
            </div>
            <li className="menuFixedIdx__inner___menu____item">
              <i className="fa-solid fa-circle-question fa-size" />
              <span> Thông tin tài khoản </span>
            </li>
            <li className="menuFixedIdx__inner___menu____item">
              <i className="fa-solid fa-key fa-size" />
              <span> Thay đổi mật khẩu </span>
            </li>
            <li className="menuFixedIdx__inner___menu____item">
              <i className="fa-solid fa-heart fa-size" />
              <span> Sản phẩm yêu thích </span>
            </li>
            <li className="menuFixedIdx__inner___menu____item">
              <i className="fa-solid fa-floppy-disk fa-size" />
              <span> Sản phẩm đã lưu </span>
            </li>
            <li className="menuFixedIdx__inner___menu____item item-cart">
              <i className="fa-solid fa-truck fa-size" />
              <span>Đơn hàng </span>
              <b>14</b>
            </li>
            <Link href={"/cart"}>
              <a>
                <li className="menuFixedIdx__inner___menu____item item-cart">
                  <i className="fa-solid fa-cart-shopping fa-size"> </i>
                  <span className="item-cart">Giỏ hàng </span>
                  <b>14</b>
                </li>
              </a>
            </Link>
          </div>
          <div className="menuWp">
            <div className="menuWp__nameFix">
              <span>Cài đặt </span>
            </div>
            <li className="menuFixedIdx__inner___menu____item">
              <i className="fa-solid fa-volume-high fa-size" />
              <span> Âm thanh </span>
            </li>
            <li className="menuFixedIdx__inner___menu____item">
              <i className="fa-solid fa-image fa-size" />
              <span> Quảng cáo </span>
            </li>
            <li className="menuFixedIdx__inner___menu____item">
              <i className="fa-solid fa-circle-half-stroke fa-size" />
              <span>Chủ đề Sáng / Tối </span>
            </li>
          </div>
          <div className="menuWp">
            <div className="menuWp__nameFix">
              <span>Liên hệ / Hỗ trợ / Báo lỗi </span>
            </div>
            <li className="menuFixedIdx__inner___menu____item">
              <i className="fa-brands fa-facebook fa-size" />
              <span> Facebook </span>
            </li>
            <li className="menuFixedIdx__inner___menu____item">
              <i className="fa-brands fa-google fa-size" />
              <span> Google </span>
            </li>
            <li className="menuFixedIdx__inner___menu____item">
              <i className="fa-solid fa-house fa-size" />
              <span> Zalo </span>
            </li>
            <li className="menuFixedIdx__inner___menu____item">
              <i className="fa-brands fa-youtube fa-size" />
              <span> Youtube </span>
            </li>
          </div>
          <div className="menuWp">
            <div className="menuWp__nameFix">
              <span>---------------- </span>
            </div>
            <li className="menuFixedIdx__inner___menu____item">
              <i className="fa-solid fa-right-from-bracket fa-size" />
              <span> Đăng xuất </span>
            </li>
          </div>
        </ul>
      </div>
    </div>
  );
};
export default MenuMobile;
