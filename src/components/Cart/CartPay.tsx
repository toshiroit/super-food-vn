import GiftItem from "../Gift/GiftItem";

const CartPay = () => {
  const onChangeCodeGift = () => {};
  const onCheckCodeGift = () => {};
  return (
    <>
      <div className="header">
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
      </div>
      <div className="main">
        <div className="main__gift">
          <span>
            <i className="fa-solid fa-gift fa-size" /> Mã giảm giá
          </span>
          <span>
            Có thể chọn (2)
            <i className="fa-solid fa-circle-info fa-size" />
          </span>
        </div>
        <ul className="main__list">
          <GiftItem code="124" image="124" title="124" key={"124"} />
          <GiftItem code="124" image="124" title="124" key={"124"} />
          <GiftItem code="124" image="124" title="124" key={"124"} />
        </ul>
        <div className="main__input">
          <div className="main__input___owp">
            <input
              placeholder="Mã giảm giá của bạn "
              type="text"
              name="codeGift"
              onChange={onChangeCodeGift}
              id=""
            />
            <button onClick={onCheckCodeGift}>Áp dụng</button>
          </div>
          <p
            style={{ fontSize: "0.9rem", color: "#e7000e", marginTop: "5px" }}
            className="error"
          >
            Mã giảm giá không chính xác{" "}
          </p>
        </div>
      </div>
      <div className="footer">
        <ul className="price__main">
          <li className="price__main___item">
            <span>Tạm tính </span>
            <span className="boldPrice">439.000 đ</span>
          </li>
          <li className="price__main___item">
            <span>Giảm giá </span>
            <span className="boldPrice salePrice"> -39.000 đ</span>
          </li>
        </ul>
        <div className="price__result">
          <h4>Tổng tiền</h4>
          <div className="w">
            <span>420.000đ </span>
            <p>( Đã bao gồm VAT nếu có )</p>
          </div>
        </div>
        <div className="buy">
          <button type="submit" className="btn btn-buy">
            <i className="fa-solid fa-bag-shopping" /> ĐẶT NGAY
          </button>
        </div>
      </div>
    </>
  );
};
export default CartPay;
