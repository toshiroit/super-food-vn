import { formatPriceVND } from "@/lib/formatPrice";
import { selectCartSliceDataLocal } from "@/redux/features/cart/cart-selects";
import { useAppSelector } from "@/redux/hooks/hooks";

const CheckoutProduct = () => {
  const dataCartLocalRdx = useAppSelector(selectCartSliceDataLocal);
  const priceDiscount = (price: number, discount: number) => {
    const discountResult = discount / 100;
    return price - price * discountResult;
  };

  const priceResultQuality = (price: number, quality: number) => {
    if (priceDiscount(price, quality)) {
      return price * quality;
    }
    return 0;
  };

  return (
    <>
      <li className="main__item">
        <div className="main__item___header">
          <div className="comboGiftShip">
            <span className="name"> Combo khuyến mãi </span>
            <p>Mua thêm 10 sản phẩm để được giảm 25%</p>
          </div>
        </div>
        <div className="main__item___main">
          <div className="dateShip">
            <span>
              <i className="fa-solid fa-clock" /> Sản phẩm này dự kiến giao hàng
              ngày 24-10-2022
            </span>
          </div>
          <div className="main__item___main____scroll">
            {dataCartLocalRdx.map((item) => {
              return (
                <div key={item.code_product}>
                  <div className="productCart">
                    <div className="productCart__image">
                      <picture>
                        <img src={(item.image as string) || ""} alt="" />
                      </picture>
                    </div>
                    <div className="productCart__name productCart__nameMobile">
                      <p>{item.name}</p>
                      <div className="productCart__price productCart__priceMobile">
                        <div className="pricew1">
                          <span>
                            {formatPriceVND(
                              priceDiscount(
                                (item.price as number) || 0,
                                (item.discount as number) || 0
                              )
                            )}
                          </span>
                        </div>
                        <div className="pricew2">
                          <span>
                            {formatPriceVND((item.price as number) || 0)}{" "}
                          </span>
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
                      <p>{item.name}</p>
                    </div>
                    <div className="productCart__price">
                      <div className="pricew1">
                        <span>
                          {formatPriceVND(
                            priceDiscount(
                              (item.price as number) || 0,
                              (item.discount as number) || 0
                            )
                          )}
                        </span>
                      </div>
                      <div className="pricew2">
                        <span>
                          {formatPriceVND((item.price as number) || 0)}{" "}
                        </span>
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
                        <span>Số lượng : {item.quality_product} </span>
                      </div>
                    </div>
                    <div className="productCart__priceResult">
                      <span>
                        {formatPriceVND(
                          priceResultQuality(
                            priceDiscount(
                              (item.price as number) || 0,
                              (item.discount as number) || 0
                            ),
                            (item.quality_product as number) || 0
                          )
                        )}{" "}
                      </span>
                    </div>
                  </div>
                  <div
                    style={{
                      padding: "10px",
                    }}
                    className="info_product"
                  >
                    <h5 style={{ fontWeight: 500 }}>
                      Thông tin cho shop :{" "}
                      {item.info_product?.note || "Không có"}
                    </h5>
                    <h5 style={{ fontWeight: 500 }}>
                      Loại sản phẩm :{" "}
                      {(item.info_product?.type &&
                        item.info_product?.type?.name) ||
                        "Không có"}
                    </h5>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </li>
    </>
  );
};
export default CheckoutProduct;
