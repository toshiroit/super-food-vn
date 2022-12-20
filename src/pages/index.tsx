import BannerGift from "@/components/Banner/BannerGift";
import ProductList from "@/components/Product/ProductList";
import { firebaseConfig } from "@/config/firebase";
import {
  selectProductSliceDataAll,
  selectProductSliceDataProductPayTop,
  selectProductSliceDataProductProductHot,
  selectProductSliceDataProductProductNew,
  selectProductSliceDataProductShopNew,
} from "@/redux/features/product/product-selects";
import {
  getAllProductByNewShop,
  getAllProductByPayTop,
  getAllProductByTop,
  getProductAll,
} from "@/redux/features/product/product-thunks";
import { useAppDispatch, useAppSelector } from "@/redux/hooks/hooks";
import { initializeApp } from "firebase/app";
import type { NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";

const Home: NextPage = () => {
  const dispatch = useAppDispatch();
  const [valueGift, setValueGift] = useState<number>(0);
  const [is_w, setIs_w] = useState<"-" | "">("");
  const dataProductAll = useAppSelector(selectProductSliceDataAll);
  const dataProductShopNew = useAppSelector(
    selectProductSliceDataProductShopNew
  );
  const dataProductPayTop = useAppSelector(selectProductSliceDataProductPayTop);
  const dataProductTop = useAppSelector(
    selectProductSliceDataProductProductHot
  );
  const dataProductNew = useAppSelector(
    selectProductSliceDataProductProductNew
  );
  useEffect(() => {
    // eslint-disable-next-line
    let isStop = true;
    async function getProductAllFc() {
      await dispatch(getProductAll({ limit: 6, type: "new-product" }));
      await dispatch(getAllProductByTop({ limit: "6" }));
      await dispatch(getAllProductByPayTop({ limit: "6" }));
      await dispatch(getAllProductByNewShop({ limit: "6" }));
    }
    if (isStop) {
      getProductAllFc();
    }
    return () => {
      isStop = false;
    };
    // eslint-disable-next-line
  }, []);
  useEffect(() => {}, []);
  const onPreGift = () => {
    let temp = valueGift;
    temp += 287;
    setIs_w("");
    setValueGift(temp);
  };
  const onNextGift = () => {
    let temp = valueGift;
    temp += 287;
    setValueGift(temp);
    setIs_w("-");
  };
  return (
    <div className={""}>
      <Head>
        <title>
          🔥🔥 Đồ ăn ngon , mức giá hấp dẫn chỉ có tại Super Food VN 🔥🔥
        </title>
        <meta
          name="description"
          content="Mua hàng nhanh chóng tại Super Food VN "
        />
      </Head>
      <div className="bodyIdx">
        <div className="container">
          {/* <Banner /> */}
          <BannerGift />
          <div className="gift">
            <div className="gift__content">
              <div className="gift__content___title">
                <div onClick={onPreGift} className="btn">
                  <div className="btn btnLeft">
                    <i className="fa-solid fa-angle-left fa-size fa-w-left" />
                  </div>
                  <div onClick={onNextGift} className="btn btnRight">
                    <i className="fa-solid fa-angle-right fa-size fa-w-right" />
                  </div>
                </div>
              </div>
              <ul
                className="box-main gift__content___main"
                style={{ transform: `translateX(-${valueGift}${is_w})` }}
              >
                <li className="box-gift gift__content___main____item">
                  <img
                    src="https://salt.tikicdn.com/cache/w280/ts/banner/27/2e/2e/a7f80a2a24229e382a9a5602353c48c2.png.webp"
                    alt=""
                  />
                </li>
                <li className="box-gift gift__content___main____item">
                  <img
                    src="https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/clans/11028929/f8b8fa63883a2949cfd83466e43749c702ee46ee.png"
                    alt=""
                  />
                </li>
                <li className="box-gift gift__content___main____item">
                  <img
                    src="https://salt.tikicdn.com/cache/w280/ts/banner/27/2e/2e/a7f80a2a24229e382a9a5602353c48c2.png.webp"
                    alt=""
                  />
                </li>
                <li className="box-gift gift__content___main____item">
                  <img
                    src="https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/clans/11028929/f8b8fa63883a2949cfd83466e43749c702ee46ee.png"
                    alt=""
                  />
                </li>
                <li className="box-gift gift__content___main____item">
                  <img
                    src="https://salt.tikicdn.com/cache/w280/ts/banner/27/2e/2e/a7f80a2a24229e382a9a5602353c48c2.png.webp"
                    alt=""
                  />
                </li>
                <li className="box-gift gift__content___main____item">
                  <img
                    src="https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/clans/11028929/f8b8fa63883a2949cfd83466e43749c702ee46ee.png"
                    alt=""
                  />
                </li>
                <li className="box-gift gift__content___main____item">
                  <img
                    src="https://salt.tikicdn.com/cache/w280/ts/banner/27/2e/2e/a7f80a2a24229e382a9a5602353c48c2.png.webp"
                    alt=""
                  />
                </li>
                <li className="box-gift gift__content___main____item">
                  <img
                    src="https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/clans/11028929/f8b8fa63883a2949cfd83466e43749c702ee46ee.png"
                    alt=""
                  />
                </li>
              </ul>
            </div>
          </div>
          <div className="main">
            <div className="main__wp1">
              <div className="main__wp1___title">
                <h4>
                  <picture>
                    <img src={"/images/new-items.png"} alt="" />
                  </picture>
                  Khám phá quản mới
                </h4>
                <div className="alw">
                  <i className="fa-size fa-solid fa-paperclip" />
                </div>
              </div>
              {dataProductNew.loading ? (
                <h1>Dang tai</h1>
              ) : (
                <ProductList
                  item={{ typeShow: "SHOP-NEW" }}
                  dataProductAll={
                    dataProductShopNew.data && dataProductShopNew.data.data
                  }
                />
              )}
            </div>
            <div className="main__wp1">
              <div className="main__wp1___title">
                <h4>
                  <picture>
                    <img src={"/images/new-items.png"} alt="" />
                  </picture>
                  Các món ăn đang HOT trên web
                </h4>
                <div className="alw">
                  <i className="fa-size fa-solid fa-paperclip" />
                </div>
              </div>
              {dataProductTop.loading ? (
                <h1>Dang tai </h1>
              ) : (
                <ProductList
                  item={{ typeShow: "HOT" }}
                  dataProductAll={
                    dataProductTop.data && dataProductTop.data.data
                  }
                />
              )}
            </div>
            <div className="main__wp1">
              <div className="main__wp1___title">
                <h4>
                  <picture>
                    <img src={"/images/new-items.png"} alt="" />
                  </picture>
                  Các món đang bán chạy
                </h4>
                <div className="alw">
                  <i className="fa-size fa-solid fa-paperclip" />
                </div>
              </div>
              {dataProductPayTop.loading ? (
                <h1>Dang tai </h1>
              ) : (
                <ProductList
                  item={{ typeShow: "HOT" }}
                  dataProductAll={
                    dataProductPayTop.data && dataProductPayTop.data.data
                  }
                />
              )}
            </div>
            <div className="main__wp1">
              <div className="main__wp1___title">
                <h4>
                  <picture>
                    <img src={"/images/new-items.png"} alt="" />
                  </picture>
                  Sản phẩm tốt
                </h4>
                <div className="alw">
                  <i className="fa-size fa-solid fa-paperclip" />
                </div>
              </div>
              {dataProductPayTop.loading ? (
                <h1>Dang tai </h1>
              ) : (
                <ProductList
                  item={{ typeShow: "HOT" }}
                  dataProductAll={
                    dataProductPayTop.data && dataProductPayTop.data.data
                  }
                />
              )}
              {/*
             <ProductList item={{ typeShow: 'GOOD' }} />
*/}
            </div>
            <div className="main__wp1">
              <div className="trademark">
                <div className="trademark__title">
                  <h3>
                    <i className="fa-brands fa-hotjar fa-size" /> CÁC QUÁN NỔI
                    TIẾNG <i className="fa-brands fa-hotjar fa-size" />
                  </h3>
                </div>
                <div className="trademark__content">
                  <ul className="trademark__content___main">
                    <li className="trademark__content___main____item">
                      <img
                        className="image"
                        src="https://tea-4.lozi.vn/v1/images/resized/the-factory-coffee-RYvweS4oFU7Hhbym-eatery-avatar-1538023981?w=640&type=o"
                        alt=""
                      />
                      <p>The Coffee Factory</p>
                    </li>
                    <li className="trademark__content___main____item">
                      <img
                        className="image"
                        src="https://tea-4.lozi.vn/v1/images/resized/the-factory-coffee-RYvweS4oFU7Hhbym-eatery-avatar-1538023981?w=640&type=o"
                        alt=""
                      />
                      <p>The Coffee Factory</p>
                    </li>
                    <li className="trademark__content___main____item">
                      <img
                        className="image"
                        src="https://tea-4.lozi.vn/v1/images/resized/the-factory-coffee-RYvweS4oFU7Hhbym-eatery-avatar-1538023981?w=640&type=o"
                        alt=""
                      />
                      <p>The Coffee Factory</p>
                    </li>
                    <li className="trademark__content___main____item">
                      <img
                        className="image"
                        src="https://tea-4.lozi.vn/v1/images/resized/the-factory-coffee-RYvweS4oFU7Hhbym-eatery-avatar-1538023981?w=640&type=o"
                        alt=""
                      />
                      <p>The Coffee Factory</p>
                    </li>
                    <li className="trademark__content___main____item">
                      <img
                        className="image"
                        src="https://tea-4.lozi.vn/v1/images/resized/the-factory-coffee-RYvweS4oFU7Hhbym-eatery-avatar-1538023981?w=640&type=o"
                        alt=""
                      />
                      <p>The Coffee Factory</p>
                    </li>
                    <li className="trademark__content___main____item">
                      <img
                        className="image"
                        src="https://tea-4.lozi.vn/v1/images/resized/the-factory-coffee-RYvweS4oFU7Hhbym-eatery-avatar-1538023981?w=640&type=o"
                        alt=""
                      />
                      <p>The Coffee Factory</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* <Trademark /> */}
        </div>
      </div>
    </div>
  );
};
export default Home;
