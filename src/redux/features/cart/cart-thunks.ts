import { configAPI } from "@/config/config";
import { RequestServices } from "@/services/request-services";
import { createAsyncThunk } from "@reduxjs/toolkit";

const URL = configAPI.URL_BACKEND;
export const getCartByCodeUser = createAsyncThunk(
  'cart/get-cart-by-code-user', async (data: { code_user: string }) => {
    const responsive = await RequestServices.get({
      method: "GET",
      authorization: '',
      contentType: 'application/json',
      isAuthRequired: true,
      url: `${URL + `/cart/get-cart?code_user=${data.code_user}`}`
    })
    return {
      data: responsive.data.data.rows,
      error: responsive.error
    }
  })

export const addCartByCodeUser = createAsyncThunk(
  'cart/add-cart-by-code-user', async (data: { code_user: string, data_cart?: any }) => {
    const responsive = await RequestServices.post({
      method: 'POST',
      authorization: '',
      contentType: 'application/json',
      isAuthRequired: true,
      url: `${URL + '/cart/add-cart'}`,
      body: data.data_cart
    })
    return {
      data: responsive.data,
      error: responsive.error
    }
  }
)

export const removeCartItemByCodeCart = createAsyncThunk(
  'cart/remove-cart-by-code-cart', async (data: { code_cart: string, data_cart?: any }) => {
    console.log("DATA ", data)
    const responsive = await RequestServices.del({
      method: 'DELETE',
      authorization: '',
      contentType: 'application/json',
      isAuthRequired: true,
      url: `${URL + `/cart/remove-cart?code_cart=${data.code_cart}`}`,
    })
    return {
      data: responsive.data,
      error: responsive.error
    }
  }
)
