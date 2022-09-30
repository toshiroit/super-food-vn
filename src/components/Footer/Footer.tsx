import Link from "next/link";

const Footer = () => {
  return (
    <footer>
      <div className="bannerFooter">
        <div className="container">
          <div className="bannerFooter__content">
            <div className="bell">
              <div className="bell__left">
                <div className="bell__left___title">
                  <h4>Nhận các thông báo có khuyến mãi</h4>
                </div>
                <div className="bell__left___input">
                  <i className="fa-solid fa-inbox fa-size" />
                  <input
                    placeholder="Nhập Email để nhận thông báo mới nhất"
                    type="email"
                    name="email"
                    id=""
                  />
                  <i className="fa-solid fa-paper-plane fa-size" />
                </div>
              </div>
              <div className="bell__right">
                <div className="bell__right___title">
                  <h4>Liên hệ với chúng tôi</h4>
                </div>
                <ul className="bell__right___main">
                  <Link href={"/"}>
                    <a>
                      <li className="bell__right___main____item">
                        <picture>
                          <img src="./images/youtube.png" alt="" />
                        </picture>
                      </li>
                    </a>
                  </Link>
                  <Link href={"/"}>
                    <a>
                      <li className="bell__right___main____item">
                        <picture>
                          <img src="./images/facebook.png" alt="" />
                        </picture>
                      </li>
                    </a>
                  </Link>
                  <Link href={"/"}>
                    <a>
                      <li className="bell__right___main____item">
                        <picture>
                          <img src="./images/twitter.webp" alt="" />
                        </picture>
                      </li>
                    </a>
                  </Link>
                </ul>
              </div>
            </div>
            <div className="content">
              <div className="content__main">
                <div className="content__main___col">
                  <div className="image">
                    <picture>
                      <img
                        src="http://static.ybox.vn/2022/5/5/1652409811891-cropped-Logo_genex_convertcircle.png"
                        alt=""
                      />
                    </picture>
                  </div>
                  <p className="name">
                    Công ty cổ phần Super Shipping Việt Nam
                  </p>
                  <ul className="link">
                    <li className="link__item address">
                      Tòa nhà Lữ Gia, Tầng 4 - 70 Lữ Gia - F.15 - Q11 - Tp. Hồ
                      Chí Minh
                    </li>
                    <li className="link__item">
                      Tổng đài giải đáp thắc mắc về Loship:
                      <b>hotroloship@lozi.vn</b>
                    </li>
                    <li className="link__item">
                      liên hệ hợp tác : <b>hotroloship@lozi.vn</b>
                    </li>
                    <li className="link__item">
                      liên hệ truyền thông : <b>hotroloship@lozi.vn</b>
                    </li>
                  </ul>
                </div>
                <div className="content__main___col">
                  <h4 className="title">Dịch vụ</h4>
                  <ul className="main">
                    <li className="main__item">Điền dich vụ của bạn vào</li>
                    <li className="main__item">Điền dich vụ của bạn vào</li>
                    <li className="main__item">Điền dich vụ của bạn vào</li>
                    <li className="main__item">Điền dich vụ của bạn vào</li>
                    <li className="main__item">Điền dich vụ của bạn vào</li>
                    <li className="main__item">Điền dich vụ của bạn vào</li>
                    <li className="main__item">Điền dich vụ của bạn vào</li>
                    <li className="main__item">Điền dich vụ của bạn vào</li>
                    <li className="main__item">Điền dich vụ của bạn vào</li>
                    <li className="main__item">Điền dich vụ của bạn vào</li>
                    <li className="main__item">Điền dich vụ của bạn vào</li>
                  </ul>
                </div>
                <div className="content__main___col">
                  <div className="col_w1">
                    <h4 className="title">Hợp tác</h4>
                    <ul className="main">
                      <li className="main__item">Điền dich vụ của bạn vào</li>
                      <li className="main__item">Điền dich vụ của bạn vào</li>
                      <li className="main__item">Điền dich vụ của bạn vào</li>
                      <li className="main__item">Điền dich vụ của bạn vào</li>
                      <li className="main__item">Điền dich vụ của bạn vào</li>
                      <li className="main__item">Điền dich vụ của bạn vào</li>
                      <li className="main__item">Điền dich vụ của bạn vào</li>
                    </ul>
                  </div>
                </div>
                <div className="content__main___col">
                  <h4 className="title">Khu vực</h4>
                  <ul className="main">
                    <li className="main__item">Điền dich vụ của bạn vào</li>
                    <li className="main__item">Điền dich vụ của bạn vào</li>
                    <li className="main__item">Điền dich vụ của bạn vào</li>
                    <li className="main__item">Điền dich vụ của bạn vào</li>
                    <li className="main__item">Điền dich vụ của bạn vào</li>
                    <li className="main__item">Điền dich vụ của bạn vào</li>
                    <li className="main__item">Điền dich vụ của bạn vào</li>
                    <li className="main__item">Điền dich vụ của bạn vào</li>
                    <li className="main__item">Điền dich vụ của bạn vào</li>
                    <li className="main__item">Điền dich vụ của bạn vào</li>
                    <li className="main__item">Điền dich vụ của bạn vào</li>
                  </ul>
                </div>
                <div className="content__main___col">
                  <h4 className="title">Hỗ trợ / Báo lỗi</h4>
                  <ul className="main">
                    <li className="main__item">
                      Dịch vụ và Điều khoản của bạn
                    </li>
                    <li className="main__item">Báo lỗi</li>
                    <li className="main__item">Hỗ trợ</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
