import { NextPage } from "next";
import Head from "next/head";
import CheckoutLayout from "@/components/Checkout/Checkout";
const CheckoutPage: NextPage = () => {
  return (
    <>
      <Head>
        <title> THANMH TOAN</title>
      </Head>
      <CheckoutLayout />
    </>
  );
};
export default CheckoutPage;
