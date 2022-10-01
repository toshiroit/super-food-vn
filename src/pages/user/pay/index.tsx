import User from "@/components/User/User";
import UserPay from "@/components/User/UserPay/UserPay";
import Head from "next/head";

const UserPayPage = () => {
  return (
    <>
      <Head>
        <title>Thông tin thanh toán của bạn </title>
      </Head>
      <User
        UserChildrenProps={{
          contentUser: <UserPay />,
        }}
      />
    </>
  );
};
export default UserPayPage;
