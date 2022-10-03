import {
  selectDisplayIsShowLogin,
  selectDisplayShowLogin,
} from "@/redux/features/display/display-selects";
import { onDisplayLogin } from "@/redux/features/display/display-slice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks/hooks";
import Link from "next/link";
import { useState } from "react";
import Login from "../Login/Login";
import LoginPhone from "../Login/LoginPhone";

const Header = () => {
  const [user, setUser] = useState(false);
  const isDisplayLogin = useAppSelector(selectDisplayIsShowLogin);
  const dispatch = useAppDispatch();
  const onFormLogin = () => {
    dispatch(onDisplayLogin({ isShowFixed: true, isShowPhone: true }));
  };
  return (
    <>
      <div
        className={
          isDisplayLogin.isShowFixed
            ? "fixedLogin showFormOpacity"
            : "fixedLogin hideFormOpacity"
        }
      >
        <Login />
      </div>
      <div className="navbar">
        <div className="navbar__top">
          <div className="container">
            <ul className="topbar">
              <li className="topbar__item">
                <p className="topbar__item___text">
                  Trở thành đổi tác với Super Shipping
                </p>
                <i className="fa-solid fa-handshake fa-size" />
              </li>
              <li className="topbar__item">
                <p className="topbar__item___text">
                  Tiết kiệp hơn với ứng dụng
                </p>
                <i className="fa-solid fa-mobile-screen fa-size" />
              </li>
              <li className="topbar__item">
                <p className="topbar__item___text">Chăm sóc khách hàng</p>
                <i className="fa-solid fa-mug-hot fa-size" />
              </li>
              <li className="topbar__item">
                <p className="topbar__item___text">Khám phá</p>
                <i className="fa-solid fa-basket-shopping fa-size" />
              </li>
              <li className="topbar__item">
                <p className="topbar__item___text">Trợ giúp</p>
                <i className="fa-solid fa-circle-question fa-size" />
              </li>
              <li className="topbar__item language">
                <picture>
                  <img
                    src="/images/vi_VN.png"
                    className="img-language"
                    alt=""
                  />
                </picture>
                <p className="topbar__item___text">Việt nam</p>
                <i className="fa-solid fa-caret-down fa-size fa-scale-1" />
                <ul className="list">
                  <li className="list__item">
                    <picture>
                      <img
                        src="/images/vi_VN.png"
                        className="img-language"
                        alt=""
                      />
                    </picture>
                    <p>Tiếng việt</p>
                    <i className="fa-solid fa-check fa-size" />
                  </li>
                  <li className="list__item">
                    <picture>
                      <img
                        src="/images/en_US.png"
                        className="img-language"
                        alt=""
                      />
                    </picture>
                    <p>Tiếng anh</p>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
        <div className="navbar__bottom">
          <div className="container">
            <div className="bottombar">
              <div className="bottombar__left">
                <Link href={"/"}>
                  {/** 
<a>
                    <div className="logo">
                      <picture>
                        <img src="/images/text-logo.png" alt="" />
                      </picture>
                    </div>
                  </a>
                  **/}
                  <a>
                    <span>
                      <b className="b-1">SUPER</b>
                      <b className="b-2">FOODVN</b>
                    </span>
                  </a>
                </Link>
                <ul className="menu">
                  <li className="menu__item address">
                    <p>Đăk Lăk</p>
                    <i className="fa-solid fa-angle-down fa-size" />
                  </li>
                  <li className="menu__item">
                    <p>Bộ sưu tập</p>
                  </li>
                  <li className="menu__item">
                    <p>Ăn uống</p>
                  </li>
                  <li className="menu__item">
                    <p>Khám phá</p>
                  </li>
                  <li className="menu__item">
                    <p>Tin tức</p>
                  </li>
                  <li className="menu__item">
                    <p>Giao hàng</p>
                  </li>
                  <li className="menu__item">
                    <p>Chi nhánh</p>
                  </li>
                  <li className="menu__item">
                    <p>Hõ trợ</p>
                  </li>
                  <li className="menu__item">
                    <p>Báo lỗi</p>
                  </li>
                </ul>
                <div className="bottombar__left___group">
                  {/**  <Search />**/}
                </div>
              </div>

              <div className="bottombar__right">
                <div className="bottombar__right___userMobile">
                  {/*"menuFixedRootIdx"*/}
                  <div id="" className="menu">
                    <i className="fa-solid fa-bars fa-size" />
                  </div>
                </div>
                <div className="bottombar__right___user">
                  <Link href={"/cart"}>
                    <a className="text user">
                      <div className="text cart">
                        <i className="fa-solid fa-basket-shopping fa-size" />
                        <p>Giỏ hàng</p>
                        <div className="quality">14</div>
                      </div>
                    </a>
                  </Link>
                  <div className="text user">
                    {user ? (
                      <div className="owp-w1 login-active">
                        <i className="fa-size fa-solid fa-user" />
                        <div className="inner">
                          <span className="name">Đâu Văn Nam </span>
                          <div className="woi">
                            <li className="woi__item">Số dư : 0</li>
                          </div>
                        </div>
                        <ul className="info">
                          <li className="info__item">
                            <i className="fa-solid fa-info fa-size-1" />
                            <p>Thông tin tài khoản</p>
                          </li>
                          <li className="info__item">
                            <i className="fa-solid fa-credit-card fa-size-1" />
                            <p>Quản lí thanh toán</p>
                          </li>
                          <li className="info__item">
                            <i className="fa-solid fa-credit-card fa-size-1" />
                            <p>Quản lí địa chỉ</p>
                          </li>
                          <li className="info__item">
                            <i className="fa-solid fa-credit-card fa-size-1" />
                            <p>Quản lí thông tin</p>
                          </li>
                          <li className="info__item">
                            <i className="fa-solid fa-credit-card fa-size-1" />
                            <p>Đồng bộ</p>
                          </li>
                          <li className="info__item">
                            <i className="fa-solid fa-credit-card fa-size-1" />
                            <p>Nạp tiền +</p>
                          </li>
                          <li className="info__item">
                            <i className="fa-solid fa-credit-card fa-size-1" />
                            <p>Quản lí thanh toán</p>
                          </li>
                        </ul>
                      </div>
                    ) : (
                      <div onClick={onFormLogin} className="owp-w1">
                        <i className="fa-size fa-solid fa-user" />
                        <span>Tài khoản</span>
                      </div>
                    )}
                    {/* 
                   
                      */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Header;
