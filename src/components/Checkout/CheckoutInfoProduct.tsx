import { formatPriceVND } from "@/lib/formatPrice";
import { selectCartSliceDataLocal } from "@/redux/features/cart/cart-selects";
import { useAppSelector } from "@/redux/hooks/hooks";
import { useState } from "react";

const CheckoutInfoProduct = () => {
  const [isShow, setIsShow] = useState<boolean>(false);
  const dataCartLocal = useAppSelector(selectCartSliceDataLocal)
  const priceDiscount = (price: number, discount: number) => {
    const discountResult = discount / 100;
    return price - (price * discountResult);
  };
  const priceResultQuatity = (price: number, quatity: number) => {
    return price * quatity;
  }
  return (
    <>
      <div className="title">
        <div>
          <h4>Thông tin đơn hàng</h4>
          <span onClick={() => setIsShow(!isShow)} className="inner">
            13 sản phẩm ( Xem chi tiết)
          </span>
        </div>
        <span>Sửa đổi </span>
      </div>
      {isShow ? (
        <ul className="infoProduct">
          {
            dataCartLocal.map(item => {
              return (
                <li className="infoProduct__item" key={item.code_product}>
                  <span className="name">
                    <i className="fa-solid fa-signature" /> {item.name}
                  </span>
                  <div className="slPr">
                    <h5>x{item.quality_product}</h5>
                    <span className="price">
                      {
                        formatPriceVND(priceResultQuatity(priceDiscount(item.price, item.discount), item.quality))
                      }
                    </span>
                  </div>
                </li>
              )
            })
          }
        </ul>
      ) : (
        ""
      )}
    </>
  );
};
export default CheckoutInfoProduct;
