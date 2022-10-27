import { configAPI } from "@/config/config";
import { RequestServices } from "@/services/request-services";
import { OrderGetDataAPI } from "@/types/order/order";
import { createAsyncThunk } from "@reduxjs/toolkit";

const URL = configAPI.URL_BACKEND
export const getListOrderByCodeUser = createAsyncThunk(
  'order/get-list-order', async (data: OrderGetDataAPI, thunkAPI) => {
    const responsive = await RequestServices.get({
      method: 'GET',
      authorization: '',
      contentType: 'application/json',
      isAuthRequired: true,
      url: `${URL + `/order/get-order-user?page=${data.page || 1}`}`
    })
    return {
      data: responsive.data,
      error: responsive.error
    }
  }
)
