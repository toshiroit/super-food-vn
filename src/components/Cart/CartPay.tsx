import { clientRoutes } from "@/constants/router/client/client";
import { formatPriceVND } from "@/lib/formatPrice";
import { getGiftProductCart } from "@/lib/getGiftProductCart";
import { selectAddressSliceData } from "@/redux/features/address/address-selects";
import { getAddressByUser } from "@/redux/features/address/address-thunks";
import { selectCartSliceDataLocal, selectCartSlicePriceDiscount, selectCartSlicePriceResult } from "@/redux/features/cart/cart-selects";
import { priceResultData } from "@/redux/features/cart/cart-slice";
import { addDataCheckout } from "@/redux/features/checkout/checkout-slice";
import { onDisplayLogin } from "@/redux/features/display/display-slice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks/hooks";
import { GiftT } from "@/types/cart/cart";
import Link from "next/link";
import { useRouter } from "next/router";
import { ChangeEvent, useEffect, useState } from "react";
import { useAuthContext } from "src/contexts/Auth/AuthContext";
import GiftItem from "../Gift/GiftItem";

const CartPay = () => {
  const dataCartLocal = useAppSelector(selectCartSliceDataLocal)
  const priceResultW = useAppSelector(selectCartSlicePriceResult)
  const dataAddressUser = useAppSelector(selectAddressSliceData)
  const priceDiscountW = useAppSelector(selectCartSlicePriceDiscount)
  const dispatch = useAppDispatch()
  const router = useRouter()
  const { isLogged } = useAuthContext()
  useEffect(() => {
    let isStoped = true
    const onGetAddress = () => {
      if (isStoped) {
        dispatch(getAddressByUser())
      }
      return () => {
        isStoped = false
      }
    }
    onGetAddress()
  }, [dataCartLocal, dispatch])
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
  const onPayCheckout = () => {
    if (dataCartLocal) {
      if (dataCartLocal.length > 0) {
        if (isLogged) {
          if (dataAddressUser) {
            if (dataAddressUser.length > 0) {
              dispatch(addDataCheckout({
                data: dataCartLocal,
                priceResult: priceResultW as number || 0,
                priceDiscount: priceDiscountW as number || 0
              }))
              router.push(clientRoutes.CHECKOUT)
            }
            else {
              router.push(clientRoutes.USER_ADDRESS)
            }
          }
        }
        else {
          dispatch(onDisplayLogin({
            isShowPhone: true,
            isShowFixed: true
          }))
        }

      }
    }
  }
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
      {isLogged ?
        <>
          <div className="header">
            <div className="inline">
              <span>
                <i className="fa-solid fa-location-dot fa-size" />
                Giao tới
              </span>
              <Link href={clientRoutes.USER_ADDRESS}>
                <a>
                  <span>
                    <i className="fa-solid fa-file-invoice fa-size" />
                    Thay đổi
                  </span>
                </a>
              </Link>
            </div>
            <>
              {dataAddressUser && dataAddressUser.length === 0 ? dataAddressUser.map((item => {
                if (item.status)
                  return (
                    <>
                      <div className="info">
                        <div className="info__name">
                          <span>{item.full_name}</span>
                        </div>
                        <i className="bd" />
                        <div className="info__phone">
                          <span>{item.phone}</span>
                        </div>
                      </div>
                      <div className="address">
                        <p>{item.detail_address
                          ||
                          item.street + ' , ' + item.village + ' , ' + item.province}</p>
                      </div>

                    </>
                  )
              })) : <h4 style={{ textAlign: 'center', fontWeight: '400', fontSize: '0.9rem' }}>Chưa có địa chỉ thanh toán </h4>
              }
            </>
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
              {/*
              {
                getGiftProductCart(dataCartLocal).map((item, key) => {
                  return (
                    <GiftItem code={item.code_w_voucher} image="124" title={item.name_voucher} key={key} />
                  )
                })
              }
              */}
              {
                dataCartLocal.map((item, key) => {
                  return (
                    <GiftItem code={item.code_w_voucher} image="124" title={item.name_voucher} key={item.code_w_voucher} />
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
        </> : ''
      }
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
          <button type="button" onClick={onPayCheckout} className="btn btn-buy">
            <i className="fa-solid fa-bag-shopping" />
            {
              isLogged ? ' ĐẶT NGAY' :
                !dataAddressUser || dataAddressUser?.length === 0 ? 'Cập nhật địa chi để đặt hàng ' :
                  'Đăng nhập để đặt hàng '
            }
          </button>
        </div>
      </div>
    </>
  );
};
export default CartPay;
