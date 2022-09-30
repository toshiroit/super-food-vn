const CheckoutProduct = () => {
  return (
    <li className="main__item">
      <div className="main__item___header">
        <div className="comboGiftShip">
          <span className="name"> Combo khuyến mãi </span>
          <p>Mua thêm 10 sản phẩm để được giảm 25%</p>
        </div>
      </div>
      <div className="main__item___main">
        <div className="dateShip">
          <span>
            <i className="fa-solid fa-clock" /> Sản phẩm này dự kiến giao hàng
            ngày 24-10-2022
          </span>
        </div>
        <div className="main__item___main____scroll">
          <div className="productCart">
            <div className="productCart__image">
              <picture>
                <img
                  src="https://salt.tikicdn.com/cache/w78/ts/product/66/68/47/10c4405af274b68983c13cc6f03281fb.jpg.webp"
                  alt=""
                />
              </picture>
            </div>
            <div className="productCart__name productCart__nameMobile">
              <p>Lẩu cay trùng khách siêu ngon ( Cay gấp đôi )</p>
              <div className="productCart__price productCart__priceMobile">
                <div className="pricew1">
                  <span>146.000đ</span>
                </div>
                <div className="pricew2">
                  <span>130.000đ </span>
                </div>
                <div className="salePrice">
                  <span>
                    Giảm giá 43%
                    <i className="fa-solid fa-arrow-trend-down fa-size" />
                  </span>
                </div>
              </div>
            </div>
            <div className="productCart__name">
              <p>Lẩu cay trùng khách siêu ngon ( Cay gấp đôi )</p>
            </div>
            <div className="productCart__price">
              <div className="pricew1">
                <span>146.000đ</span>
              </div>
              <div className="pricew2">
                <span>130.000đ </span>
              </div>
              <div className="salePrice">
                <span>
                  Giảm giá 43%
                  <i className="fa-solid fa-arrow-trend-down fa-size" />
                </span>
              </div>
            </div>
            <div className="productCart__quality">
              <div className="inner">
                <span>Số lượng : 324 </span>
              </div>
            </div>
            <div className="productCart__priceResult">
              <span>450.000đ </span>
            </div>
            <div className="productCart__ship">
              <picture>
                <img src="./public/images/ghn.png" alt="" />
              </picture>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};
export default CheckoutProduct;
