import { clientRoutes } from "@/constants/router/client/client";
import Link from "next/link";
import { useState } from "react";

const ProductDetailShow = () => {
  const [quality, setQuality] = useState();
  const [loadingProductDetail] = useState(null);
  const [dataProductDetail] = useState(null);
  const onAddCart = () => {};
  const onQuality = (quality: number) => {};
  return (
    <>
      <div className="common">
        <div className="photo">
          <div className="photo__box">
            <div className="image"></div>
            <div className="videoShow" />
          </div>
          <ul className="photo__side">
            {dataProductDetail && !loadingProductDetail ? (
              <li className="photo__side___item">
                <picture>
                  <img src={""} alt="" />
                </picture>
              </li>
            ) : (
              ""
            )}
          </ul>
        </div>
        <div className="info">
          {dataProductDetail && !loadingProductDetail ? (
            <div className="info__basic">
              <div className="categorywp">
                <div className="wp">
                  <span>
                    Danh mục : <b>Lẩu</b>{" "}
                  </span>
                </div>
                <div className="wp">
                  <span>
                    Tên quán : <b>Lẩu</b>{" "}
                  </span>
                </div>
              </div>
              <h1 className="title"></h1>
              <div className="starBuy">
                <div className="star ac">
                  <i className="fa-solid fa-star fa-size" />
                  <i className="fa-solid fa-star fa-size" />
                  <i className="fa-solid fa-star fa-size" />
                  <i className="fa-solid fa-star fa-size" />
                  <i className="fa-solid fa-star fa-size" />
                  <p>( 659 Đánh giá của người dùng )</p>
                </div>
                <div className="buy ac">
                  <span>Đã bán 12.000+</span>
                </div>
              </div>
              <div className="pricex">
                <h1 className="pricex__w gt">520.480 Đ</h1>
                <h3 className="price__w sale">
                  450.000 Đ
                  <div className="opwSale">
                    <span>-43%</span>
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
                  <li className="itemSelect">
                    <b>Không Toping</b>
                  </li>
                  <li className="itemSelect">
                    <b>Không Toping</b>
                  </li>
                  <li className="itemSelect">
                    <b>Không Toping</b>
                  </li>
                  <li className="itemSelect active">
                    <i className="fa-solid fa-check fa-size" />
                    <b>Không bún</b>
                  </li>
                  <li className="itemSelect">
                    <b>Không Toping</b>
                  </li>
                </ul>
              </div>
              <div className="btnProduct">
                <div className="btnProduct__quality">
                  <span>Số lượng </span>
                  <div className="btnProduct__quality___input">
                    <i
                      onClick={() => onQuality(-1)}
                      className="fa-solid fa-minus fa-size"
                    />
                    <input type="number" name="" defaultValue={quality} id="" />
                    <i
                      onClick={() => onQuality(+1)}
                      className="fa-solid fa-plus fa-size"
                    />
                  </div>
                </div>
                <div className="btnProduct__main">
                  <button type="button" className="btn btn-buy">
                    <i className="fa-solid fa-bag-shopping fa-size" /> MUA NGAY
                  </button>
                  <button
                    onClick={onAddCart}
                    type="button"
                    className="btn btn-cart"
                  >
                    <i className="fa-solid fa-cart-plus fa-size" />
                    Thêm vào giỏ
                  </button>
                </div>
              </div>
              <div className="selectGift">
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
              </div>
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
          {dataProductDetail && !loadingProductDetail ? (
            <>
              <h4 className="title">Xem SHOP</h4>
              <div className="content">
                <div className="content__avatar">
                  <div className="img">
                    <picture>
                      <img
                        src="https://loanthehongnhan.vn/hinh-anh-anime-doi/imager_29338.jpg"
                        alt=""
                      />
                    </picture>
                  </div>
                  <div className="nameCheck">
                    <div className="check">
                      <i className="fa-solid fa-circle-check fa-size" />
                      <span>Đã kiểm tra </span>
                    </div>
                    <div className="name">
                      <span>Lẩu Bò Hà Duyên</span>
                    </div>
                  </div>
                </div>
                <div className="content__info">
                  <ul className="content__info___main">
                    <li className="content__info___main____item">
                      <div className="wp">
                        <span>
                          <i className="fa-solid fa-star fa-size" />
                          Đánh Giá :
                        </span>
                        <b>4.4k</b>
                      </div>
                    </li>
                    <li className="content__info___main____item">
                      <div className="wp">
                        <span>
                          <i className="fa-solid fa-user-clock fa-size" />
                          Theo dõi :
                        </span>
                        <b>4.4k</b>
                      </div>
                    </li>
                    <li className="content__info___main____item">
                      <div className="wp">
                        <span>
                          <i className="fa-solid fa-box fa-size" />
                          Sản phẩm:
                        </span>
                        <b>49.4k</b>
                      </div>
                    </li>
                    <li className="content__info___main____item">
                      <div className="wp">
                        <span>
                          <i className="fa-solid fa-bag-shopping fa-size" />
                          Đã bán :
                        </span>
                        <b>942.4k</b>
                      </div>
                    </li>
                  </ul>
                  <div className="content__info___btnShow">
                    <Link
                      href={clientRoutes.SHOP_INDEX("lau-nha-lam-viet-nam")}
                    >
                      <a>
                        <button type="button">
                          <i className="fa-solid fa-eye fa-size" />
                          Xem shop
                        </button>
                      </a>
                    </Link>
                    <button type="button">
                      <i className="fa-solid fa-plus fa-size" />
                      Theo dõi
                    </button>
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
