import User from "@/components/User/User";
import UserRestPassword from "@/components/User/UserRestPassword/UserRestPassword";
import Head from "next/head";

const UserRestPassPage = () => {
  return (
    <>
      <Head>
        <title>Thay đổi mật khẩu </title>
      </Head>
      <User
        UserChildrenProps={{
          contentUser: <UserRestPassword />,
        }}
      />
    </>
  );
};
export default UserRestPassPage;
