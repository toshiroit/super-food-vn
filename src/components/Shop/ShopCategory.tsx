import { getAllCategoryShop } from "@/redux/features/shop/shop-thunks";
import { useAppDispatch, useAppSelector } from "@/redux/hooks/hooks";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { selectShopSliceDataCategoryShop } from "@/redux/features/shop/shop-selects";

const ShopCategory = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const dataCategoryShop = useAppSelector(selectShopSliceDataCategoryShop);
  useEffect(() => {
    const query_code = (router.query.code as string) || "";
    if (query_code) {
      const code_shop = query_code.split(".");
      dispatch(getAllCategoryShop({ code_shop: code_shop[0] || "" }));
    }
    //eslint-disable-next-line
  }, []);
  console.log(dataCategoryShop.data);
  return (
    <div className="shopCategory">
      <div className="shopCategory__main">
        <ul className="categoryMain">
          {dataCategoryShop.data &&
            dataCategoryShop.data?.map((item: any) => {
              return (
                <li key={item.category_code} className="categoryMain__item">
                  <picture>
                    <img src={item.category_image} alt="" />
                  </picture>
                  <div className="name">
                    <span>{item.category_name}</span>
                  </div>
                </li>
              );
            })}
        </ul>
      </div>
    </div>
  );
};
export default ShopCategory;
