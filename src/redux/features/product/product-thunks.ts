import { configAPI } from "@/config/config";
import { RequestServices } from "@/services/request-services";
import { ProductGetDetailDataAPI } from "@/types/product/product";
import { createAsyncThunk } from "@reduxjs/toolkit";
const URL = configAPI.URL_BACKEND;

export const getProductByCodeOrName = createAsyncThunk(
  'product/get-product-by-name-or-code', async (data: ProductGetDetailDataAPI, thunkAPI) => {
    const responsive = await RequestServices.get({
      method: "GET",
      authorization: "",
      contentType: "application/json",
      isAuthRequired: false,
      url: `${URL + `/product/get?code=${data.code}&name=${data.name}`}`
    })
    return {
      error: responsive.error,
      data: responsive.data.data.rows[0]
    }
  })

export const getProductAll = createAsyncThunk(
  'product/get-all', async (data, thunkAPI) => {
    const responsive = await RequestServices.get({
      method: "GET",
      authorization: "",
      contentType: "application/json",
      isAuthRequired: false,
      url: `${URL + '/product/get-all'}`
    })
    return {
      error: responsive.error,
      data: responsive.data
    }
  }
)

export const getProductByName = createAsyncThunk(
  'product/get-product-by-name', async () => {
    const responsive = await RequestServices.get({
      method: 'GET',
      authorization: "",
      contentType: 'application/json',
      isAuthRequired: false,
      url: `${URL + `/product/`} `
    })
    return {
      data: responsive.data,
      error: responsive.error
    }
  }
)
export const getListSearchByName = createAsyncThunk(
  'product/get-list-search-by-name', async () => {
    const responsive = await RequestServices.get({
      method: 'GET',
      authorization: "",
      contentType: 'application/json',
      isAuthRequired: false,
      url: `${URL + `/search/list-search?q=${'2141'}`} `
    })
    return {
      data: responsive.data,
      error: responsive.error
    }
  }
)
