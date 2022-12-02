import { configAPI } from "@/config/config";
import { RequestServices } from "@/services/request-services";
import { OrderGetDataAPI, OrderGetDetailAPI } from "@/types/order/order";
import { createAsyncThunk } from "@reduxjs/toolkit";

const URL = configAPI.URL_BACKEND;
export const getListOrderByCodeUser = createAsyncThunk(
  "order/get-list-order",
  async (data: OrderGetDataAPI, thunkAPI) => {
    const responsive = await RequestServices.get({
      method: "GET",
      authorization: "",
      contentType: "application/json",
      isAuthRequired: true,
      url: `${URL + `/order/get-order-user?page=${data.page || 1}`}`,
    });
    return {
      data: responsive.data,
      error: responsive.error,
    };
  }
);

export const getOrderDetailByCodeOrder = createAsyncThunk(
  "order/get-order-detail",
  async (data: OrderGetDetailAPI, thunkAPI) => {
    const responsive = await RequestServices.get({
      method: "GET",
      authorization: "",
      isAuthRequired: true,
      contentType: "application/json",
      url: `${URL + `/order/get-order?code_order=${data.code_order}`}`,
    });
    return {
      data: responsive.data,
      message: responsive.message,
      error: responsive.error,
    };
  }
);
