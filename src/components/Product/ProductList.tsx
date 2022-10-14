import { selectProductSliceDataAll, selectProductSliceLoading } from "@/redux/features/product/product-selects";
import { getProductAll } from "@/redux/features/product/product-thunks";
import { useAppDispatch, useAppSelector } from "@/redux/hooks/hooks";
import {
  ProductItem as ProductItemType,
  ProductListProps,
} from "@/types/product/product";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import LoadingSpinner from "../Loading/LoadingSpinner";
import ProductItem from "./ProductItem";

const ProductList: NextPage<ProductListProps> = () => {
  const loadingGetAll = useAppSelector(selectProductSliceLoading)
  const dataProductAll = useAppSelector(selectProductSliceDataAll)
  const dispatch = useAppDispatch()
  const router = useRouter()

  useEffect(() => {
    if (!dataProductAll) {
      dispatch(getProductAll())
    }
  }, [router.pathname, dispatch])
  const [isShowAll] = useState(false);
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
