import type { AppContext, AppInitialProps, AppProps } from "next/app";
import { Provider } from "react-redux";
import { store } from "@/redux/store/store";
import "../../styles/Loader.io.css";
import "../../styles/main.scss";
import "../../styles/LoadingBackgroundV1.scss";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import { Router, useRouter } from "next/router";
import Banner from "@/components/Banner/Banner";
import { parseCookies } from "nookies";
import { useEffect, useState } from "react";
import App from "next/app";
import { AuthProvider, useAuthContext } from "src/contexts/Auth/AuthContext";
import cookie from "js-cookie";
import { GetServerSideProps, NextPageContext } from "next";
import { useAppSelector } from "@/redux/hooks/hooks";
import { selectAuthData } from "@/redux/features/auth/auth-selects";
import Container from "@/components/Container/Container";
import { Shield } from "@/components/Shield/Shield";
type AppOwnProps = { cookies: any };

const MyApp = ({ Component, pageProps, cookies }: AppProps & AppOwnProps) => {
  const [dataShow] = useState<string[]>(["/", "/search"]);
  const router = useRouter();
  return (
    <Provider store={store}>
      <AuthProvider jwt={cookies}>
        <Shield>
          <Container>
            <Component {...pageProps} />
          </Container>
        </Shield>
      </AuthProvider>
    </Provider>
  );
};
MyApp.getInitialProps = async ({ ctx }: AppContext) => {
  let jwt = null;
  if (ctx.req?.headers.cookie) {
    jwt = await parseCookies(ctx).jwt;
  }
  return {
    cookies: jwt,
  };
};

export default MyApp;
