import User from "@/components/User/User";
import UserAddress from "@/components/User/UserAddress/UserAddress";
import Head from "next/head";

const UserAddressPage = () => {
  return (
    <>
      <Head>
        <title>Thông tin địa chỉ thanh toán </title>
      </Head>
      <User UserChildrenProps={{ contentUser: <UserAddress /> }} />
    </>
  );
};
export default UserAddressPage;
