import User from "@/components/User/User";
import UserInfo from "@/components/User/UserInfo/UserInfo";
import UserSlider from "@/components/User/UserSlider/UserSlider";
import { UserChildrenProps } from "@/interfaces/user";
import useWindowSize from "@/lib/windowSize";
import { UserHomeChildren } from "@/types/user/user";
import { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { parseCookies } from "nookies";
import { ChangeEvent, useEffect, useState } from "react";

const UserHomePage = ({ children }: UserHomeChildren) => {
  const router = useRouter();
  const sizeWindow = useWindowSize().width;

  const onChangeSetTextSearch = (e: ChangeEvent<HTMLInputElement>) => {};

  useEffect(() => {
    if (sizeWindow) {
      if (sizeWindow < 654) {
        router.push("/user");
      } else {
        router.push("/user/info");
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
// export const getServerSideProps = async (ctx: any) => {
//   return {
//     props: {},
//   };
// };
export default UserHomePage;
