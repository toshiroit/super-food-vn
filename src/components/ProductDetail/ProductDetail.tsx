import { useEffect, useState } from "react";
import ProductDetailComment from "./ProductDetailComment";
import ProductDetailContent from "./ProductDetailContent";
import ProductDetailShow from "./ProductDetailShow";
import { useRouter } from "next/router";
import { useAppDispatch, useAppSelector } from "@/redux/hooks/hooks";
import { getAllProductByShop, getProductByCodeOrName } from "@/redux/features/product/product-thunks";
import { selectProductSliceDataProductDetail, selectProductSliceDataProductDetailShop, selectProductSliceLoading } from "@/redux/features/product/product-selects";
import ProductItem from "../Product/ProductItem";
const ProductDetail = () => {
  const data = useAppSelector(selectProductSliceDataProductDetail)
  const dataProductByShop = useAppSelector(selectProductSliceDataProductDetailShop)
  const loading = useAppSelector(selectProductSliceLoading)
  const dispatch = useAppDispatch()
  const router = useRouter()
  useEffect(() => {
    if (router.query.name) {
      const nameRouter = router.query.name as string;
      const arrNameRouter = nameRouter.split(".")
      dispatch(getProductByCodeOrName({ code: arrNameRouter[1], name: arrNameRouter[0] }))
    }

  }, [router.query, dispatch])

  useEffect(() => {
    if (data) {
      dispatch(getAllProductByShop({ limit: '6', code_shop: data.code_shop }))
    }
  }, [data, dispatch])
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
              className={`detail__content___product ${!loading && data ? "" : "productDetailLoading"
                }`}
            >
              <ProductDetailShow />
            </div>
            <div className="detail__content___wop">
              <ProductDetailContent />
            </div>
            <div className="detail__content___comment">
              <ProductDetailComment />
            </div>
          </div>
        </div>
      </div>
      <div className="productAbout">
        <div className="container">
          <div className="productAbout__opw">
            <div className="title">
              <h4>Các món ngon trong cửa hàng này </h4>
            </div>
          </div>
          <div className="productAbout__product">
            <div className="productAbout__product___overScroll">
              {
                dataProductByShop.data && dataProductByShop.data.data.map((item: any) => {
                  return (
                    <ProductItem productItemProps={item} key={item.code_product} />

                  )
                })
              }
              {/*
                {products.map((item, index) => {
                return <ProductItem productItemProps={item} key={index} />;
              })}
              */}
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
                {
                  /*
  * {products.map((item, index) => {
                    return <ProductItem productItemProps={item} key={index} />;
                  })}*/
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ProductDetail;
