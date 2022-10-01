import User from "@/components/User/User";
import UserSecurity from "@/components/User/UserSecurity/UserSecurity";
import Head from "next/head";

const UserSecurityPage = () => {
  return (
    <>
      <Head>
        <title>Thông tin bảo mật </title>
      </Head>
      <User
        UserChildrenProps={{
          contentUser: <UserSecurity />,
        }}
      />
    </>
  );
};
export default UserSecurityPage;
