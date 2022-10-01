import User from "@/components/User/User";
import UserOrder from "@/components/User/UserOrder/UserOrder";
import Head from "next/head";

const UserOrderPage = () => {
  return (
    <>
      <Head>
        <title>Đơn hàng của bạn</title>
      </Head>
      <User
        UserChildrenProps={{
          contentUser: <UserOrder />,
        }}
      />
    </>
  );
};
export default UserOrderPage;
