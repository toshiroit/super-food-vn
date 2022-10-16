import { formatPriceVND } from "@/lib/formatPrice";
import { getGiftProductCart } from "@/lib/getGiftProductCart";
import { selectCartSliceDataLocal, selectCartSlicePriceDiscount, selectCartSlicePriceResult } from "@/redux/features/cart/cart-selects";
import { priceResultData } from "@/redux/features/cart/cart-slice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks/hooks";
import { GiftT } from "@/types/cart/cart";
import { ChangeEvent, useEffect, useState } from "react";
import GiftItem from "../Gift/GiftItem";

const CartPay = () => {
  const dataCartLocal = useAppSelector(selectCartSliceDataLocal)
  const priceResultW = useAppSelector(selectCartSlicePriceResult)
  const priceDiscountW = useAppSelector(selectCartSlicePriceDiscount)
  const dispatch = useAppDispatch()
  const [codeGift, setCodeGift] = useState<GiftT>({
    code: '',
    isCheck: true
  })
  const onChangeCodeGift = (e: ChangeEvent<HTMLInputElement>) => {
    setCodeGift({
      isCheck: true,
      code: e.target.value,
    })
  };
  const onCheckCodeGift = () => {
    if (codeGift.code) {
      if (codeGift.code.length > 0) {
        let data = getGiftProductCart(dataCartLocal).filter(item => item.code_w_voucher.trim() === codeGift.code)
        if (data.length > 0) {
          setCodeGift({
            ...codeGift,
            isCheck: true,
            show: 'SHOW',
            price_gift: data[0].price_voucher
          })
          dispatch(priceResultData({
            data: dataCartLocal,
            price_gift: data[0].price_voucher,
            code_gift: data[0].code_w_voucher
          }))
        }
        else {
          setCodeGift({
            ...codeGift,
            isCheck: false,

          })
        }
      }
    }
  };
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
  useEffect(() => {
    if (dataCartLocal) {
      dispatch(priceResultData({
        data: dataCartLocal,
        price_gift: codeGift.price_gift
      }))
    }
  }, [dispatch, dataCartLocal, codeGift])
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
          {
            getGiftProductCart(dataCartLocal).map((item, key) => {
              return (
                <GiftItem code={item.code_w_voucher} image="124" title={item.name_voucher} key={key} />
              )
            })
          }
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
            <button type="button" onClick={onCheckCodeGift}>Áp dụng</button>
          </div>
          <p
            style={{
              fontSize: "0.9rem",
              color: `${!codeGift.isCheck ? '#e7000e' : '#408140'}`, marginTop: "5px"
            }}
            className="error"
          >
            {
              !codeGift.isCheck ? <>
                Mã giảm giá không chính xác
              </> : codeGift.show === 'SHOW' ? 'Đã áp dụng ' : ''
            }
          </p>
        </div>
      </div>
      <div className="footer">
        <ul className="price__main">
          <li className="price__main___item">
            <span>Tạm tính </span>
            <span className="boldPrice">{formatPriceVND(priceResult())}</span>
          </li>
          <li className="price__main___item">
            <span>Giảm giá </span>
            <span className="boldPrice salePrice">
              {formatPriceVND(priceDiscountW as number)}
            </span>
          </li>
        </ul>
        <div className="price__result">
          <h4>Tổng tiền</h4>
          <div className="w">
            <span>{formatPriceVND(priceResultW as number)} </span>
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
