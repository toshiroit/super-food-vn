import Header from "@/components/Header/Header";
import Container from "@/components/Container/Container";
import Footer from "@/components/Footer/Footer";
import { LayoutProps } from "@/types/layout/layout";
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
