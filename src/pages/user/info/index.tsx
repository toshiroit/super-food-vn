/* eslint-disable react/no-children-prop */
import User from "@/components/User/User";
import UserInfo from "@/components/User/UserInfo/UserInfo";
import { NextPage } from "next";
import Head from "next/head";

const UserInfoPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Thông tin tài khoản </title>
      </Head>
      <User
        UserChildrenProps={{
          contentUser: <UserInfo />,
        }}
      ></User>
    </>
  );
};
export default UserInfoPage;
