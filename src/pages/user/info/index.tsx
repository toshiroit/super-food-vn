/* eslint-disable react/no-children-prop */
import User from "@/components/User/User";
import UserInfo from "@/components/User/UserInfo/UserInfo";
import UserSlider from "@/components/User/UserSlider/UserSlider";
import { NextPage } from "next";
import Head from "next/head";
import UserHomePage from "../index";

const UserInfoPage = () => {
  return (
    <>
      <Head>
        <title>Thông tin tài khoản </title>
      </Head>
      <User
        UserChildrenProps={{
          menuUser: <UserSlider />,
          contentUser: <UserInfo />,
        }}
      ></User>
    </>
  );
};
export default UserInfoPage;
