import User from "@/components/User/User";
import UserOrderDetail from "@/components/User/UserOrder/UserOrderDetail";
import Head from "next/head";

const UserOrderDetailPage = () => {
  return (
    <>
      <Head>
        <title>Thông tin đơn hàng #12412</title>
      </Head>
      <User UserChildrenProps={{ contentUser: <UserOrderDetail /> }} />
    </>
  );
};
export default UserOrderDetailPage;
