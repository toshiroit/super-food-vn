import { formatPriceVND } from "@/lib/formatPrice";
import { randomLengthText } from "@/lib/random";
import socket from "@/lib/socketIO";
import { selectAddressSliceData } from "@/redux/features/address/address-selects";
import { selectCartSliceDataLocal } from "@/redux/features/cart/cart-selects";
import { priceResultData } from "@/redux/features/cart/cart-slice";
import { selectDataCheckout, selectDataPayment } from "@/redux/features/checkout/checkout-selects";
import { restCheckout } from "@/redux/features/checkout/checkout-slice";
import { checkoutOrder } from "@/redux/features/checkout/checkout-thunks";
import { selectPaymentSliceData } from "@/redux/features/payment/payment-selects";
import { useAppDispatch, useAppSelector } from "@/redux/hooks/hooks";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import LoadingBackgroundV1 from "../Background/BackgroundLoading/LoadingBackgroundV1";
import LoadingSpinner from "../Loading/LoadingSpinner";
import { ToastContainer, toast } from 'react-toastify';
import { useAuthContext } from "src/contexts/Auth/AuthContext";
const CheckoutPrice = () => {
  const code_payment = useAppSelector(selectDataPayment)
  const { data } = useAuthContext()
  const [dataCheckout, setDataCheckout] = useState<any>()
  const dataCartLocal = useAppSelector(selectCartSliceDataLocal)
  const dataAddress = useAppSelector(selectAddressSliceData)
  const dataCheckoutW = useAppSelector(selectDataCheckout)
  const dataPayment = useAppSelector(selectPaymentSliceData)
  const [isUpload, setIsUpload] = useState<boolean>(false)
  const dispatch = useAppDispatch()
  const router = useRouter()
  useEffect(() => {
    if (dataCartLocal) {
      dispatch(priceResultData({
        data: dataCartLocal,
        code_gift: '',
        price_gift: 1
      }))
    }
    // eslint-disable-next-line
  }, [dataCartLocal])
  const priceResultQuality = (price: number, quality: number) => {
    return price * quality;
  }
  const priceDiscount = (price: number, discount: number) => {
    const discountResult = discount / 100;
    return price - (price * discountResult);
  };
  const priceResult = () => {
    let result: number = 0;
    dataCartLocal.map(item => {
      result += priceDiscount(priceResultQuality(item.price, item.quality_product), item.discount)
    })
    return result;
  }

  const orderCheckout = () => {

    let address_root = ''
    if (dataAddress) {
      dataAddress.map((item) => {
        if (item.status) {
          address_root = item.code_address
        }
      })
    }
    dispatch(checkoutOrder({
      data_checkout: dataCartLocal,
      price_result: dataCheckoutW.priceResult,
      code_address: address_root,
      code_payment: code_payment || ''
    }))
    // router.push('/checkout/completion?code')
  }
  useEffect(() => {
    if (!dataCheckoutW.dataCheckout.loading && dataCheckoutW.dataCheckout.data) {
      if (dataCheckoutW.dataCheckout.data.status === 200) {
        const code_user = data.data.payload.code_user
        dispatch(restCheckout())
        socket.emit('notification', {
          data: `Tài khoản ${code_user} vừa đặt hàng thành công`
        })
        router.replace('/checkout/completion')
      }
    }
  }, [dataCheckoutW.dataCheckout.loading, dispatch, isUpload])
  return (
    <>
      <ul className="price__main">
        <li className="price__main___item">
          <span>Tạm tính </span>
          <span className="boldPrice">
            {formatPriceVND(priceResult())}
          </span>
        </li>
        <li className="price__main___item">
          <span>Giảm giá </span>
          <span className="boldPrice salePrice"> -{formatPriceVND(dataCheckoutW.priceDiscount)}</span>
        </li>
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
  )
}
export default CheckoutPrice;
