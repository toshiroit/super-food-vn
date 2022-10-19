import { NextPage } from "next";
import Head from "next/head";
import CheckoutLayout from "@/components/Checkout/Checkout";
import CompletionOrder from "@/components/Completion/CompletionOrder";
const CompletionCheckoutPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Đăt hàng thành công </title>
      </Head>
      <CompletionOrder />
    </>
  );
};
export default CompletionCheckoutPage;
