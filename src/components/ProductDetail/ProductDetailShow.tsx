import { clientRoutes } from "@/constants/router/client/client";
import { formatPriceVND } from "@/lib/formatPrice";
import { slug } from "@/lib/slug";
import { addCart } from "@/redux/features/cart/cart-slice";
import { addCartByCodeUser } from "@/redux/features/cart/cart-thunks";
import {
  selectProductSliceData,
  selectProductSliceDataProductDetail,
  selectProductSliceLoading,
} from "@/redux/features/product/product-selects";
import { useAppDispatch, useAppSelector } from "@/redux/hooks/hooks";
import { NotifyCationForm } from "@/types/notifycation/notifycation";
import Link from "next/link";
import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { useAuthContext } from "src/contexts/Auth/AuthContext";
import { useRouter } from "next/router";
import { TypeProductValue } from "@/types/product/product";
const ProductDetailShow = () => {
  const { isLogged } = useAuthContext();
  const router = useRouter();
  const [timeShow, setTimeShow] = useState<number>(4);
  const [infoProduct, setInfoProduct] = useState<string>("");
  const [showNotify, setShowNotify] = useState<NotifyCationForm>({
    show: null,
    type: null,
  });
  const data = useAppSelector(selectProductSliceDataProductDetail);
  const loading = useAppSelector(selectProductSliceLoading);
  const dispatch = useAppDispatch();

  const [quality, setQuality] = useState<number>(1);
  const [typeProduct, setTypeProduct] = useState<TypeProductValue | null>(null);
  const [imageShow, setImageShow] = useState<any>();
  useEffect(() => {
    if (showNotify.show == "show") {
      if (timeShow === 0) {
        setTimeShow(4);
      }
      const timer: NodeJS.Timer = setInterval(
        () => timeShow > 0 && setTimeShow(timeShow - 1),
        1000
      );
      if (timeShow === 0) {
        setShowNotify({
          show: "hide",
        });
      }
      return () => clearInterval(timer);
    }
  }, [timeShow, showNotify]);
  const onAddCart = (data: any, infoProduct: string) => {
    toast("🦄 Thêm vào giỏ hàng thành công", {
      position: "bottom-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
    dispatch(
      addCart({
        item: data,
        quality: quality,
        infoProduct: infoProduct,
        type_product: typeProduct,
      })
    );
  };
  const priceDiscountResult = (discount: number, price: number) => {
    const discountw = discount / 100;
    const priceResult = price - price * discountw;
    return priceResult;
  };
  const onSelectType = (value: TypeProductValue) => {
    setTypeProduct(value);
  };
  const onChangeQuality = (type: "+" | "-") => {
    if (type === "+") {
      setQuality(quality + 1);
    } else if (type === "-") {
      if (quality > 1) setQuality(quality - 1);
    }
  };

  const onPayProduct = (data: any, infoProduct: string) => {
    dispatch(
      addCart({
        item: data,
        quality: quality,
        infoProduct: infoProduct,
        type_product: typeProduct,
      })
    );
    router.push("/cart");
  };
  const onShowImage = (data: any, id: number) => {
    setImageShow({
      id,
      image: data.image,
    });
  };
  console.log(data);
  return (
    <>
      <ToastContainer
        position="bottom-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <div className="common">
        <div className="photo">
          {data && !loading ? (
            <div className="photo__box">
              <div className="image">
                <picture>
                  <img
                    src={(imageShow && imageShow.image) || data.image}
                    alt=""
                  />
                </picture>
              </div>
              <div className="videoShow" />
            </div>
          ) : (
            ""
          )}
          <ul className="photo__side">
            {data && !loading ? (
              <>
                <li
                  onClick={() => onShowImage(data.image, -1)}
                  className="photo__side___item"
                >
                  <picture>
                    <img src={data.image} alt="" />
                  </picture>
                </li>
                {data.images &&
                  data.images.map((item: any, key: any) => {
                    return (
                      <li
                        onClick={() => onShowImage(item, key)}
                        className={`photo__side___item ${
                          imageShow && imageShow.id === key ? "active" : ""
                        }`}
                        key={key}
                      >
                        <picture>
                          <img src={item.image} alt="" />
                        </picture>
                      </li>
                    );
                  })}
              </>
            ) : (
              ""
            )}
          </ul>
        </div>
        <div className="info">
          {data && !loading ? (
            <div className="info__basic">
              <div className="categorywp">
                <div className="wp">
                  <span>
                    Danh mục :{" "}
                    <b>
                      {data.name_product_type
                        ? data.name_product_type
                        : "Không rõ"}
                    </b>{" "}
                  </span>
                </div>
                <div className="wp">
                  <span>
                    Tên quán : <b>{data && data.name_shop}</b>{" "}
                  </span>
                </div>
              </div>
              <h1 className="title">{data.name}</h1>{" "}
              <div className="starBuy">
                <div className="star ac">
                  <i className="fa-solid fa-star fa-size" />
                  <i className="fa-solid fa-star fa-size" />
                  <i className="fa-solid fa-star fa-size" />
                  <i className="fa-solid fa-star fa-size" />
                  <i className="fa-solid fa-star fa-size" />
                </div>
                <div className="buy ac">
                  <span>Đã bán {data.purchase}</span>
                </div>
              </div>
              <div className="pricex">
                <h1 className="pricex__w gt">
                  {formatPriceVND(
                    priceDiscountResult(data.discount, data.price)
                  )}
                </h1>
                <h3 className="price__w sale">
                  {formatPriceVND(data.price)}
                  <div className="opwSale">
                    <span>-{data.discount}%</span>
                  </div>
                </h3>
                <div className="pricex__absGift">
                  <p>
                    <i className="fa-solid fa-gift fa-size" />
                    Áp dụng mã giảm giá 50K - Giảm giá vận chuyển 25%
                  </p>
                </div>
              </div>
              <div className="selectProduct">
                <h4 className="title">Lựa chọn</h4>
                <ul className="selectProduct__main">
                  {data.type_product &&
                    data.type_product.map((item: any) => {
                      if (item.code && item.name.length > 0)
                        return (
                          <li
                            onClick={() => onSelectType(item)}
                            key={item.code}
                            className={`itemSelect ${
                              typeProduct &&
                              typeProduct.code.trim() === item.code
                                ? "active"
                                : ""
                            }`}
                          >
                            {item.name}
                          </li>
                        );
                    })}
                </ul>
              </div>
              <div className="noteProduct">
                <textarea
                  onChange={(e) => setInfoProduct(e.target.value)}
                  name="inoProduct"
                  style={{
                    width: "100%",
                    resize: "none",
                    height: "150px",
                    padding: "10px",
                    border: "1px solid #ddd",
                    background: "none",
                    outline: "none",
                  }}
                  placeholder="Thêm thông tin cho shop "
                ></textarea>
              </div>
              <div className="btnProduct">
                <div className="btnProduct__quality">
                  <span>Số lượng </span>
                  <div className="btnProduct__quality___input">
                    <i
                      onClick={() => onChangeQuality("-")}
                      className="fa-solid fa-minus fa-size"
                    />
                    <input
                      onChange={() => {}}
                      type="number"
                      name=""
                      value={quality}
                      max={data.quality}
                      maxLength={data.quality}
                      id=""
                    />
                    <i
                      onClick={() => onChangeQuality("+")}
                      className="fa-solid fa-plus fa-size"
                    />
                  </div>
                </div>
                <div className="btnProduct__main">
                  <button
                    onClick={() => onPayProduct(data, infoProduct)}
                    type="button"
                    className="btn btn-buy"
                  >
                    <i className="fa-solid fa-bag-shopping fa-size" /> MUA NGAY
                  </button>
                  <button
                    onClick={() => onAddCart(data, infoProduct)}
                    type="button"
                    className="btn btn-cart"
                  >
                    <i className="fa-solid fa-cart-plus fa-size" />
                    Thêm vào giỏ
                  </button>
                </div>
              </div>
              {/* <div className="selectGift">
                <h4 className="selectGift__title">Mã giảm giá</h4>
                <ul className="selectGift__main">
                  <li className="selectGift__main___item">
                    <h3>
                      <i className="fa-solid fa-gift fa-size" /> Giảm 25K
                    </h3>
                  </li>
                  <li className="selectGift__main___item">
                    <h3>
                      <i className="fa-solid fa-gift fa-size" /> Giảm 25K
                    </h3>
                  </li>
                  <li className="selectGift__main___item">
                    <h3>
                      <i className="fa-solid fa-gift fa-size" /> Giảm 25K
                    </h3>
                  </li>
                  <li className="selectGift__main___item">
                    <h3>
                      <i className="fa-solid fa-gift fa-size" /> Giảm 25K
                    </h3>
                  </li>
                </ul>
                <div className="infoGift">
                  <i className="fa-solid fa-circle-info fa-size" />
                  <ul className="infoGift__main">
                    <li className="infoGift__main___item">
                      Đơn hàng tối thiểu 150k mua được tối đa mỗi món 1 phần
                    </li>
                    <li className="infoGift__main___item">
                      Đơn hàng tối thiểu 150k mua được tối đa mỗi món 1 phần
                    </li>
                  </ul>
                </div>
              </div> */}
              <div className="infoProductwp">
                <ul className="infoProductwp__main">
                  <li className="infoProductwp__main___item">
                    <h3 className="ti">Người ăn</h3>
                    <p>4 người ăn</p>
                  </li>
                  <li className="infoProductwp__main___item">
                    <h3 className="ti">Thương hiệu</h3>
                    <p>4 người ăn</p>
                  </li>
                  <li className="infoProductwp__main___item">
                    <h3 className="ti">Xuất sứ</h3>
                    <p>4 người ăn</p>
                  </li>
                </ul>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
        <div className="viewShop">
          {data && !loading ? (
            <>
              <h4 className="title">Xem SHOP</h4>
              <div className="content">
                <div className="content__avatar">
                  <div className="img">
                    <picture>
                      <img src={data.image_shop} alt="" />
                    </picture>
                  </div>
                  <div className="nameCheck">
                    <div className="check">
                      <i className="fa-solid fa-circle-check fa-size" />
                      <span>Đã kiểm tra </span>
                    </div>
                    <div className="name">
                      <span>{data.name_shop}</span>
                    </div>
                  </div>
                </div>
                <div className="content__info">
                  <ul className="content__info___main">
                    <li className="content__info___main____item">
                      <div className="wp">
                        <span>
                          <i className="fa-solid fa-star fa-size" />
                          Đánh Giá : <b>{data.evaluate_shop}</b>
                        </span>
                      </div>
                    </li>
                    <li className="content__info___main____item">
                      <div className="wp">
                        <span>
                          <i className="fa-solid fa-user-clock fa-size" />
                          Theo dõi : <b>{data.follow_shop}</b>
                        </span>
                      </div>
                    </li>
                    <li className="content__info___main____item">
                      <div className="wp">
                        <span>
                          <i className="fa-solid fa-box fa-size" />
                          Sản phẩm : <b>{data.shop_quatity_product}</b>
                        </span>
                      </div>
                    </li>
                    <li className="content__info___main____item">
                      <div className="wp">
                        <span>
                          <i className="fa-solid fa-bag-shopping fa-size" />
                          Đã bán : <b>0</b>
                        </span>
                      </div>
                    </li>
                  </ul>
                  <div className="content__info___btnShow">
                    <Link
                      href={clientRoutes.SHOP_INDEX(
                        `${data.code_shop && data.code_shop.trim()}.${slug(
                          data.name_shop ? data.name_shop.trim() : ""
                        )}`
                      )}
                    >
                      <a>
                        <button type="button">
                          <i className="fa-solid fa-eye fa-size" />
                          Xem shop
                        </button>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
};
export default ProductDetailShow;
