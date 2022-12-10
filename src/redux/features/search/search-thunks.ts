import { configAPI } from "@/config/config";
import { RequestServices } from "@/services/request-services";
import { SearchDataAPI } from "@/types/search/search";
import { createAsyncThunk } from "@reduxjs/toolkit";
const URL = configAPI.URL_BACKEND;

export const searchProductByName = createAsyncThunk(
  "search/search-product",
  async (data: SearchDataAPI, thunkAPI) => {
    let querySearch: string = "";
    if (data.textSearch) {
      querySearch += `q=${data.textSearch}`;
    }
    const responsive = await RequestServices.get({
      method: "GET",
      authorization: "",
      contentType: "application/json",
      isAuthRequired: false,
      url: `${URL + `/search?${querySearch}`}`,
    });
    console.log("-> ", responsive);
    return {
      data: responsive.data,
      error: responsive.error,
    };
  }
);

export const getListTextSearch = createAsyncThunk(
  "search/get-list-text-search",
  async (data: { text: string }, thunkAPI) => {
    const responsive = await RequestServices.get({
      method: "GET",
      authorization: "",
      isAuthRequired: true,
      contentType: "application/json",
      url: `${URL + `/search/text-search-product?text=${data.text}`}`,
    });
    return {
      data: responsive.data,
    };
  }
);

export const getShopByNameOrCode = createAsyncThunk(
  "search/shop-by-name-or-code",
  async (
    data: {
      code_shop: string;
      name_shop: string;
      type?: "DISCOUNT" | "FREE-SHIP" | "EVALUATE-SHOP";
    },
    thunkAPI
  ) => {
    const responsive = await RequestServices.get({
      method: "GET",
      authorization: "",
      isAuthRequired: true,
      contentType: "application/json",
      url: `${
        URL +
        `/search/shop-by-name-or-code?code_shop=${data.code_shop}&name_shop=${data.name_shop}`
      }`,
    });
    return {
      data: responsive.data,
    };
  }
);
