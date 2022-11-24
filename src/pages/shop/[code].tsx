import Shop from "@/components/Shop/Shop";
import ShopAllProduct from "@/components/Shop/ShopAllProduct";
import ShopCategory from "@/components/Shop/ShopCategory";
import ShopHeader from "@/components/Shop/ShopHeader";
import ShopInfo from "@/components/Shop/ShopInfo";
import Head from "next/head";
import { useRouter } from "next/router";

const ShopPage = () => {
  const routerTab = useRouter();
  return (
    <>
      <Head>
        <title>Thông tin shop Đậu Nam PC </title>
      </Head>
      <Shop>
        {routerTab.query.tow === "shop" ? (
          <ShopInfo />
        ) : routerTab.query.tow === "product" ? (
          <ShopAllProduct />
        ) : routerTab.query.tow === "category" ? (
          <ShopCategory />
        ) : routerTab.query.tow === "info" ? (
          <> </>
        ) : (
          <ShopInfo />
        )}
      </Shop>
    </>
  );
};
export default ShopPage;
