import { useRouter } from "next/router";
import { useEffect, useState } from "react";
type withAuth = {
  component: JSX.Element;
};
export const withAuth = ({ component }: withAuth) => {
  const isAuth = null;
  const Auth = () => {
    const router = useRouter();
    if (!isAuth) {
      router.push("/");
    }
  };
  return Auth;
};
