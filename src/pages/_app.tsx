import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { store } from "@/redux/store/store";
import "../../styles/Loader.io.css";
import "../../styles/main.scss";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import { useRouter } from "next/router";
import Banner from "@/components/Banner/Banner";
import { useEffect, useState } from "react";
function MyApp({ Component, pageProps }: AppProps) {
  const [dataShow] = useState<string[]>(["/", "/search"]);
  const [showBanner, setShowBanner] = useState<boolean>(false);
  const router = useRouter();
  const isShowBanner = (data: string[]) => {
    let result: boolean = false;
    for (let i = 0; i < data.length; i++) {
      if (data[i] === router.pathname) {
        result = true;
        break;
      } else {
        result = false;
      }
    }
    return result;
  };
  return (
    <Provider store={store}>
      <div id="body" className="wrapper">
        <div className="desktop supership">
          <Header />
          {isShowBanner(dataShow) ? <Banner /> : ""}
          {/* {isCheckShowBanner() ? <Banner /> : ""} */}
          <Component {...pageProps} />
          <Footer />
        </div>
      </div>
    </Provider>
  );
}

export default MyApp;
