import { arrPagination } from "@/lib/pagination";
import { selectProductSliceDataProductDetailShop } from "@/redux/features/product/product-selects";
import { getAllProductByShop } from "@/redux/features/product/product-thunks";
import {
  selectShopSliceDataFilterProductShop,
  selectShopSliceDataProductByCodeShop,
} from "@/redux/features/shop/shop-selects";
import { getDataProductShopByCodeShop } from "@/redux/features/shop/shop-thunks";
import { useAppDispatch, useAppSelector } from "@/redux/hooks/hooks";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import LoadingSpinner from "../Loading/LoadingSpinner";
import ProductItem from "../Product/ProductItem";

const ShopAllProduct = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState<number>(1);
  const dataAllProductShop = useAppSelector(
    selectShopSliceDataProductByCodeShop
  );
  const dataFilterProductShop = useAppSelector(
    selectShopSliceDataFilterProductShop
  );
  useEffect(() => {
    const query_code = (router.query.code as string) || "";
    if (query_code) {
      const code_shop = query_code.split(".");
      window.scrollTo(0, 0);
      dispatch(
        getDataProductShopByCodeShop({
          code_shop: code_shop[0],
          page: currentPage,
          q: dataFilterProductShop.text_search || "",
        })
      );
    }
    //eslint-disable-next-line
  }, [currentPage, dataFilterProductShop]);
  return (
    <div className="allProduct">
      <div className="allProduct__main">
        <div className="allProduct__main___left">
          <div className="title">
            <h4>Danh mục sản phẩm</h4>
          </div>
          <div className="listCategory">
            <ul className="list">
              {dataAllProductShop.category_all &&
                dataAllProductShop.category_all.map((item: any) => {
                  return (
                    <li key={item.code_product_type} className="list__item">
                      <span>{item.name_product_type}</span>
                    </li>
                  );
                })}
            </ul>
          </div>
        </div>
        <div className="allProduct__main___right">
          <div className="product">
            <ul className="product__wp">
              {dataAllProductShop.loading ? (
                <LoadingSpinner css={{ textAlign: "center" }} />
              ) : (
                dataAllProductShop.data &&
                dataAllProductShop.data?.data.map((item: any) => {
                  return (
                    <ProductItem
                      productItemProps={item}
                      key={item.code_product}
                    />
                  );
                })
              )}
            </ul>
          </div>
          {arrPagination(
            dataAllProductShop.data && dataAllProductShop.data.totalPages,
            currentPage
          ).length > 1 ? (
            <div className="pagination">
              <ul className="pagination__main">
                <li className="pagination__main___item arrow">
                  <i className="fa-solid fa-angle-left fa-size" />
                </li>

                {arrPagination(
                  dataAllProductShop.data && dataAllProductShop.data.totalPages,
                  currentPage
                ).map((item) => {
                  return (
                    <li
                      onClick={() => setCurrentPage(item)}
                      key={item}
                      className={`pagination__main___item ${
                        item === currentPage ? "active" : ""
                      }`}
                    >
                      {item}
                    </li>
                  );
                })}
                <li className="pagination__main___item arrow">
                  <i className="fa-solid fa-angle-right fa-size" />
                </li>
              </ul>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};
export default ShopAllProduct;
