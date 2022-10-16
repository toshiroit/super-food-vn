import { selectProductSliceDataAll, selectProductSliceLoading } from "@/redux/features/product/product-selects";
import { getProductAll } from "@/redux/features/product/product-thunks";
import { useAppDispatch, useAppSelector } from "@/redux/hooks/hooks";
import { ShowProductListProps } from "@/types/product/product";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import LoadingSpinner from "../Loading/LoadingSpinner";
import ProductItem from "./ProductItem";

const ProductList = ({ item }: ShowProductListProps) => {
  const loadingGetAll = useAppSelector(selectProductSliceLoading)
  const dataProductAll = useAppSelector(selectProductSliceDataAll)
  const dispatch = useAppDispatch()
  const router = useRouter()

  useEffect(() => {
    // eslint-disable-next-line
    if (item.typeShow === 'SHOP-NEW') {
      let isStop = true
      async function getProductAllFc() {
        await dispatch(getProductAll())
      }
      if (isStop) {
        console.log("VO")
        getProductAllFc()
      }
      return () => {
        isStop = false
      }
    }
    // eslint-disable-next-line
  }, [])
  return (
    <>
      {
        loadingGetAll ?
          <LoadingSpinner
            css={{
              margin: 'auto',
              padding: '150px',
              textAlign: "center",
              width: '100%'
            }}
          /> : <>
            <div className="product">
              <div className="product__wp">
                {dataProductAll &&
                  dataProductAll.data.map((item: any, index: any) => {
                    return <ProductItem productItemProps={item} key={index} />;
                  })}
              </div>
              {dataProductAll && dataProductAll.quality > 10 ? (
                <div className="showAll">
                  <span>
                    XEM TẤT CẢ <i className="fa-solid fa-chevron-right"></i>
                  </span>
                </div>
              ) : (
                ""
              )}
            </div>
          </>
      }

    </>
  );
};
export default ProductList;
