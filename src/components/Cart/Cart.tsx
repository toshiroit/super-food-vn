import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";
import Link from "next/link";
import CartItem from "@/components/Cart/CartItem";
import CartPay from "@/components/Cart/CartPay";
const Cart = () => {
  const onOrder = () => {};
  <div className="cart">
    <div className="container">
      <div className="cart__content breadcrumb">
        <div className="cart__content___breadcrumb breadcrumb__content">
          <Breadcrumb />
        </div>
        <div className="cart__content___main">
          <form onSubmit={onOrder}>
            <div className="cart__content___main____title">
              <Link href={"/"}>
                <a>
                  <h4>
                    <i className="fa-solid fa-cart-shopping"></i>Giỏ hàng
                  </h4>
                </a>
              </Link>
            </div>
            <div className="cart__content___main____inner">
              <div className="left">
                <div className="header">
                  <ul className="header__main">
                    <li className="header__main___item">
                      <input type="checkbox" className="" name="" id="" />
                      <label className="check-box" />
                      <span>Tất cả ( 2 sản phẩm ) </span>
                    </li>
                    <li className="header__main___item price">
                      <span>Đơn giá </span>
                    </li>
                    <li className="header__main___item quality">
                      <span>Số lượng </span>
                    </li>
                    <li className="header__main___item priceResult">
                      <span>Thành tiền </span>
                    </li>
                    <li className="header__main___item remove">
                      <span>
                        <i className="fa-solid fa-delete-left" />
                      </span>
                    </li>
                  </ul>
                </div>
                <ul className="main">
                    <CartItem/>
                </ul>
              </div>
              <div className="right">
                <CartPay />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>;
};
export default Cart;
