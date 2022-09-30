import { ProductListProps } from "@/types/product/product";
import { NextPage } from "next";
import { useState } from "react";
import ProductItem from "./ProductItem";

const ProductList: NextPage<ProductListProps> = ({ productList }) => {
  const [products] = useState<[]>();
  const [isShowAll] = useState(false);
  return (
    <div className="product">
      <div className="product__wp">
        {products &&
          products.map((item, index) => {
            return <ProductItem productItemProps={item} key={index} />;
          })}
      </div>
      {isShowAll ? (
        <div className="showAll">
          <span>
            XEM TẤT CẢ <i className="fa-solid fa-chevron-right"></i>
          </span>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
export default ProductList;
