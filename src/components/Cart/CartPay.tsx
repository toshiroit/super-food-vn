import { clientRoutes } from "@/constants/router/client/client";
import { formatPriceVND } from "@/lib/formatPrice";
import { getGiftProductCart } from "@/lib/getGiftProductCart";
import { selectAddressSliceDataAddress } from "@/redux/features/address/address-selects";
import { getAddressByUser } from "@/redux/features/address/address-thunks";
import {
  selectCartSLiceCodeGift,
  selectCartSliceDataLocal,
  selectCartSlicePriceDiscount,
  selectCartSlicePriceResult,
} from "@/redux/features/cart/cart-selects";
import {
  priceResultData,
  setPriceVoucher,
} from "@/redux/features/cart/cart-slice";
import { addDataCheckout } from "@/redux/features/checkout/checkout-slice";
import { checkoutOrder } from "@/redux/features/checkout/checkout-thunks";
import { onDisplayLogin } from "@/redux/features/display/display-slice";
import { selectVoucherSliceDataVoucherCheck } from "@/redux/features/voucher/voucher-selects";
import { checkVoucherProductByVoucherShop } from "@/redux/features/voucher/voucher-thunks";
import { useAppDispatch, useAppSelector } from "@/redux/hooks/hooks";
import { CartItem, GiftT, LocationData } from "@/types/cart/cart";
import Link from "next/link";
import { useRouter } from "next/router";
import { ChangeEvent, useEffect, useState } from "react";
import { useAuthContext } from "src/contexts/Auth/AuthContext";
import GiftItem from "../Gift/GiftItem";

const CartPay = () => {
  const dataCartLocal = useAppSelector(selectCartSliceDataLocal);
  const dataGiftCodeRdx = useAppSelector(selectCartSLiceCodeGift);
  const priceResultW = useAppSelector(selectCartSlicePriceResult);
  const dataAddressUser = useAppSelector(selectAddressSliceDataAddress);
  const priceDiscountW = useAppSelector(selectCartSlicePriceDiscount);
  const voucherRdx = useAppSelector(selectVoucherSliceDataVoucherCheck);
  const [locationShip, setLocationShip] = useState<any>();
  const [location, setLocation] = useState<LocationData>({
    geoError: null,
    geoLocation: null,
  });
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { isLogged } = useAuthContext();
  useEffect(() => {
    let isStoped = true;
    const onGetAddress = () => {
      if (isStoped) {
        dispatch(getAddressByUser());
      }
      return () => {
        isStoped = false;
      };
    };
    onGetAddress();
  }, [dataCartLocal, dispatch]);
  useEffect(() => {
    if (
      !voucherRdx.loading &&
      !voucherRdx.error &&
      voucherRdx.data &&
      (!dataGiftCodeRdx || dataGiftCodeRdx.length === 0)
    ) {
      const price_voucher = voucherRdx.data.data?.price_voucher;
      dispatch(
        setPriceVoucher({
          price: price_voucher,
          code_gift: codeGift.code || "",
        })
      );
    }
  }, [voucherRdx]);
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (e) => {
        setLocationShip(e.coords);
      },
      async (err) => {
        setLocation({
          ...location,
          geoError: err,
        });
      }
    );
  }, []);
  const [codeGift, setCodeGift] = useState<GiftT>({
    code: "",
    isCheck: true,
  });
  const onChangeCodeGift = (e: ChangeEvent<HTMLInputElement>) => {
    setCodeGift({
      isCheck: true,
      code: e.target.value,
    });
  };

  const onSetCodeGift = (code: string) => {
    setCodeGift({
      isCheck: true,
      code: code,
    });
  };

  const onPayCheckout = () => {
    if (dataCartLocal) {
      if (dataCartLocal.length > 0) {
        if (isLogged) {
          if (dataAddressUser) {
            if (dataAddressUser.data && dataAddressUser.data.length > 0) {
              dispatch(
                addDataCheckout({
                  address: {
                    fullName: "124",
                    code: "124",
                  },
                  data: dataCartLocal,
                  priceResult: (priceResultW as number) || 0,
                  priceDiscount: (priceDiscountW as number) || 0,
                })
              );
              router.push(clientRoutes.CHECKOUT);
            } else {
              router.push(clientRoutes.USER_ADDRESS);
            }
          }
        } else {
          dispatch(
            onDisplayLogin({
              isShowPhone: true,
              isShowFixed: true,
            })
          );
        }
      }
    }
  };

  const codeGiftArray = () => {
    let result_gift: any[] = [];
    joinProductShopTest(dataCartLocal).map((item) => {
      return item.cart?.map((item2: any, key: number) => {
        return item2.voucher_product?.map((item3: any, key2: number) => {
          result_gift.push(item3);
        });
      });
    });
    return result_gift;
  };

  const joinProductShopTest = (data: CartItem[]): any[] => {
    let cpData = [...data];
    const itemsByCodeShop: any = {};
    for (const item of cpData) {
      itemsByCodeShop[item.code_shop || ""] ??= {
        shop: {
          name_shop: item.name_shop,
          code_shop: item.code_shop,
        },
        cart: [],
      };
      itemsByCodeShop[item.code_shop || ""].cart.push(item);
    }
    if (itemsByCodeShop) {
      return Object.values(itemsByCodeShop);
    }
    return [];
  };
  const onCheckCodeGift = () => {
    const result_product: any[] = [];
    if (dataCartLocal) {
      dataCartLocal.map((item) => {
        result_product.push({
          code_product: item.code_product.trim(),
        });
      });
    }
    dispatch(
      checkVoucherProductByVoucherShop({
        code_product: result_product,
        code_w_voucher: codeGift.code || "",
      })
    );
  };
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
  useEffect(() => {
    if (dataCartLocal) {
      dispatch(
        priceResultData({
          data: dataCartLocal,
          price_gift: codeGift.price_gift,
        })
      );
    }
  }, [dispatch, dataCartLocal, codeGift]);
  return (
    <>
      {isLogged ? (
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
              {dataAddressUser.data && dataAddressUser.data.length > 0 ? (
                dataAddressUser.data.map((item) => {
                  if (item.status)
                    return (
                      <>
                        <div key={item.code_address} className="info">
                          <div className="info__name">
                            <span>{item.full_name}</span>
                          </div>
                          <i className="bd" />
                          <div className="info__phone">
                            <span>{item.phone}</span>
                          </div>
                        </div>
                        <div className="address">
                          <p>
                            {item.detail_address ||
                              item.street +
                                " , " +
                                item.village +
                                " , " +
                                item.city}
                          </p>
                        </div>
                      </>
                    );
                })
              ) : (
                <h4
                  style={{
                    textAlign: "center",
                    fontWeight: "400",
                    fontSize: "0.9rem",
                  }}
                >
                  Chưa có địa chỉ thanh toán{" "}
                </h4>
              )}
            </>
          </div>
          <div className="main">
            <div className="main__gift">
              <span>
                <i className="fa-solid fa-gift fa-size" /> Mã giảm giá
              </span>
              <span>
                Có thể chọn <i className="fa-solid fa-circle-info fa-size" />
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
              {codeGiftArray().length > 0 ? (
                codeGiftArray().map((item) => {
                  return (
                    <GiftItem
                      key={item.code_voucher}
                      code={item.code_w_voucher}
                      image="124"
                      title={item.name_voucher}
                      onSetVoucher={onSetCodeGift}
                    />
                  );
                })
              ) : (
                <h4
                  style={{
                    textAlign: "center",
                    fontWeight: 500,
                    padding: "20px",
                  }}
                >
                  Không có mã giảm giá nào
                </h4>
              )}
              {/* {dataCartLocal.map((item, key) => {
                return (
                  <GiftItem
                    code={item.code_w_voucher}
                    image="124"
                    title={item.name_voucher}
                    key={key}
                  />
                );
              })} */}
            </ul>
            <div className="main__input">
              <div className="main__input___owp">
                <input
                  placeholder="Mã giảm giá của bạn "
                  type="text"
                  name="codeGift"
                  value={codeGift.code}
                  onChange={onChangeCodeGift}
                  id=""
                />
                <button type="button" onClick={onCheckCodeGift}>
                  Ap dung
                </button>
              </div>
              <p
                style={{
                  fontSize: "0.9rem",
                  color: `${voucherRdx.error ? "#e7000e" : "#408140"}`,
                  marginTop: "5px",
                }}
                className="error"
              >
                {voucherRdx.error
                  ? "Mã giảm giá không không tồn tại hoặc quá hạn"
                  : ""}
              </p>
            </div>
          </div>
        </>
      ) : (
        ""
      )}
      <div className="footer">
        <ul className="price__main">
          <li className="price__main___item">
            <span>Tạm tính </span>
            <span className="boldPrice">{formatPriceVND(priceResult())}</span>
          </li>
          <li className="price__main___item">
            <span>Phí vận chuyển </span>
            <span className="boldPrice">{formatPriceVND(23000)}</span>
          </li>
          <li className="price__main___item">
            <span>Giảm giá </span>
            <span className="boldPrice salePrice">
              {formatPriceVND(
                voucherRdx.data && voucherRdx.data.data?.price_voucher
              )}
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
            {!isLogged ? "Đăng nhập để đặt hàng " : "ĐẶT NGAY"}
          </button>
        </div>
      </div>
    </>
  );
};
export default CartPay;
