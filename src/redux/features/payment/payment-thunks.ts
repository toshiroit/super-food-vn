import { configAPI } from "@/config/config";
import { RequestServices } from "@/services/request-services";
import { createAsyncThunk } from "@reduxjs/toolkit";

const URL = configAPI.URL_BACKEND
export const getAllPayment = createAsyncThunk(
  'payment/get-all-pay-ment',
  async (data) => {
    const responsive = await RequestServices.get({
      method: "GET",
      isAuthRequired: false,
      authorization: "",
      contentType: 'application/json',
      url: `${URL + '/payment/get-all-pay-ment'}`
    })
    return {
      data: responsive.data
    }
  }
)
