import { useAppDispatch, useAppSelector } from "@/redux/hooks/hooks";
import { ShowProductListProps } from "@/types/product/product";
import ProductItem from "./ProductItem";

const ProductList = ({ item, dataProductAll }: ShowProductListProps) => {
  return (
    <>

      <>
        <div className="product">
          <div className="product__wp">
            {dataProductAll &&
              dataProductAll.map((item: any, index: any) => {
                return <ProductItem productItemProps={item} key={index} />;
              })}
          </div>
          {/*
                    {dataProductAll && dataProductAll.quality > 10 ? (
                <div className="showAll">
                  <span>
                    XEM TẤT CẢ <i className="fa-solid fa-chevron-right"></i>
                  </span>
                </div>
              ) : (
                ""
              )}
                */}
        </div>
      </>

    </>
  );
};
export default ProductList;
