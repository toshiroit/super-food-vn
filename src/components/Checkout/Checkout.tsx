import CheckoutAddress from "./CheckoutAddress";
import CheckoutGift from "./CheckoutGift";
import CheckoutInfoProduct from "./CheckoutInfoProduct";
import CheckOutPayment from "./CheckoutPayment";
import CheckoutProduct from "./CheckoutProduct";
import CheckoutShip from "./CheckoutShip";

const Checkout = () => {
  return (
    <div className="checkout">
      <div className="checkout__title">
        <div className="container">
          <h4>Thanh toán</h4>
        </div>
      </div>
      <div className="container">
        <div className="checkout__content breadcrumb">
          <div className="checkout__content___breadcrumb breadcrumb__content">
            <ul className="main">
              <li className="main__item">Supership</li>
              <li className="main__item">Người dùng</li>
              <li className="main__item">Thanh toán</li>
            </ul>
          </div>
          <div className="checkout__content___main">
            <div className="checkout__content___main____wp">
              <div className="left">
                <div className="title">
                  {/*Ship */}
                  <CheckoutShip />
                </div>
                <ul className="main">
                  <CheckoutProduct />
                </ul>
                <div className="selectBuy">
                  <CheckOutPayment />
                </div>
              </div>
              <div className="right">
                <div className="header">
                  {/** Address **/}
                  <CheckoutAddress />
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
                  <>
                    {/** Gift **/}
                    <CheckoutGift />
                  </>
                  <div className="main__input">
                    <input
                      placeholder="Mã giảm giá của bạn "
                      type="text"
                      name=""
                      id=""
                    />
                    <button>Áp dụng</button>
                  </div>
                </div>
                <div className="infoCheckOut">
                  {/* Info Product */}
                  <CheckoutInfoProduct />
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
                    <button type="button" className="btn btn-buy">
                      <i className="fa-solid fa-bag-shopping" /> ĐẶT NGAY
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Checkout;
