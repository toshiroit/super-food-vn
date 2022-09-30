import React from "react";

const CheckoutAddress = () => {
  return (
    <>
      <div className="inline">
        <span>
          <i className="fa-solid fa-location-dot fa-size" />
          Giao tới
        </span>
        <span>
          <i className="fa-solid fa-file-invoice fa-size" />
          Thay đổi
        </span>
      </div>
      <div className="info">
        <div className="info__name">
          <span>Đậu Văn Nam </span>
        </div>
        <i className="bd" />
        <div className="info__phone">
          <span>0948124851</span>
        </div>
      </div>
      <div className="address">
        <p>Đăk lakw, Phường Tân Lợi, Thành phố Buôn Ma Thuột, Đắk Lắk</p>
      </div>
    </>
  );
};
export default CheckoutAddress;
