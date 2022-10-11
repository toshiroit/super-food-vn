import { selectAuthData } from "@/redux/features/auth/auth-selects";
import { useAppSelector } from "@/redux/hooks/hooks";
import { useRouter } from "next/router";
import { useState } from "react";
import { ContainerProps } from "src/types/container/container";
import Banner from "../Banner/Banner";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const Container = ({ children }: ContainerProps) => {
  const data = useAppSelector(selectAuthData);
  const router = useRouter();
  const [dataShow] = useState<string[]>(["/", "/search"]);
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
    <div id="body" className="wrapper">
      <div className="desktop supership">
        <Header />
        {isShowBanner(dataShow) ? <Banner /> : ""}
        {children}
        <Footer />
      </div>
    </div>
  );
};
export default Container;
