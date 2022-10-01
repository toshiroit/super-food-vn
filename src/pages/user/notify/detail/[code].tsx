import User from "@/components/User/User";
import UserNotifyDetail from "@/components/User/UserNotify/UserNotifyDetail";
import Head from "next/head";

const UserNotifyDetailPage = () => {
  return (
    <>
      <Head>
        <title>Thông tin thông báo #124124</title>
      </Head>
      <User
        UserChildrenProps={{
          contentUser: <UserNotifyDetail />,
        }}
      />
    </>
  );
};
export default UserNotifyDetailPage;
