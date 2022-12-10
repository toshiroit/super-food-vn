import type { AppContext, AppProps } from "next/app";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { Provider } from "react-redux";
import { store } from "@/redux/store/store";
import "../../styles/Loader.io.css";
import "../../styles/main.scss";
import "../../styles/LoadingBackgroundV1.scss";
import { parseCookies } from "nookies";
import { AuthProvider, useAuthContext } from "src/contexts/Auth/AuthContext";
import Container from "@/components/Container/Container";
import { Shield } from "@/components/Shield/Shield";
import { SocketProvider } from "src/contexts/Auth/SocketContext";
type AppOwnProps = { cookies: any };

const MyApp = ({ Component, pageProps, cookies }: AppProps & AppOwnProps) => {
  // const [dataShow] = useState<string[]>(["/", "/search"]);
  const AsMyComponent = Component as any;
  return (
    <Provider store={store}>
      <AuthProvider jwt={cookies}>
        <SocketProvider>
          <Shield>
            <Container>
              <AsMyComponent {...pageProps} />
            </Container>
          </Shield>
        </SocketProvider>
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
