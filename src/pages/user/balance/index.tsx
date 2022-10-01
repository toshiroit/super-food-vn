import User from "@/components/User/User";
import UserBalance from "@/components/User/UserBalance/UserBalance";
import Head from "next/head";

const UserBalancePage = () => {
  return (
    <>
      <Head>
        <title>Sô dư của bạn </title>
      </Head>
      <User
        UserChildrenProps={{
          contentUser: <UserBalance />,
        }}
      />
    </>
  );
};
export default UserBalancePage;
