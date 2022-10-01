import Link from "next/link";

const UserOrderItem = () => {
  return (
    <Link href={"/"}>
      <a>
        <div className="content__order___item">
          <div className="content__order___item____dateIsShip">
            <span className="fxLeft">Ngày mua : 20/10/2022 - 10:24 am</span>
            <span className="fxRight">
              <i className="fa-solid fa-truck-fast" /> Đang giao hàng
            </span>
          </div>
          <div className="content__order___item____wp">
            <div className="content__order___item____wp_____nameImage wp__left">
              <div className="tw">
                <div className="image">
                  <picture>
                    <img
                      src="https://image.cooky.vn/posproduct/g0/13848/s1124x1124/b1b87e25-11b9-4f9f-b9d5-af5753a7ffda.jpeg"
                      alt=""
                    />
                  </picture>
                </div>
                <div className="name">
                  <h4>
                    <i className="fa-solid fa-signature" /> Lẩu Thái Hải Sản
                    (Gồm Nước Cốt Lẩu)
                  </h4>
                  <div className="category">
                    <span>
                      <i className="fa-solid fa-tag fa-size" />
                      Lẩu cay , Cơm , Bún
                    </span>
                  </div>
                  <div className="price">
                    <span className="price__w1">140.000 đ</span>
                    <span className="price__w2">320.000 đ </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="content__order___item____wp_____ifop wp__left">
              <div className="tw">
                <div className="tl">
                  <span>
                    <i className="fa-solid fa-user-check" /> Người giao hàng :
                  </span>
                  <b> ĐẬU VĂN NAM </b>
                </div>
                <div className="tl">
                  <span>
                    <i className="fa-solid fa-hand-holding-dollar" />
                    Tổng tiền thanh toán :
                  </span>
                  <b className="tl__price">140.000 đ </b>
                </div>
                <div className="tl">
                  <span>
                    <i className="fa-solid fa-money-bill" /> Hình thức thanh
                    toán :
                  </span>
                  <b className="tl__card"> Tiền mặt </b>
                </div>
              </div>
            </div>
          </div>
          <div className="infoW">
            <div className="infoW__item">
              <span>
                <i className="fa-solid fa-phone fa-size fa-size-phone" />
                Số điện thoại đặt hàng : <b>094166151</b>
              </span>
            </div>
            <div className="infoW__item">
              <span>
                <i className="fa-solid fa-phone fa-size fa-size-phone" />
                Số điện thoại giao hàng : <b>094166151</b>
              </span>
            </div>
            <div className="infoW__item">
              <span>
                <i className="fa-solid fa-clock fa-size fa-size-time" />
                Thời gian giao uớc tính :<b>10:24 | 24/10/2002</b>
              </span>
            </div>
          </div>
        </div>
      </a>
    </Link>
  );
};
export default UserOrderItem;
