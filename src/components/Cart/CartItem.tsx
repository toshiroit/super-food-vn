import { clientRoutes } from "@/constants/router/client/client";
import { formatPriceVND } from "@/lib/formatPrice";
import { slug } from "@/lib/slug";
import { onChangeCart, setCartLocal } from "@/redux/features/cart/cart-slice";
import { removeCartItemByCodeCart } from "@/redux/features/cart/cart-thunks";
import { useAppDispatch } from "@/redux/hooks/hooks";
import { CartItemProps, CartShop, OnChangeCartType } from "@/types/cart/cart";
import Link from "next/link";
import { useAuthContext } from "src/contexts/Auth/AuthContext";

const CartItem = ({ code_shop, name_shop, cartItem }: CartShop) => {
  const dispatch = useAppDispatch()
  const { isLogged } = useAuthContext()
  const priceDiscount = (price: number, discount: number) => {
    const discountResult = discount / 100;
    return price - (price * discountResult);
  };

  const priceResultQuality = (
    price: number,
    discount: number,
    quality: number
  ) => {
    if (priceDiscount(price, discount)) {
      return priceDiscount(price, discount) * quality
    }
    return 0
  };
  const onPoCart = (e: OnChangeCartType) => {
    dispatch(onChangeCart({ type: e.type, data: e.data }))
    if (e.type === 'remove') {
      if (isLogged) {
        if (e.data) {
          dispatch(removeCartItemByCodeCart({
            data_cart: e.data,
            code_cart: e.data.code_cart as string
          }))
        }

      }
    }
  }
  return (
    <>
      {
        cartItem?.map((itemShop, key) => {
          return (
            <li className="main__item" key={key}>
              <div className="main__item___header">
                <div className="nameShop">
                  <input type="checkbox" name="groupShop[object Object]" id="" />
                  <div className="wo">
                    <i className="fa-solid fa-store" />
                    <span>{itemShop.shop.name_shop}</span>
                  </div>
                </div>
                <div className="comboGiftShip">
                  <span className="name"> Combo khuyến mãi </span>
                  <p>Mua thêm 10 sản phẩm để được giảm 25%</p>
                </div>
              </div>
              <div className="main__item___main">
                {
                  itemShop.cart.map((item) => {
                    return (
                      <div key={item.code_product}>
                        <div className="productCart">
                          <div className="productCart__checkbox">
                            <input
                              type="checkbox"
                              name={`itemProduct`}
                              onChange={(e) => { }}
                              id=""
                              value={0}
                            />
                          </div>
                          <Link href={
                            clientRoutes.PRODUCT_DETAIL(
                              slug(item.name as string),
                              item.code_product as string
                            )}>
                            <div className="productCart__image">
                              <picture>
                                <img src={item.image as string} alt="" />
                              </picture>
                            </div>
                          </Link>
                          <div className="productCart__name productCart__nameMobile">
                            <p>{item.name}</p>
                            <div className="productCart__priceMobile">
                              <div className="pricew1">
                                <span>
                                  {priceDiscount(item.price as number, item.discount || 24)}
                                </span>
                              </div>
                              <div className="pricew2">
                                <span>{item.price}</span>
                              </div>
                              <div className="salePrice">
                                <span>
                                  Giảm giá {24}%
                                  <i className="fa-solid fa-arrow-trend-down fa-size" />
                                </span>
                              </div>
                            </div>
                          </div>

                          <div className="productCart__name">
                            <p>{item.name}</p>
                          </div>
                          <div className="productCart__price">
                            <div className="pricew1">
                              <span>
                                {formatPriceVND(
                                  priceDiscount(item.price as number, 24)
                                )}
                              </span>
                            </div>
                            <div className="pricew2">
                              <span>{formatPriceVND(item.price as number)} </span>
                            </div>
                            <div className="salePrice">
                              <span>
                                Giảm giá {24}%
                                <i className="fa-solid fa-arrow-trend-down fa-size" />
                              </span>
                            </div>
                          </div>
                          <div className="productCart__quality">
                            <div className="inner">
                              <i
                                onClick={() => onPoCart({ type: "-", data: item })}
                                className="fa-solid fa-minus fa-size"
                              />
                              <input
                                type="number"
                                value={item.quality_product}
                                onChange={(e) => { }}
                                name=""
                                id=""
                              />
                              <i
                                onClick={() => onPoCart({ type: "+", data: item })}
                                className="fa-solid fa-plus fa-size"
                              />
                            </div>
                          </div>
                          <div className="productCart__priceResult">
                            <span>
                              {formatPriceVND(
                                priceResultQuality(
                                  item.price as number,
                                  item.discount as number,
                                  item.quality_product as number
                                )
                              )}
                            </span>
                          </div>
                          <div className="productCart__remove">

                            <i onClick={() => onPoCart({ type: "remove", data: item })} className="fa-solid fa-xmark fa-size" />
                          </div>
                        </div>
                        <div
                          style={{
                            padding: '5px',
                            marginTop: '10px',
                            position: 'relative'
                          }}
                          className="infoProduct">
                          <h5
                            style={{
                              fontWeight: 500,
                              position: 'absolute',
                              top: '-13px',
                            }}
                          >Thông tin kèm theo : </h5>
                          <p style={{
                            fontSize: '0.9rem',
                            borderBottom: '1px solid #ddd'
                          }}>
                            {item.info_product}
                          </p>
                        </div>
                      </div>
                    )
                  })
                }
              </div>
              <div className="main__item___footer">
                <div className="vorcherShop">
                  <div className="inner">
                    <i className="fa-solid fa-gift fa-size" />
                    <span>Vorcher của shop </span>
                    <i className="fa-solid fa-chevron-down fa-size" />
                  </div>
                </div>
              </div>

            </li>
          )
        })
      }
    </>
  );
};
export default CartItem;
