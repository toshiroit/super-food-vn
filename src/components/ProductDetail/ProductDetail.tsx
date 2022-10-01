import { useState } from "react";
import ProductDetailComment from "./ProductDetailComment";
import ProductDetailContent from "./ProductDetailContent";
import ProductDetailShow from "./ProductDetailShow";

const ProductDetail = () => {
  const [dataProductDetail] = useState(null);
  return (
    <>
      {/* <NotificationRoot data={dataNotification} /> */}
      <div className="detail">
        <div className="container">
          <div className="detail__content breadcrumb">
            <div className="detail__content___breadcrumb breadcrumb__content">
              {/* <BreadCrumb data={dataBreadcrumb} /> */}
            </div>
            <div
              className={`detail__content___product ${
                dataProductDetail ? "" : "productDetailLoading"
              }`}
            >
              <ProductDetailShow />
            </div>
            <div className="detail__content___wop">
              <ProductDetailContent />
            </div>
            <div className="detail__content___comment">
              <div className="title">
                <h4>
                  <i className="fa-solid fa-comments fa-size" /> Đánh giá từ
                  khách hàng
                </h4>
              </div>
              <div className="evaluate">
                <ProductDetailComment />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="productAbout">
        <div className="container">
          <div className="productAbout__opw">
            <div className="title">
              <h4>Thức ăn đi kèm</h4>
            </div>
          </div>
          <div className="productAbout__product">
            <div className="productAbout__product___overScroll">
              <li className="product__wp___item">
                <div className="point">
                  <span>9.4</span>
                </div>
                <div className="image">
                  <picture>
                    <img
                      src="https://image.cooky.vn/posproduct/g0/17280/s400x400/5048d46e-2b7e-430d-a750-6c99929f76cd.jpeg"
                      alt=""
                    />
                  </picture>
                </div>
                <div className="name">
                  <p>Set cơm việt buổi trưa</p>
                </div>
                <div className="price">
                  <span className="t1 text">300.000đ</span>
                  <span className="t2 text">120.000đ</span>
                </div>
                <div className="sellable">
                  <h4>Đã bán :</h4>
                  <b>465K</b>
                </div>
                <div className="description">
                  <div className="lw">
                    <img
                      src="https://afamilycdn.com/150157425591193600/2021/10/5/frame-11-16334083966771950318703.png"
                      alt=""
                    />
                  </div>
                  <div className="addressLength">
                    <i className="fa-size fa-solid fa-location-dot" />
                    <h4>4.2km</h4>
                  </div>
                </div>
                <div className="btn">
                  <button type="button">
                    <i className="fa-solid fa-basket-shopping fa-size" />
                    Chọn mua
                  </button>
                </div>
              </li>
              <li className="product__wp___item">
                <div className="point">
                  <span>9.4</span>
                </div>
                <div className="image">
                  <img
                    src="https://image.cooky.vn/posproduct/g0/17280/s400x400/5048d46e-2b7e-430d-a750-6c99929f76cd.jpeg"
                    alt=""
                  />
                </div>
                <div className="name">
                  <p>Set cơm việt buổi trưa</p>
                </div>
                <div className="price">
                  <span className="t1 text">300.000đ</span>
                  <span className="t2 text">120.000đ</span>
                </div>
                <div className="sellable">
                  <h4>Đã bán :</h4>
                  <b>465K</b>
                </div>
                <div className="description">
                  <div className="lw">
                    <img
                      src="https://afamilycdn.com/150157425591193600/2021/10/5/frame-11-16334083966771950318703.png"
                      alt=""
                    />
                  </div>
                  <div className="addressLength">
                    <i className="fa-size fa-solid fa-location-dot" />
                    <h4>4.2km</h4>
                  </div>
                </div>
                <div className="btn">
                  <button type="button">
                    <i className="fa-solid fa-basket-shopping fa-size" />
                    Chọn mua
                  </button>
                </div>
              </li>
              <li className="product__wp___item">
                <div className="point">
                  <span>9.4</span>
                </div>
                <div className="image">
                  <img
                    src="https://image.cooky.vn/posproduct/g0/17280/s400x400/5048d46e-2b7e-430d-a750-6c99929f76cd.jpeg"
                    alt=""
                  />
                </div>
                <div className="name">
                  <p>Set cơm việt buổi trưa</p>
                </div>
                <div className="price">
                  <span className="t1 text">300.000đ</span>
                  <span className="t2 text">120.000đ</span>
                </div>
                <div className="sellable">
                  <h4>Đã bán :</h4>
                  <b>465K</b>
                </div>
                <div className="description">
                  <div className="lw">
                    <img
                      src="https://afamilycdn.com/150157425591193600/2021/10/5/frame-11-16334083966771950318703.png"
                      alt=""
                    />
                  </div>
                  <div className="addressLength">
                    <i className="fa-size fa-solid fa-location-dot" />
                    <h4>4.2km</h4>
                  </div>
                </div>
                <div className="btn">
                  <button type="button">
                    <i className="fa-solid fa-basket-shopping fa-size" />
                    Chọn mua
                  </button>
                </div>
              </li>
              <li className="product__wp___item">
                <div className="point">
                  <span>9.4</span>
                </div>
                <div className="image">
                  <img
                    src="https://image.cooky.vn/posproduct/g0/17280/s400x400/5048d46e-2b7e-430d-a750-6c99929f76cd.jpeg"
                    alt=""
                  />
                </div>
                <div className="name">
                  <p>Set cơm việt buổi trưa</p>
                </div>
                <div className="price">
                  <span className="t1 text">300.000đ</span>
                  <span className="t2 text">120.000đ</span>
                </div>
                <div className="sellable">
                  <h4>Đã bán :</h4>
                  <b>465K</b>
                </div>
                <div className="description">
                  <div className="lw">
                    <img
                      src="https://afamilycdn.com/150157425591193600/2021/10/5/frame-11-16334083966771950318703.png"
                      alt=""
                    />
                  </div>
                  <div className="addressLength">
                    <i className="fa-size fa-solid fa-location-dot" />
                    <h4>4.2km</h4>
                  </div>
                </div>
                <div className="btn">
                  <button type="button">
                    <i className="fa-solid fa-basket-shopping fa-size" />
                    Chọn mua
                  </button>
                </div>
              </li>
              <li className="product__wp___item">
                <div className="point">
                  <span>9.4</span>
                </div>
                <div className="image">
                  <img
                    src="https://image.cooky.vn/posproduct/g0/17280/s400x400/5048d46e-2b7e-430d-a750-6c99929f76cd.jpeg"
                    alt=""
                  />
                </div>
                <div className="name">
                  <p>Set cơm việt buổi trưa</p>
                </div>
                <div className="price">
                  <span className="t1 text">300.000đ</span>
                  <span className="t2 text">120.000đ</span>
                </div>
                <div className="sellable">
                  <h4>Đã bán :</h4>
                  <b>465K</b>
                </div>
                <div className="description">
                  <div className="lw">
                    <img
                      src="https://afamilycdn.com/150157425591193600/2021/10/5/frame-11-16334083966771950318703.png"
                      alt=""
                    />
                  </div>
                  <div className="addressLength">
                    <i className="fa-size fa-solid fa-location-dot" />
                    <h4>4.2km</h4>
                  </div>
                </div>
                <div className="btn">
                  <button type="button">
                    <i className="fa-solid fa-basket-shopping fa-size" />
                    Chọn mua
                  </button>
                </div>
              </li>
              <li className="product__wp___item">
                <div className="point">
                  <span>9.4</span>
                </div>
                <div className="image">
                  <img
                    src="https://image.cooky.vn/posproduct/g0/17280/s400x400/5048d46e-2b7e-430d-a750-6c99929f76cd.jpeg"
                    alt=""
                  />
                </div>
                <div className="name">
                  <p>Set cơm việt buổi trưa</p>
                </div>
                <div className="price">
                  <span className="t1 text">300.000đ</span>
                  <span className="t2 text">120.000đ</span>
                </div>
                <div className="sellable">
                  <h4>Đã bán :</h4>
                  <b>465K</b>
                </div>
                <div className="description">
                  <div className="lw">
                    <img
                      src="https://afamilycdn.com/150157425591193600/2021/10/5/frame-11-16334083966771950318703.png"
                      alt=""
                    />
                  </div>
                  <div className="addressLength">
                    <i className="fa-size fa-solid fa-location-dot" />
                    <h4>4.2km</h4>
                  </div>
                </div>
                <div className="btn">
                  <button type="button">
                    <i className="fa-solid fa-basket-shopping fa-size" />
                    Chọn mua
                  </button>
                </div>
              </li>
              <li className="product__wp___item">
                <div className="point">
                  <span>9.4</span>
                </div>
                <div className="image">
                  <img
                    src="https://image.cooky.vn/posproduct/g0/17280/s400x400/5048d46e-2b7e-430d-a750-6c99929f76cd.jpeg"
                    alt=""
                  />
                </div>
                <div className="name">
                  <p>Set cơm việt buổi trưa</p>
                </div>
                <div className="price">
                  <span className="t1 text">300.000đ</span>
                  <span className="t2 text">120.000đ</span>
                </div>
                <div className="sellable">
                  <h4>Đã bán :</h4>
                  <b>465K</b>
                </div>
                <div className="description">
                  <div className="lw">
                    <img
                      src="https://afamilycdn.com/150157425591193600/2021/10/5/frame-11-16334083966771950318703.png"
                      alt=""
                    />
                  </div>
                  <div className="addressLength">
                    <i className="fa-size fa-solid fa-location-dot" />
                    <h4>4.2km</h4>
                  </div>
                </div>
                <div className="btn">
                  <button type="button">
                    <i className="fa-solid fa-basket-shopping fa-size" />
                    Chọn mua
                  </button>
                </div>
              </li>
              <li className="product__wp___item">
                <div className="point">
                  <span>9.4</span>
                </div>
                <div className="image">
                  <img
                    src="https://image.cooky.vn/posproduct/g0/17280/s400x400/5048d46e-2b7e-430d-a750-6c99929f76cd.jpeg"
                    alt=""
                  />
                </div>
                <div className="name">
                  <p>Set cơm việt buổi trưa</p>
                </div>
                <div className="price">
                  <span className="t1 text">300.000đ</span>
                  <span className="t2 text">120.000đ</span>
                </div>
                <div className="sellable">
                  <h4>Đã bán :</h4>
                  <b>465K</b>
                </div>
                <div className="description">
                  <div className="lw">
                    <img
                      src="https://afamilycdn.com/150157425591193600/2021/10/5/frame-11-16334083966771950318703.png"
                      alt=""
                    />
                  </div>
                  <div className="addressLength">
                    <i className="fa-size fa-solid fa-location-dot" />
                    <h4>4.2km</h4>
                  </div>
                </div>
                <div className="btn">
                  <button type="button">
                    <i className="fa-solid fa-basket-shopping fa-size" />
                    Chọn mua
                  </button>
                </div>
              </li>
            </div>
          </div>
        </div>
        <div className="productAbout">
          <div className="container">
            <div className="productAbout__opw">
              <div className="title">
                <h4>Có thể bạn yêu thích</h4>
              </div>
            </div>
            <div className="productAbout__product">
              <div className="productAbout__product___overScroll">
                <li className="product__wp___item">
                  <div className="point">
                    <span>9.4</span>
                  </div>
                  <div className="image">
                    <img
                      src="https://image.cooky.vn/posproduct/g0/17280/s400x400/5048d46e-2b7e-430d-a750-6c99929f76cd.jpeg"
                      alt=""
                    />
                  </div>
                  <div className="name">
                    <p>Set cơm việt buổi trưa</p>
                  </div>
                  <div className="price">
                    <span className="t1 text">300.000đ</span>
                    <span className="t2 text">120.000đ</span>
                  </div>
                  <div className="sellable">
                    <h4>Đã bán :</h4>
                    <b>465K</b>
                  </div>
                  <div className="description">
                    <div className="lw">
                      <img
                        src="https://afamilycdn.com/150157425591193600/2021/10/5/frame-11-16334083966771950318703.png"
                        alt=""
                      />
                    </div>
                    <div className="addressLength">
                      <i className="fa-size fa-solid fa-location-dot" />
                      <h4>4.2km</h4>
                    </div>
                  </div>
                  <div className="btn">
                    <button type="button">
                      <i className="fa-solid fa-basket-shopping fa-size" />
                      Chọn mua
                    </button>
                  </div>
                </li>
                <li className="product__wp___item">
                  <div className="point">
                    <span>9.4</span>
                  </div>
                  <div className="image">
                    <img
                      src="https://image.cooky.vn/posproduct/g0/17280/s400x400/5048d46e-2b7e-430d-a750-6c99929f76cd.jpeg"
                      alt=""
                    />
                  </div>
                  <div className="name">
                    <p>Set cơm việt buổi trưa</p>
                  </div>
                  <div className="price">
                    <span className="t1 text">300.000đ</span>
                    <span className="t2 text">120.000đ</span>
                  </div>
                  <div className="sellable">
                    <h4>Đã bán :</h4>
                    <b>465K</b>
                  </div>
                  <div className="description">
                    <div className="lw">
                      <img
                        src="https://afamilycdn.com/150157425591193600/2021/10/5/frame-11-16334083966771950318703.png"
                        alt=""
                      />
                    </div>
                    <div className="addressLength">
                      <i className="fa-size fa-solid fa-location-dot" />
                      <h4>4.2km</h4>
                    </div>
                  </div>
                  <div className="btn">
                    <button type="button">
                      <i className="fa-solid fa-basket-shopping fa-size" />
                      Chọn mua
                    </button>
                  </div>
                </li>
                <li className="product__wp___item">
                  <div className="point">
                    <span>9.4</span>
                  </div>
                  <div className="image">
                    <img
                      src="https://image.cooky.vn/posproduct/g0/17280/s400x400/5048d46e-2b7e-430d-a750-6c99929f76cd.jpeg"
                      alt=""
                    />
                  </div>
                  <div className="name">
                    <p>Set cơm việt buổi trưa</p>
                  </div>
                  <div className="price">
                    <span className="t1 text">300.000đ</span>
                    <span className="t2 text">120.000đ</span>
                  </div>
                  <div className="sellable">
                    <h4>Đã bán :</h4>
                    <b>465K</b>
                  </div>
                  <div className="description">
                    <div className="lw">
                      <img
                        src="https://afamilycdn.com/150157425591193600/2021/10/5/frame-11-16334083966771950318703.png"
                        alt=""
                      />
                    </div>
                    <div className="addressLength">
                      <i className="fa-size fa-solid fa-location-dot" />
                      <h4>4.2km</h4>
                    </div>
                  </div>
                  <div className="btn">
                    <button type="button">
                      <i className="fa-solid fa-basket-shopping fa-size" />
                      Chọn mua
                    </button>
                  </div>
                </li>
                <li className="product__wp___item">
                  <div className="point">
                    <span>9.4</span>
                  </div>
                  <div className="image">
                    <img
                      src="https://image.cooky.vn/posproduct/g0/17280/s400x400/5048d46e-2b7e-430d-a750-6c99929f76cd.jpeg"
                      alt=""
                    />
                  </div>
                  <div className="name">
                    <p>Set cơm việt buổi trưa</p>
                  </div>
                  <div className="price">
                    <span className="t1 text">300.000đ</span>
                    <span className="t2 text">120.000đ</span>
                  </div>
                  <div className="sellable">
                    <h4>Đã bán :</h4>
                    <b>465K</b>
                  </div>
                  <div className="description">
                    <div className="lw">
                      <img
                        src="https://afamilycdn.com/150157425591193600/2021/10/5/frame-11-16334083966771950318703.png"
                        alt=""
                      />
                    </div>
                    <div className="addressLength">
                      <i className="fa-size fa-solid fa-location-dot" />
                      <h4>4.2km</h4>
                    </div>
                  </div>
                  <div className="btn">
                    <button type="button">
                      <i className="fa-solid fa-basket-shopping fa-size" />
                      Chọn mua
                    </button>
                  </div>
                </li>
                <li className="product__wp___item">
                  <div className="point">
                    <span>9.4</span>
                  </div>
                  <div className="image">
                    <img
                      src="https://image.cooky.vn/posproduct/g0/17280/s400x400/5048d46e-2b7e-430d-a750-6c99929f76cd.jpeg"
                      alt=""
                    />
                  </div>
                  <div className="name">
                    <p>Set cơm việt buổi trưa</p>
                  </div>
                  <div className="price">
                    <span className="t1 text">300.000đ</span>
                    <span className="t2 text">120.000đ</span>
                  </div>
                  <div className="sellable">
                    <h4>Đã bán :</h4>
                    <b>465K</b>
                  </div>
                  <div className="description">
                    <div className="lw">
                      <img
                        src="https://afamilycdn.com/150157425591193600/2021/10/5/frame-11-16334083966771950318703.png"
                        alt=""
                      />
                    </div>
                    <div className="addressLength">
                      <i className="fa-size fa-solid fa-location-dot" />
                      <h4>4.2km</h4>
                    </div>
                  </div>
                  <div className="btn">
                    <button type="button">
                      <i className="fa-solid fa-basket-shopping fa-size" />
                      Chọn mua
                    </button>
                  </div>
                </li>
                <li className="product__wp___item">
                  <div className="point">
                    <span>9.4</span>
                  </div>
                  <div className="image">
                    <img
                      src="https://image.cooky.vn/posproduct/g0/17280/s400x400/5048d46e-2b7e-430d-a750-6c99929f76cd.jpeg"
                      alt=""
                    />
                  </div>
                  <div className="name">
                    <p>Set cơm việt buổi trưa</p>
                  </div>
                  <div className="price">
                    <span className="t1 text">300.000đ</span>
                    <span className="t2 text">120.000đ</span>
                  </div>
                  <div className="sellable">
                    <h4>Đã bán :</h4>
                    <b>465K</b>
                  </div>
                  <div className="description">
                    <div className="lw">
                      <img
                        src="https://afamilycdn.com/150157425591193600/2021/10/5/frame-11-16334083966771950318703.png"
                        alt=""
                      />
                    </div>
                    <div className="addressLength">
                      <i className="fa-size fa-solid fa-location-dot" />
                      <h4>4.2km</h4>
                    </div>
                  </div>
                  <div className="btn">
                    <button type="button">
                      <i className="fa-solid fa-basket-shopping fa-size" />
                      Chọn mua
                    </button>
                  </div>
                </li>
                <li className="product__wp___item">
                  <div className="point">
                    <span>9.4</span>
                  </div>
                  <div className="image">
                    <img
                      src="https://image.cooky.vn/posproduct/g0/17280/s400x400/5048d46e-2b7e-430d-a750-6c99929f76cd.jpeg"
                      alt=""
                    />
                  </div>
                  <div className="name">
                    <p>Set cơm việt buổi trưa</p>
                  </div>
                  <div className="price">
                    <span className="t1 text">300.000đ</span>
                    <span className="t2 text">120.000đ</span>
                  </div>
                  <div className="sellable">
                    <h4>Đã bán :</h4>
                    <b>465K</b>
                  </div>
                  <div className="description">
                    <div className="lw">
                      <img
                        src="https://afamilycdn.com/150157425591193600/2021/10/5/frame-11-16334083966771950318703.png"
                        alt=""
                      />
                    </div>
                    <div className="addressLength">
                      <i className="fa-size fa-solid fa-location-dot" />
                      <h4>4.2km</h4>
                    </div>
                  </div>
                  <div className="btn">
                    <button type="button">
                      <i className="fa-solid fa-basket-shopping fa-size" />
                      Chọn mua
                    </button>
                  </div>
                </li>
                <li className="product__wp___item">
                  <div className="point">
                    <span>9.4</span>
                  </div>
                  <div className="image">
                    <img
                      src="https://image.cooky.vn/posproduct/g0/17280/s400x400/5048d46e-2b7e-430d-a750-6c99929f76cd.jpeg"
                      alt=""
                    />
                  </div>
                  <div className="name">
                    <p>Set cơm việt buổi trưa</p>
                  </div>
                  <div className="price">
                    <span className="t1 text">300.000đ</span>
                    <span className="t2 text">120.000đ</span>
                  </div>
                  <div className="sellable">
                    <h4>Đã bán :</h4>
                    <b>465K</b>
                  </div>
                  <div className="description">
                    <div className="lw">
                      <img
                        src="https://afamilycdn.com/150157425591193600/2021/10/5/frame-11-16334083966771950318703.png"
                        alt=""
                      />
                    </div>
                    <div className="addressLength">
                      <i className="fa-size fa-solid fa-location-dot" />
                      <h4>4.2km</h4>
                    </div>
                  </div>
                  <div className="btn">
                    <button type="button">
                      <i className="fa-solid fa-basket-shopping fa-size" />
                      Chọn mua
                    </button>
                  </div>
                </li>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ProductDetail;
