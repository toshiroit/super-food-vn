import BannerGift from "@/components/Banner/BannerGift";
import ProductList from "@/components/Product/ProductList";
import { selectProductSliceDataAll, selectProductSliceDataProductProductNew, selectProductSliceDataProductShopNew } from "@/redux/features/product/product-selects";
import { getProductAll } from "@/redux/features/product/product-thunks";
import { useAppDispatch, useAppSelector } from "@/redux/hooks/hooks";
import type { NextPage } from "next";
import Head from "next/head";
import { useEffect } from "react";

const Home: NextPage = () => {
  const dispatch = useAppDispatch()
  const dataProductAll = useAppSelector(selectProductSliceDataAll)
  const dataProductShopNew = useAppSelector(selectProductSliceDataProductShopNew)
  const dataProductNew = useAppSelector(selectProductSliceDataProductProductNew)
  useEffect(() => {
    // eslint-disable-next-line
    let isStop = true
    async function getProductAllFc() {
      await dispatch(getProductAll({ limit: 6, type: 'new-product' }))
    }
    if (isStop) {
      getProductAllFc()
    }
    return () => {
      isStop = false
    }
    // eslint-disable-next-line
  }, [])
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
              <ProductList item={{ typeShow: 'SHOP-NEW' }} dataProductAll={dataProductNew.data} />
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
              <ProductList item={{ typeShow: 'HOT' }} dataProductAll={dataProductNew.data} />
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
              {/*
             <ProductList item={{ typeShow: 'GOOD' }} />
*/}

            </div>
          </div>
          {/* <Trademark /> */}
        </div>
      </div>
    </div>
  );
};
export default Home;
