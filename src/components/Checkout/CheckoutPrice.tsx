import { formatPriceVND } from "@/lib/formatPrice";
import { selectCartSliceDataLocal } from "@/redux/features/cart/cart-selects";
import {
  priceResultData,
  setDataCartLocal,
} from "@/redux/features/cart/cart-slice";
import {
  selectDataCheckout,
  selectDataPayment,
} from "@/redux/features/checkout/checkout-selects";
import { restCheckout } from "@/redux/features/checkout/checkout-slice";
import { checkoutOrder } from "@/redux/features/checkout/checkout-thunks";
import { selectPaymentSliceData } from "@/redux/features/payment/payment-selects";
import { useAppDispatch, useAppSelector } from "@/redux/hooks/hooks";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useAuthContext } from "src/contexts/Auth/AuthContext";
import { removeCartByCodeProductAndCart } from "@/redux/features/cart/cart-thunks";
import { selectSocketSliceSocket } from "@/redux/features/socket/socket-selects";
import { joinProductShop } from "@/lib/joinProductShop";
import { selectAddressSliceDataAddress } from "@/redux/features/address/address-selects";
import { useSocketContext } from "src/contexts/Auth/SocketContext";
const CheckoutPrice = () => {
  const { socket } = useSocketContext();
  const code_payment = useAppSelector(selectDataPayment);
  const { data, isLogged } = useAuthContext();
  const dataAddress = useAppSelector(selectAddressSliceDataAddress);
  const [dataCheckout, setDataCheckout] = useState<any>();
  const dataCartLocal = useAppSelector(selectCartSliceDataLocal);
  const dataCheckoutW = useAppSelector(selectDataCheckout);
  const dataPayment = useAppSelector(selectPaymentSliceData);
  const [isUpload, setIsUpload] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const router = useRouter();
  useEffect(() => {
    if (dataCartLocal) {
      dispatch(
        priceResultData({
          data: dataCartLocal,
          code_gift: "",
          price_gift: 1,
        })
      );
    }
    // eslint-disable-next-line
  }, [dataCartLocal]);
  const priceResultQuality = (price: number, quality: number) => {
    return price * quality;
  };
  const priceDiscount = (price: number, discount: number) => {
    const discountResult = discount / 100;
    return price - price * discountResult;
  };
  const priceResult = () => {
    let result: number = 0;
    dataCartLocal.map((item) => {
      result += priceDiscount(
        priceResultQuality(item.price, item.quality_product),
        item.discount
      );
    });
    return result;
  };

  const orderCheckout = () => {
    let address_root = "";
    if (dataAddress.data) {
      dataAddress.data.map((item) => {
        if (item.status) {
          address_root = item.code_address;
        }
      });
    }
    /*socketRdx?.emit('notification_order', {
      code_shop: joinProductShop(dataCartLocal),
      data: dataCartLocal
    })*/
    if (code_payment && code_payment.length !== 0) {
      dispatch(
        checkoutOrder({
          data_checkout: dataCartLocal,
          price_result: dataCheckoutW.priceResult,
          code_address: address_root,
          code_payment: code_payment || "",
        })
      );
    } else {
      alert("Bạn chưa chọn hình thức thanh toán");
    }

    // router.push('/checkout/completion?code')
  };
  useEffect(() => {
    if (
      !dataCheckoutW.dataCheckout.loading &&
      dataCheckoutW.dataCheckout.data
    ) {
      if (dataCheckoutW.dataCheckout.data.status === 200) {
        const code_product: Array<string> = [];
        dataCartLocal.map((item) => {
          if (item.code_product) {
            code_product.push(item.code_product.trim());
          }
        });
        if (socket) {
          socket.emit("notification_order", {
            code_shop: joinProductShop(dataCartLocal),
            data: dataCartLocal,
          });
        }
        dispatch(setDataCartLocal({ data: [] }));
        dispatch(
          removeCartByCodeProductAndCart({ code_product: code_product })
        );
        router.replace("/checkout/completion");
        dispatch(restCheckout());
      }
    }
    //eslint-disable-next-line
  }, [dataCheckoutW.dataCheckout.loading, dispatch, isUpload]);

  return (
    <>
      <ul className="price__main">
        <li className="price__main___item">
          <span>Tạm tính </span>
          <span className="boldPrice">{formatPriceVND(priceResult())}</span>
        </li>
        {/* <li className="price__main___item">
          <span>Giảm giá </span>
          {console.log(dataCheckoutW)}
          <span className="boldPrice salePrice">
            {" "}
            -{formatPriceVND(dataCheckoutW.priceDiscount)}
          </span>
        </li> */}
      </ul>
      <div className="price__result">
        <h4>Tổng tiền</h4>
        <div className="w">
          <span> {formatPriceVND(dataCheckoutW.priceResult)} </span>
          <p>( Đã bao gồm VAT nếu có )</p>
        </div>
      </div>
      <h5>GIa tri : {dataCheckout}</h5>
      <div className="buy">
        <button type="button" onClick={orderCheckout} className="btn btn-buy">
          <i className="fa-solid fa-bag-shopping" /> ĐẶT NGAY
        </button>
      </div>
    </>
  );
};
export default CheckoutPrice;
