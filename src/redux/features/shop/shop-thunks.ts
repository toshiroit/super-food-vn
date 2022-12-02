import { configAPI } from "@/config/config";
import { RequestServices } from "@/services/request-services";
import { createAsyncThunk } from "@reduxjs/toolkit";

const URL = configAPI.URL_BACKEND;

export const getDataDetailShopByCodeShop = createAsyncThunk(
  "shop/get-detail-shop-by-code",
  async (data: { code_shop: string }, thunkAPI) => {
    console.log(data.code_shop);
    const responsive = await RequestServices.get({
      method: "GET",
      isAuthRequired: true,
      authorization: "",
      contentType: "application/json",
      url: `${URL + `/shop/detail-shop?code_shop=${data.code_shop}`}`,
    });
    return {
      data: responsive.data,
    };
  }
);

export const getDataProductShopByCodeShop = createAsyncThunk(
  "shop/get-all-product-by-shop",
  async (data: { code_shop: string; page: number; q?: string }) => {
    const responsive = await RequestServices.get({
      method: "GET",
      isAuthRequired: true,
      authorization: "",
      contentType: "application/json",
      url: `${
        URL +
        `/shop/all-product?code_shop=${data.code_shop}&page=${data.page}&q=${
          data.q || ""
        }`
      }`,
    });
    return {
      data: responsive.data,
    };
  }
);

export const followShopByUser = createAsyncThunk(
  "shop/follow-shop-by-user",
  async (data: { code_shop: string }) => {
    const responsive = await RequestServices.post({
      method: "POST",
      isAuthRequired: true,
      authorization: "",
      contentType: "application/json",
      url: `${URL + `/shop/follow-shop`}`,
      body: {
        code_shop: data.code_shop,
      },
    });
    return {
      data: responsive.data,
    };
  }
);
