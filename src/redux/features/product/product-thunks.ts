import { configAPI } from "@/config/config";
import { RequestServices } from "@/services/request-services";
import { GetAllProductTypeAPIThunk, GetAllProductTypeShop, ProductGetDetailDataAPI } from "@/types/product/product";
import { SearchDataAPI } from "@/types/search/search";
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
  'product/get-all', async (data: GetAllProductTypeAPIThunk, thunkAPI) => {
    const responsive = await RequestServices.get({
      method: "GET",
      authorization: "",
      contentType: "application/json",
      isAuthRequired: false,
      url: `${URL + `/product/get-all?limit=${data.limit || 6}&type=${data.type || ''}`}`
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

export const searchProductByName = createAsyncThunk('search/search-product', async (data: SearchDataAPI, thunkAPI) => {
  let querySearch: string = ''
  if (data.textSearch) {
    querySearch += `q=${data.textSearch}`
  }
  if (data.value) {
    if (data.value[0] && data.value[0].nameType === 'SORT' && data.value[0].valueType) {
      querySearch += `&sort=${data.value[0].valueType}`
    }
    if (data.value[1] && data.value[1].nameType === 'TYPE-SHOW' && data.value[1].valueType) {
      querySearch += `&typeshow=${data.value[1].valueType}`
    }
    if (data.value[2] && data.value[2].nameType === 'LIST-SHOP' && data.value[2].valueType) {
      querySearch += `&listshop=${data.value[2].valueType}`
    }
  }
  if (data.page) {
    querySearch += `&page=${data.page} `
  }

  const responsive = await RequestServices.get({
    method: 'GET',
    authorization: "",
    contentType: 'application/json',
    isAuthRequired: false,
    url: `${URL + `/search?${querySearch}`}`,
  })
  return {
    data: responsive.data,
    error: responsive.error
  }
})

export const getAllProductByShop = createAsyncThunk(
  'product/get-product-shop',
  async (data: GetAllProductTypeShop, thunkAPI) => {
    const responsive = await RequestServices.get({
      method: 'GET',
      authorization: '',
      isAuthRequired: false,
      contentType: 'application/json',
      url: `${URL + `/product/get-all-shop?limit=${data.limit || 6}&code_shop=${data.code_shop}`}`
    })
    return {
      data: responsive.data,
      error: responsive.error
    }
  }
)

export const getAllProductByTop = createAsyncThunk(
  'product/get-product-top',
  async (data: { limit: string }, thunkAPI) => {
    const responsive = await RequestServices.get({
      method: 'GET',
      authorization: '',
      isAuthRequired: false,
      contentType: 'application/json',
      url: `${URL + `/product/get-all-top?limit=${data.limit || 6}`}`
    })
    return {
      data: responsive.data,
      error: responsive.error
    }
  }
)

export const getAllProductByPayTop = createAsyncThunk(
  'product/get-product-pay-top',
  async (data: { limit: string }, thunkAPI) => {
    const responsive = await RequestServices.get({
      method: 'GET',
      authorization: '',
      isAuthRequired: false,
      contentType: 'application/json',
      url: `${URL + `/product/get-all-pay-top?limit=${data.limit || 6}`}`
    })
    return {
      data: responsive.data,
      error: responsive.error
    }

  }
)

export const getAllProductByNewShop = createAsyncThunk(
  'product/get-product-new-shop',
  async (data: { limit: string }, thunkAPI) => {
    const responsive = await RequestServices.get({
      method: 'GET',
      authorization: '',
      isAuthRequired: false,
      contentType: 'application/json',
      url: `${URL + `/product/get-all-new-shop?limit=${data.limit || 6}`}`
    })
    return {
      data: responsive.data,
      error: responsive.error
    }

  }
)
