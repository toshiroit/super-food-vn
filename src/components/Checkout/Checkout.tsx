import { selectCartSliceDataLocal } from "@/redux/features/cart/cart-selects";
import { useAppSelector } from "@/redux/hooks/hooks";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useAuthContext } from "src/contexts/Auth/AuthContext";
import CheckoutAddress from "./CheckoutAddress";
import CheckoutGift from "./CheckoutGift";
import CheckoutInfoProduct from "./CheckoutInfoProduct";
import CheckOutPayment from "./CheckoutPayment";
import CheckoutPrice from "./CheckoutPrice";
import CheckoutProduct from "./CheckoutProduct";
import CheckoutShip from "./CheckoutShip";

const Checkout = () => {
  const dataCartLocal = useAppSelector(selectCartSliceDataLocal)
  const router = useRouter()
  const { isLogged } = useAuthContext()
  useEffect(() => {
    if (dataCartLocal.length === 0) {
      router.replace('/cart')
    }
    else {
      if (!isLogged) {
        router.replace('/cart')
      }

    }
  }, [dataCartLocal, router, isLogged])
  useEffect(() => {
  }, [])
  return (
    <>
      {dataCartLocal && <div className="checkout">
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
                  <div className="infoCheckOut">
                    {/* Info Product */}
                    <CheckoutInfoProduct />
                  </div>
                  <div className="footer">
                    <CheckoutPrice />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>}
    </>
  );
};
export default Checkout;
