import { NextPage } from "next";
import Head from "next/head";
import CheckoutLayout from "@/components/Checkout/Checkout";
import { randomLengthText } from "@/lib/random";
const CheckoutPage: NextPage = () => {
  const random = randomLengthText(14).toString()
  return (
    <>
      <Head>
        <title>Thanh toán đơn hàng : {random.toUpperCase()} </title>
      </Head>
      <CheckoutLayout />
    </>
  );
};
export default CheckoutPage;
