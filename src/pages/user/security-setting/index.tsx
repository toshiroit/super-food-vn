import User from "@/components/User/User";
import UserSecuritySetting from "@/components/User/UserSecurity/UserSecuritySetting/UserSecuritySetting";
import Head from "next/head";

const UserSecuritySettingPage = () => {
  return (
    <>
      <Head>
        <title>Cài đăt bảo mật </title>
      </Head>
      <User
        UserChildrenProps={{
          contentUser: <UserSecuritySetting />,
        }}
      />
    </>
  );
};
export default UserSecuritySettingPage;
