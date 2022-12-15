import { clientRoutes } from "@/constants/router/client/client";
import Link from "next/link";

const UserSlider = () => {
  return (
    <div className="content">
      <ul className="content__main">
        <div className="content__main___wp">
          <div className="nameFx">
            <span>Tài khoản </span>
          </div>
          <Link href={clientRoutes.USER_INFO}>
            <a>
              <li className="content__main___wp____item">
                <i className="fa-solid fa-house-user fa-size" />
                <span>Thông tin tài khoản </span>
              </li>
            </a>
          </Link>
          <Link href={clientRoutes.USER_SHOP}>
            <a>
              <li className="content__main___wp____item">
                <i className="fa-solid fa-shop fa-size" />
                <span>Thông tin Shop </span>
              </li>
            </a>
          </Link>
          <Link href={clientRoutes.USER_BALANCE}>
            <a>
              <li className="content__main___wp____item">
                <i className="fa-solid fa-money-bill fa-size" />
                <span>Số dư </span>
              </li>
            </a>
          </Link>
        </div>
        <div className="content__main___wp">
          <div className="nameFx">
            <span>Giao dịch </span>
          </div>
          <Link href={clientRoutes.USER_ORDER}>
            <a>
              <li className="content__main___wp____item">
                <i className="fa-solid fa-truck-fast fa-size" />
                <span>Đơn hàng </span>
                {/* <b className="status_w">3</b> */}
              </li>
            </a>
          </Link>

          <li className="content__main___wp____item">
            <i className="fa-solid fa-bag-shopping fa-size" />
            <span> Đã mua </span>
          </li>
          <li className="content__main___wp____item">
            <i className="fa-solid fa-money-bills fa-size" />
            <span>Đã thanh toán </span>
          </li>
        </div>
        <div className="content__main___wp">
          <div className="nameFx">
            <span>Địa chỉ và thanh toán </span>
          </div>
          <Link href={clientRoutes.USER_ADDRESS}>
            <li className="content__main___wp____item">
              <i className="fa-solid fa-location-dot fa-size" />
              <span>Địa chỉ thanh toán </span>
            </li>
          </Link>
        </div>
        <div className="content__main___wp">
          <div className="nameFx">
            <span>Bảo mật </span>
          </div>
          <Link href={clientRoutes.USER_REST_PASS}>
            <a>
              <li className="content__main___wp____item">
                <i className="fa-solid fa-shield fa-size" />
                <span>Thay đổi mật khẩu </span>
              </li>
            </a>
          </Link>
          <Link href={clientRoutes.USER_INFO}>
            <a>
              <li className="content__main___wp____item">
                <i className="fa-solid fa-file-shield fa-size" />
                <span>Cài đặt bảo mật </span>
              </li>
            </a>
          </Link>
        </div>
        <div className="content__main___wp">
          <div className="nameFx">
            <span>Thông báo </span>
          </div>
          <Link href={clientRoutes.USER_NOTIFY}>
            <a>
              <li className="content__main___wp____item">
                <i className="fa-solid fa-envelope-open-text fa-size" />
                <span>Thông báo </span>
              </li>
            </a>
          </Link>
        </div>
      </ul>
    </div>
  );
};
export default UserSlider;
