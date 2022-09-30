import { LayoutProps } from "src/types/layout/layout";
import Header from "@/components/Header/Header";
import Container from "@/components/Container/Container";
import Footer from "@/components/Footer/Footer";
const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <Container>{children}</Container>
      <Footer />
    </>
  );
};
export default Layout;
