import { configAPI } from "@/config/config";
import { RequestServices } from "@/services/request-services";
import { createAsyncThunk } from "@reduxjs/toolkit";

const URL = configAPI.URL_BACKEND;
export const getAddressByUser = createAsyncThunk(
  'address/get-address-by-user',
  async (data, thunkAPI) => {
    const responsive = await RequestServices.get({
      method: 'GET',
      authorization: "",
      isAuthRequired: true,
      contentType: 'application/json',
      url: `${URL + `/address/get-address`}`
    })
    return {
      data: responsive.data,
      error: responsive.error
    }
  }
)
