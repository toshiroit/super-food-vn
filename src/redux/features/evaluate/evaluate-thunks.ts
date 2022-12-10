import { configAPI } from "@/config/config";
import { randomLengthText } from "@/lib/random";
import { RequestServices } from "@/services/request-services";
import { EvaluateData, EvaluateDataCheck } from "@/types/evaluate/evaluate";
import { createAsyncThunk } from "@reduxjs/toolkit";

const URL = configAPI.URL_BACKEND;
export const addEvaluateByProduct = createAsyncThunk(
  "evaluate/add-evaluate",
  async (data: EvaluateData, thunkAPI) => {
    const formData = new FormData();
    if (data.images) {
      for (const image of data.images) {
        formData.append("images", image);
      }
    }
    const responsiveImages = await RequestServices.post({
      method: "POST",
      authorization: "",
      isAuthRequired: true,
      contentType: "multipart/form-data",
      url: `${URL + "/upload/images"}`,
      body: formData,
    });
    if (responsiveImages) {
      const dataImages_result: any[] = [];
      responsiveImages.data &&
        responsiveImages.data.data.map((item: any) => {
          dataImages_result.push({
            file_name: item.data.original_filename,
            image: item.data.url,
            created_at: item.data.created_at,
          });
        });
      const responsive = await RequestServices.post({
        method: "POST",
        authorization: "",
        contentType: "application/json",
        isAuthRequired: true,
        url: `${URL + "/evaluate/add"}`,
        body: {
          code_product: data.code_product,
          evaluate_product: data.evaluate_product,
          evaluate_ship: data.evaluate_ship,
          evaluate_progress: data.evaluate_progress,
          images: dataImages_result,
          text: data.text,
          code_order: data.code_order,
        },
      });
      return {
        data: responsive.data,
      };
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
