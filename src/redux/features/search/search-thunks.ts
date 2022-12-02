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
    if (data.value) {
      console.log(data.value[0]);
      if (
        data.value[0] &&
        data.value[0].nameType === "SORT" &&
        data.value[0].valueType
      ) {
        querySearch += `sort=${data.value[0].valueType}`;
      }
      if (
        data.value[1] &&
        data.value[1].nameType === "TYPE-SHOW" &&
        data.value[1].valueType
      ) {
        querySearch += `typeshow=${data.value[1].valueType}`;
      }
      if (
        data.value[2] &&
        data.value[2].nameType === "LIST-SHOP" &&
        data.value[2].valueType
      ) {
        querySearch += `listshop=${data.value[2].valueType}`;
      }
    }

    console.log("query : ", querySearch);
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
  async (data: { code_shop: string; name_shop: string }, thunkAPI) => {
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
