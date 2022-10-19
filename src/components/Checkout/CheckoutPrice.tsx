import { formatPriceVND } from "@/lib/formatPrice";
import { selectCartSliceDataLocal, selectCartSlicePriceResult } from "@/redux/features/cart/cart-selects";
import { priceResultData } from "@/redux/features/cart/cart-slice";
import { selectDataCheckout } from "@/redux/features/checkout/checkout-selects";
import { useAppDispatch, useAppSelector } from "@/redux/hooks/hooks";
import { useRouter } from "next/router";
import { useEffect } from "react";
import LoadingBackgroundV1 from "../Background/BackgroundLoading/LoadingBackgroundV1";
import LoadingSpinner from "../Loading/LoadingSpinner";

const CheckoutPrice = () => {
  const dataCartLocal = useAppSelector(selectCartSliceDataLocal)
  //const priceResultW = useAppSelector(selectCartSlicePriceResult)
  const dataCheckoutW = useAppSelector(selectDataCheckout)
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
    //   router.push('/checkout/completion?code')
  }

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
      <div className="buy">
        <button type="button" onClick={orderCheckout} className="btn btn-buy">
          <i className="fa-solid fa-bag-shopping" /> ĐẶT NGAY
        </button>
      </div>

    </>
  )
}
export default CheckoutPrice;
