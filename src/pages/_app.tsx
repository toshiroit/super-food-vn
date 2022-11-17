import type { AppContext, AppProps } from "next/app";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import { Provider } from "react-redux";
import { store } from "@/redux/store/store";
import "../../styles/Loader.io.css";
import "../../styles/main.scss";
import "../../styles/LoadingBackgroundV1.scss";
import { parseCookies } from "nookies";
import { AuthProvider } from "src/contexts/Auth/AuthContext";
import Container from "@/components/Container/Container";
import { Shield } from "@/components/Shield/Shield";
import { useEffect, useState } from "react";
import io from 'socket.io-client'
import { useRouter } from "next/router";
import socket from "@/lib/socketIO";
type AppOwnProps = { cookies: any };

const MyApp = ({ Component, pageProps, cookies }: AppProps & AppOwnProps) => {
  // const [dataShow] = useState<string[]>(["/", "/search"]);
  const router = useRouter()
  useEffect(() => {
    socket.on('notification', (data: any) => {
      toast.info(data.data, {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      })
    })
  }, [])
  const AsMyComponent = Component as any;
  return (
    <Provider store={store}>
      <AuthProvider jwt={cookies}>
        <Shield>
          <Container>
            <ToastContainer
              position="bottom-right"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="light"

            />
            <AsMyComponent {...pageProps} />
          </Container>
        </Shield>
      </AuthProvider>
    </Provider>
  );
};
MyApp.getInitialProps = async ({ ctx }: AppContext) => {
  let jwt = null;
  if (ctx.req?.headers.cookie) {
    jwt = parseCookies(ctx).jwt;
  }
  return {
    cookies: jwt,
  };
};

export default MyApp;
