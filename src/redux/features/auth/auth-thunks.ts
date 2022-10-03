import { configAPI } from "@/config/config";
import { RequestServices } from "@/services/request-services";
import { LoginConfirmation } from "@/types/login/login";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { object } from "yup";
const URL = configAPI.URL_BACKEND;
export const authLogin = createAsyncThunk(
  "auth/login",
  async (user: LoginConfirmation, thunkAPI) => {
    try {
      console.log(`${URL} + '/auth/login`);
      const responsive = await RequestServices.post({
        method: "POST",
        isAuthRequired: false,
        url: `${URL + "/auth/login"}`,
        authorization: "",
        contentType: "application/json",
        body: user,
      });
      console.log(responsive);
      return {
        data: responsive,
      };
    } catch (err: any) {
      console.log("Error : ", err);
    }
  }
);
