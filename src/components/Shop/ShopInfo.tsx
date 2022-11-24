import { selectProductSliceDataProductDetailShop } from "@/redux/features/product/product-selects";
import { getAllProductByShop } from "@/redux/features/product/product-thunks";
import { selectShopSliceDataShopDetail } from "@/redux/features/shop/shop-selects";
import { useAppDispatch, useAppSelector } from "@/redux/hooks/hooks";
import { useRouter } from "next/router";
import { useEffect } from "react";
import ProductItem from "../Product/ProductItem";

const ShopInfo = () => {
  const dispatch = useAppDispatch()
  const router = useRouter()
  const dataShopDetail = useAppSelector(selectShopSliceDataShopDetail);
  const dataProductShop = useAppSelector(
    selectProductSliceDataProductDetailShop
  );
  useEffect(() => {
    const query_code = (router.query.code as string) || "";
    if (query_code) {
      const code_shop = query_code.split('.')
      dispatch(getAllProductByShop({ code_shop: code_shop[0], limit: '6' }))
    }
  }, [])
  return (
    <div className="Idx">
      <div className="backgroundShop">
        <div className="image">
          <picture>
            <img
              src={dataShopDetail.data && dataShopDetail.data.background_shop}
              alt=""
            />
          </picture>
        </div>
      </div>
      <div className="productSlider">
        <div className="productSlider__title">
          <h4>Sản phẩm đang Hot tại cửa hàng</h4>
          <div className="Arrow">
            <div id="sliderArrowLeft" className="left Arrow__item">
              <i className="fa-solid fa-angle-left" />
            </div>
            <div id="sliderArrowRight" className="right Arrow__item">
              <i className="fa-solid fa-angle-right" />
            </div>
          </div>
        </div>
        <ul id="productSliderShop" className="product__wp">
          {dataProductShop.data &&
            dataProductShop.data.data &&
            dataProductShop.data.data.map((item: any) => {
              return (
                <ProductItem productItemProps={item} key={item.code_product} />
              );
            })}
        </ul>
      </div>
      <div className="imageBannerShop">
        <div className="image">
          <img src={""} alt="" />
        </div>
      </div>
    </div>
  );
};
export default ShopInfo;
