import User from "@/components/User/User";
import UserPayDetail from "@/components/User/UserPay/UserPayDetail";
import Head from "next/head";

const UserPayDetailPage = () => {
  return (
    <>
      <Head>
        <title>Thông tin thanh toán </title>
      </Head>
      <User
        UserChildrenProps={{
          contentUser: <UserPayDetail />,
        }}
      />
    </>
  );
};
export default UserPayDetailPage;
