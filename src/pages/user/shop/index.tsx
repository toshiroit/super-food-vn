import User from "@/components/User/User";
import UserAddress from "@/components/User/UserAddress/UserAddress";
import UserShop from "@/components/User/UserShop/UserShop";
import UserSlider from "@/components/User/UserSlider/UserSlider";
import Head from "next/head";

const ShopPage = () => {
  return (
    <>
      <Head>
        <title>Thông tin tài khoản </title>
      </Head>
      <User
        UserChildrenProps={{
          contentUser: <UserShop />,
        }}
      ></User>
    </>
  );
};
export default ShopPage;
