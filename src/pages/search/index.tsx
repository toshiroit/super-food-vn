import SearchLayout from "@/components/Search/Search";
import { NextPage } from "next";
import Head from "next/head";
import Router, { useRouter } from "next/router";

const SearchPage: NextPage = ({ data }: any) => {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>Tìm kiếm sản phẩm : {router.query.q}</title>
      </Head>
      <SearchLayout />
    </>
  );
};
export const getServerSideProps = async () => {
  return {
    props: {
      data: "124",
    },
  };
};
export default SearchPage;
