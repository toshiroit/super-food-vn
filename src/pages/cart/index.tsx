import { NextPage } from "next";
import Head from "next/head";
import CartLayout from "@/components/Cart/Cart";
const Cart: NextPage = () => {
  return (
    <>
      <Head>
        <title>Giỏ hàng </title>
      </Head>
      <CartLayout />
    </>
  );
};
export const getServerSideProps = async (ctx: any) => {
  return {
    props: {},
  };
};
export default Cart;
