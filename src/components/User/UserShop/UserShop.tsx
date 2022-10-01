import Link from "next/link";

const UserShop = () => {
  return (
    <div className="content">
      <div className="title">
        <h4>
          <i className="fa-solid fa-coins" /> Quản lí Shop của bạn
        </h4>
        <Link href={"/user"}>
          <a>
            <i id="showMenuUserIdx" className="fa-solid fa-bars" />
          </a>
        </Link>
      </div>
      <div className="completionFx__formSb">
        <div className="fx userShop">
          <h4 className="iw">Cửa hàng cùa bạn đang hoạt động</h4>
          <p>
            Hãy nhớ bảo mật cửa hàng của bạn tốt nhật bằng mật khẩu có các kí tự
            đặc biệt nhé
          </p>
          <button>
            Truy cập cửa hàng của bạn ngay
            <i className="fa-solid fa-up-right-from-square fa-size"></i>
          </button>
        </div>
        {/* <div className="fx userShop">
          <h4 className="iw shop-lock">
            Cửa hàng của bạn của bạn đang bị khóa
          </h4>
          <p>
            Cửa hàng của bạn có thể vi phạm các điều khoản bên Web và đang bị
            khóa Bạn có thể liên hệ
            <b>Quản trị viên</b> để biết thêm chi tiết
          </p>
          <button>
            Truy cập ngay
            <i className="fa-solid fa-up-right-from-square fa-size" />
          </button>
        </div> */}
        {/* <div className="fx userShop">
          <h4 className="iw">BẠN CHƯA MỞ SHOP</h4>
          <p>Bạn có thế đăng kí để mở shop của bạn tại đây</p>
          <button>
            ĐĂNG KÍ MỞ BÁN NGAY
            <i className="fa-solid fa-up-right-from-square fa-size"></i>
          </button>
        </div> */}
      </div>
    </div>
  );
};
export default UserShop;
