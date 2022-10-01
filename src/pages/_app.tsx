import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { store } from "@/redux/store/store";
import "../../styles/Loader.io.css";
import "../../styles/main.scss";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import { useRouter } from "next/router";
import Banner from "@/components/Banner/Banner";
function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  return (
    <Provider store={store}>
      <div id="body" className="wrapper">
        <div className="desktop supership">
          <Header />
          {/* {isCheckShowBanner() ? <Banner /> : ""} */}
          <Component {...pageProps} />
          <Footer />
        </div>
      </div>
      {/* <Component {...pageProps} /> */}
    </Provider>
  );
}

export default MyApp;
