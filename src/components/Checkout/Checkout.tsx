import { selectCartSliceDataLocal } from "@/redux/features/cart/cart-selects";
import { selectDataCheckout } from "@/redux/features/checkout/checkout-selects";
import { getAllPayment } from "@/redux/features/payment/payment-thunks";
import { useAppDispatch, useAppSelector } from "@/redux/hooks/hooks";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useAuthContext } from "src/contexts/Auth/AuthContext";
import BackgroundFixed from "../Background/BackgroundFixed/BackgroundFixed";
import LoadingBackgroundV1 from "../Background/BackgroundLoading/LoadingBackgroundV1";
import LoadingSpinner from "../Loading/LoadingSpinner";
import CheckoutAddress from "./CheckoutAddress";
import CheckoutGift from "./CheckoutGift";
import CheckoutInfoProduct from "./CheckoutInfoProduct";
import CheckOutPayment from "./CheckoutPayment";
import CheckoutPrice from "./CheckoutPrice";
import CheckoutProduct from "./CheckoutProduct";
import CheckoutShip from "./CheckoutShip";

const Checkout = () => {
  const dataCartLocal = useAppSelector(selectCartSliceDataLocal);
  const dataCheckout = useAppSelector(selectDataCheckout);
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { isLogged } = useAuthContext();
  // useEffect(() => {
  //   if (dataCartLocal.length === 0) {
  //     router.replace("/cart");
  //   } else {
  //     if (!isLogged) {
  //       router.replace("/cart");
  //     }
  //   }
  // }, [dataCartLocal, router, isLogged]);
  useEffect(() => {
    dispatch(getAllPayment());
  }, [dispatch]);
  return (
    <>
      {dataCartLocal && dataCheckout.dataCheckout.loading ? (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: "flex",
            zIndex: 99999999,
            backgroundColor: "rgb(35 55 80)",
          }}
        >
          <div
            style={{
              margin: "auto",
              textAlign: "center",
              position: "relative",
            }}
          >
            <div className="loader"></div>
            <h5
              style={{
                position: "absolute",
                fontSize: "1.3rem",
                fontWeight: 600,
                top: "60px",
                left: "-53px",
                width: "150px",
                color: "#fff",
              }}
            >
              Đang xử lí đơn hàng{" "}
            </h5>
          </div>
        </div>
      ) : (
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
                      {/* <CheckoutShip /> */}
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
        </div>
      )}
    </>
  );
};
export default Checkout;
