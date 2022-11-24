import { selectShopSliceDataShopDetail } from "@/redux/features/shop/shop-selects";
import { getDataDetailShopByCodeShop } from "@/redux/features/shop/shop-thunks";
import { useAppDispatch, useAppSelector } from "@/redux/hooks/hooks";
import { useRouter } from "next/router";
import { useEffect } from "react";
import ChatBox from "../ChatBox/ChatBox";
import LoadingSpinner from "../Loading/LoadingSpinner";
import ShopHeader from "./ShopHeader";

const Shop = ({ children }: any) => {
  const dispatch = useAppDispatch()
  const router = useRouter()
  const dataShopDetail = useAppSelector(selectShopSliceDataShopDetail);
  useEffect(() => {
    const query_code = (router.query.code as string) || "";
    if (query_code) {
      const code_shop = query_code.split(".");
      dispatch(getDataDetailShopByCodeShop({ code_shop: code_shop[0] }));
    }
    //eslint-disable-next-line
  }, [router.query, dispatch]);
  return (
    <>
      <div className="shop">
        <div className="container">
          <div className="shop__content___breadcrumb breadcrumb__content">
            <ul className="main">
              <li className="main__item">SuperFood</li>
              <li className="main__item">Tài khoản</li>
              <li className="main__item">Thông tin</li>
            </ul>
          </div>
          <div className="shop__content">
            <div className="shop__content___inner" >
              {console.log(dataShopDetail)}
              {
                dataShopDetail.loading ?
                  <LoadingSpinner css={{ textAlign: 'center', width: '100%' }} />
                  :
                  <div className="shopIf">
                    <ShopHeader />
                    {/**Shop Info */}
                    <>{children}</>
                  </div>
              }
            </div>
          </div>
        </div>
      </div>
      <ChatBox />
    </>
  );
};
export default Shop;
