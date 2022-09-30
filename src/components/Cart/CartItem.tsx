import { formatPriceVND } from "@/lib/formatPrice";
import { useState } from "react";

const CartItem = () => {
  const [cartProductsRx] = useState<any[]>([{ cartProducts: [] }]);
  const isCheckedAllCart = (codeShop: string) => {
    return {
      isCheckAll: false,
    };
  };
  const onCheckAllProductShop = (
    codeShop: string,
    isCheckALlCart: boolean
  ) => {};
  const priceDiscount = (price: number, discount: number) => {
    return price * discount;
  };
  const isCheckedCart = (codeShop: string, code: string) => {
    return {
      isCheck: false,
    };
  };

  const onCheckProduct = (
    codeShop: string,
    code: string,
    isCheckCart: boolean
  ) => {};
  const onQualityProduct = (
    codeShop: string,
    code: string,
    quality: number
  ) => {};
  const priceResultQuality = (
    price: number,
    discount: number,
    quality: number
  ) => {
    return 10;
  };
  return (
    <>
      {cartProductsRx &&
        cartProductsRx.map((itemShop) => {
          return (
            <li key={itemShop.codeShop} className="main__item">
              <div className="main__item___header">
                <div className="nameShop">
                  <input
                    onClick={() =>
                      onCheckAllProductShop(
                        itemShop.codeShop,
                        !isCheckedAllCart(itemShop.codeShop).isCheckAll
                      )
                    }
                    type="checkbox"
                    name={`groupShop${itemShop}`}
                    id=""
                  />
                  <div className="wo">
                    <i className="fa-solid fa-store" />
                    <span>{itemShop.nameShop} </span>
                  </div>
                </div>
                <div className="comboGiftShip">
                  <span className="name"> Combo khuyến mãi </span>
                  <p>Mua thêm 10 sản phẩm để được giảm 25%</p>
                </div>
              </div>
              <div className="main__item___main">
                {itemShop.cartProducts.map((item: any) => {
                  return (
                    <>
                      <div className="productCart">
                        <div className="productCart__checkbox">
                          <input
                            onClick={() =>
                              onCheckProduct(
                                itemShop.codeShop,
                                item.code,
                                !isCheckedCart(itemShop.codeShop, item.code)
                                  .isCheck
                              )
                            }
                            checked={
                              isCheckedCart(itemShop.codeShop, item.code)
                                .isCheck
                                ? true
                                : false
                            }
                            type="checkbox"
                            name={`itemProduct${item.code}`}
                            id=""
                          />
                        </div>
                        <div className="productCart__image">
                          <picture>
                            <img src={item.image} alt="" />
                          </picture>
                        </div>
                        <div className="productCart__name productCart__nameMobile">
                          <p>{item.nameProduct}</p>
                          <div className="productCart__priceMobile">
                            <div className="pricew1">
                              <span>
                                {priceDiscount(item.price, item.discount)}
                              </span>
                            </div>
                            <div className="pricew2">
                              <span>{item.price}</span>
                            </div>
                            <div className="salePrice">
                              <span>
                                Giảm giá {item.discount}%
                                <i className="fa-solid fa-arrow-trend-down fa-size" />
                              </span>
                            </div>
                          </div>
                        </div>

                        <div className="productCart__name">
                          <p>{item.nameProduct}</p>
                        </div>
                        <div className="productCart__price">
                          <div className="pricew1">
                            <span>
                              {formatPriceVND(
                                priceDiscount(item.price, item.discount)
                              )}
                            </span>
                          </div>
                          <div className="pricew2">
                            <span>{formatPriceVND(item.price)} </span>
                          </div>
                          <div className="salePrice">
                            <span>
                              Giảm giá {item.discount}%
                              <i className="fa-solid fa-arrow-trend-down fa-size" />
                            </span>
                          </div>
                        </div>
                        <div className="productCart__quality">
                          <div className="inner">
                            <i
                              onClick={() =>
                                onQualityProduct(
                                  itemShop.codeShop,
                                  item.code,
                                  item.quality - 1
                                )
                              }
                              className="fa-solid fa-minus fa-size"
                            />
                            <input
                              type="number"
                              value={item.quality}
                              name=""
                              id=""
                            />
                            <i
                              onClick={() =>
                                onQualityProduct(
                                  itemShop.codeShop,
                                  item.code,
                                  item.quality + 1
                                )
                              }
                              className="fa-solid fa-plus fa-size"
                            />
                          </div>
                        </div>
                        <div className="productCart__priceResult">
                          <span>
                            {formatPriceVND(
                              priceResultQuality(
                                item.price,
                                item.discount,
                                item.quality
                              )
                            )}
                          </span>
                        </div>
                        <div className="productCart__remove">
                          <i className="fa-solid fa-xmark fa-size" />
                        </div>
                      </div>
                    </>
                  );
                })}
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
          );
        })}
    </>
  );
};
export default CartItem;
