import { configAPI } from "@/config/config";
import { RequestServices } from "@/services/request-services";
import { EvaluateData, EvaluateDataCheck } from "@/types/evaluate/evaluate";
import { createAsyncThunk } from "@reduxjs/toolkit";

const URL = configAPI.URL_BACKEND;
export const addEvaluateByProduct = createAsyncThunk(
  "evaluate/add-evaluate",
  async (data: EvaluateData, thunkAPI) => {
    try {
      const responsive = await RequestServices.post({
        method: "POST",
        authorization: "",
        contentType: "application/json",
        isAuthRequired: true,
        url: `${URL + "/evaluate/add"}`,
        body: data,
      });
      return {
        data: responsive.data,
      };
    } catch (error: any) {
      return thunkAPI.rejectWithValue({
        code: error.response.status,
        message: error.response.data.message || " Không xác định ",
      });
    }
  }
);
export const checkEvaluateByProductUserOrder = createAsyncThunk(
  "evaluate/check-evaluate-by-product-user-order",
  async (data: EvaluateDataCheck, thunkAPI) => {
    try {
      const responsive = await RequestServices.get({
        method: "GET",
        authorization: "",
        contentType: "application/json",
        isAuthRequired: true,
        url: `${
          URL +
          `/evaluate/check-evaluate?code_order=${data.code_order}&code_product=${data.code_product}`
        }`,
      });
      return {
        data: responsive.data,
      };
    } catch (error) {
      return {
        error: error,
      };
    }
  }
);

export const getEvaluateByProduct = createAsyncThunk(
  "evaluate/get-evaluate-by-product",
  async (data: { code_product: string }, thunkAPI) => {
    try {
      const responsive = await RequestServices.get({
        method: "GET",
        authorization: "",
        contentType: "application/json",
        isAuthRequired: true,
        url: `${
          URL + `/evaluate/get-evaluate?code_product=${data.code_product}`
        }`,
      });
      return {
        data: responsive.data,
      };
    } catch (error) {
      return {
        error,
      };
    }
  }
);
