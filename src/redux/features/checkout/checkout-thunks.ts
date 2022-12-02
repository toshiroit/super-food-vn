import { configAPI } from "@/config/config";
import { joinProductShop } from "@/lib/joinProductShop";
import { RequestServices } from "@/services/request-services";
import { CartItem, CartItemShop } from "@/types/cart/cart";
import { createAsyncThunk } from "@reduxjs/toolkit";

const URL = configAPI.URL_BACKEND;
const joinProductShopTest = (data: CartItem[]): any[] => {
  let cpData = [...data];
  const itemsByCodeShop: any = {};
  for (const item of cpData) {
    itemsByCodeShop[item.code_shop || ""] ??= {
      shop: {
        name_shop: item.name_shop,
        code_shop: item.code_shop,
      },
      cart: [],
    };
    itemsByCodeShop[item.code_shop || ""].cart.push(item);
  }
  if (itemsByCodeShop) {
    return Object.values(itemsByCodeShop);
  }
  return [];
};
const priceResultQuality = (price: number, quality: number) => {
  return price * quality;
};
const priceDiscount = (price: number, discount: number) => {
  const discountResult = discount / 100;
  return price - price * discountResult;
};
export const checkoutOrder = createAsyncThunk(
  "checkout/checkout-order-user-w",
  async (data: {
    data_checkout: CartItem[];
    price_result: number;
    code_address: string;
    code_payment: string;
  }) => {
    try {
      const data_product: any[] = [];
      let quatity: number = 0;
      console.log(joinProductShopTest(data.data_checkout));
      joinProductShopTest(data.data_checkout).map((item) => {
        let code_shop = item.shop.code_shop;
        let price_result = 0;
        item.cart.map((item2: any) => {
          if (item2.code_shop === code_shop) {
            price_result += priceResultQuality(
              priceDiscount(item2.price || 0, item2.discount || 0),
              item2.quality_product || 0
            );
          }
        });

        data_product.push({
          code_shop: item.shop.code_shop,
          code_product: item.cart.map((item2: any) => {
            if (item2.code_product)
              return {
                code: item2.code_product.trim(),
                quatity: item2.quality_product,
                price_result: priceResultQuality(
                  priceDiscount(item2.price || 0, item2.discount || 0),
                  item2.quality_product || 0
                ),
                info_product: item2.info_product,
              };
          }),
          code_address:
            data.code_address.length === 0 || !data.code_address
              ? "PAYMENT_4912W_1"
              : data.code_address,
          code_payment: data.code_payment,
          total_order: price_result,
          quatity: 0,
        });
      });
      const responsive = await RequestServices.post({
        method: "POST",
        authorization: "",
        isAuthRequired: true,
        contentType: "application/json",
        url: `${URL + "/checkout/user"}`,
        body: {
          data_product: data_product,
        },
      });
      return {
        data: responsive.data,
      };
    } catch (err) {
      console.log("ERROR : ", err);
    }
  }
);
