import User from "@/components/User/User";
import UserNotify from "@/components/User/UserNotify/UserNotify";
import Head from "next/head";

const UserNotifyPage = () => {
  return (
    <>
      <Head>
        <title>Thông báo tài khoản </title>
      </Head>
      <User
        UserChildrenProps={{
          contentUser: <UserNotify />,
        }}
      />
    </>
  );
};
export default UserNotifyPage;
