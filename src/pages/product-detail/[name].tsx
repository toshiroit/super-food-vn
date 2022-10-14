import ProductDetail from "@/components/ProductDetail/ProductDetail";
import { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";

const Name: NextPage = () => {
  const router = useRouter()
  return (
    <>
      <Head>
        <title>Thông tin sản phẩm : {router.query.name}</title>
      </Head>
      <ProductDetail />
    </>
  );
};
export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {

    }
  }
}
export default Name;
