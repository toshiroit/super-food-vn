import { configAPI } from "@/config/config";
import { RequestServices } from "@/services/request-services";
import { createAsyncThunk } from "@reduxjs/toolkit";
const URL = configAPI.URL_BACKEND;

export const getCommentByProduct = createAsyncThunk(
  'comment/comment-by-product', async (data: { code_product: string }, thunkAPI) => {
    const responsive = await RequestServices.get({
      method: "GET",
      isAuthRequired: false,
      contentType: 'application/json',
      authorization: '',
      url: `${URL + `/comment/get-comment?code_product=${data.code_product}`}`
    })
    return {
      data: responsive.data.data.rows,
      error: responsive.error
    }
  })

