const CheckOutPayment = () => {
  return (
    <>
      <h4 className="selectBuy__title">
        <i className="fa-solid fa-credit-card" /> Hình thức thanh toán
      </h4>
      <ul className="selectBuy__main">
        <li className="selectBuy__main___item">
          <div className="inner">
            <input type="radio" name="" id="" />
            <picture>
              <img
                src="./images/png-clipart-money-cash-cash-coupon-material-miscellaneous-rectangle-thumbnail.png"
                alt=""
              />
            </picture>
            <span>Thanh toán bằng tiền mặt </span>
          </div>
        </li>
        <li className="selectBuy__main___item">
          <div className="inner">
            <input type="radio" name="" id="" />
            <picture>
              <img src="./images/momo.png" alt="" />
            </picture>
            <span>Thanh toán bằng Momo </span>
          </div>
        </li>
        <li className="selectBuy__main___item">
          <div className="inner">
            <input type="radio" name="" id="" />
            <picture>
              <img src="./images/zalopay.png" alt="" />
            </picture>
            <span>Thanh toán bằng ZaloPay </span>
          </div>
        </li>
        <li className="selectBuy__main___item">
          <div className="inner">
            <input type="radio" name="" id="" />
            <picture>
              <img src="./images/vnpay.png" alt="" />
            </picture>
            <span>Thanh toán bằng VNPAY </span>
          </div>
        </li>
        <li className="selectBuy__main___item">
          <div className="inner">
            <input type="radio" name="" id="" />
            <picture>
              <img src="./images/visa.png" alt="" />
            </picture>
            <span>Thanh toán bằng Visa </span>
          </div>
        </li>
        <li className="selectBuy__main___item">
          <div className="inner">
            <input type="radio" name="" id="" />
            <picture>
              <img src="./images/vnpay.png" alt="" />
            </picture>
            <span>
              Thanh toán bằng ATM nội địa / Internet Banking ( Hỗ trợ )
            </span>
          </div>
          <ul className="listBuy">
            <li className="listBuy__item active">
              <i className="fa-solid fa-circle-check fa-size" />
              <picture>
                <img src="./images/logo-agribank.jpeg" alt="" />
              </picture>
            </li>
            <li className="listBuy__item">
              <picture>
                <img src="./images/logo-agribank.jpeg" alt="" />
              </picture>
            </li>
          </ul>
        </li>
      </ul>
    </>
  );
};
export default CheckOutPayment;
