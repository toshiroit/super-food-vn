import User from "@/components/User/User";
import UserInfo from "@/components/User/UserInfo/UserInfo";
import UserSlider from "@/components/User/UserSlider/UserSlider";
import { UserChildrenProps } from "@/interfaces/user";
import useWindowSize from "@/lib/windowSize";
import { UserHomeChildren } from "@/types/user/user";
import { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const UserHomePage = ({ children }: UserHomeChildren) => {
  const router = useRouter();
  const sizeWindow = useWindowSize().width;

  useEffect(() => {
    if (sizeWindow) {
      if (sizeWindow < 654) {
        router.push("/user");
      } else {
        router.push("/user/info");
      }
    }
    // eslint-disable-next-line
  }, [sizeWindow]);
  return (
    <>
      <Head>
        <title>Danh sách chọn </title>
      </Head>
      <User UserChildrenProps={{}} />
    </>
  );
};
export default UserHomePage;
