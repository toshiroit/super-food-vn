import { useState } from "react";

const CheckoutInfoProduct = () => {
  const [isShow, setIsShow] = useState<boolean>(false);
  return (
    <>
      <div className="title">
        <div>
          <h4>Thông tin đơn hàng</h4>
          <span onClick={() => setIsShow(!isShow)} className="inner">
            13 sản phẩm ( Xem chi tiết)
          </span>
        </div>
        <span>Sửa đổi </span>
      </div>
      {isShow ? (
        <ul className="infoProduct">
          <li className="infoProduct__item">
            <span className="name">
              <i className="fa-solid fa-signature" /> Lẩu thái cay cấp độ 13
            </span>
            <div className="slPr">
              <h5>x13</h5>
              <span className="price">130.000đ</span>
            </div>
          </li>
        </ul>
      ) : (
        ""
      )}
    </>
  );
};
export default CheckoutInfoProduct;
