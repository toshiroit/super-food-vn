import { selectAuthLoading } from "@/redux/features/auth/auth-selects";
import { useAppSelector } from "@/redux/hooks/hooks";
import { ShieldChildren } from "@/types/shield/shield";
import { NextShield, NextShieldProps } from "next-shield";
import { useRouter } from "next/router";
import { useAuthContext } from "src/contexts/Auth/AuthContext";
import LoadingBackgroundV1 from "../Background/BackgroundLoading/LoadingBackgroundV1";
import LoadingSpinner from "../Loading/LoadingSpinner";

/**
 *
 * @param children Component Page Next Js
 * @returns ReactNode
 * @example
 * Check private and public route app client auth
 * @example
 * ```ts
 *  const shieldProps:NextShieldProps<['privateRoute'],['Public Route ']>
 * ```
 */
export function Shield({ children }: ShieldChildren) {
  // const loading = useAppSelector(selectAuthLoading);
  const { data, isLogged } = useAuthContext();
  // console.log(loading);
  const router = useRouter();
  const shieldProps: NextShieldProps<
    [
      "/user",
      "/user/info",
      "/user/shop",
      "/user/balance",
      "/user/order",
      "/user/address",
      "/user/notify",
      "/user/order/detail/[id]"
    ],
    ["/404"]
  > = {
    router,
    isAuth: isLogged,
    isLoading: false,
    privateRoutes: [
      "/user",
      "/user/info",
      "/user/shop",
      "/user/balance",
      "/user/order",
      "/user/address",
      "/user/notify",
      "/user/order/detail/[id]",
    ],
    accessRoute: "/user",
    publicRoutes: ['/404'],
    loginRoute: "/404",
    LoadingComponent: null,
  };
  return <NextShield {...shieldProps}>{children}</NextShield>;
}
