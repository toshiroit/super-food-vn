import { NextPage } from "next";
import Head from "next/head";
import CartLayout from "@/components/Cart/Cart";
const Cart: NextPage = () => {
  return (
    <>
      <Head>
        <title>Gio hang</title>
      </Head>
      <CartLayout />
    </>
  );
};
export default Cart;
