import { configAPI } from "@/config/config";
import { RequestServices } from "@/services/request-services";
import { LoginConfirmation, LoginPhone } from "@/types/login/login";
import { AuthCheckPhone } from "@/types/user/user";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { object } from "yup";
const URL = configAPI.URL_BACKEND;

export const authLoginPhone = createAsyncThunk(
  "auth/login-phone",
  async (data: LoginPhone, thunkAPI) => {
    try {
      const responsive = await RequestServices.post({
        method: "POST",
        isAuthRequired: false,
        url: `${URL + "/auth/login"}`,
        authorization: "",
        contentType: "application/json",
        body: data,
      });

      return {
        data: responsive.data,
        error: responsive.error,
      };
    } catch (error) {
      return {
        error: error,
      };
    }
  }
);

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
      return {
        data: responsive,
      };
    } catch (err: any) {
      console.log("Error : ", err);
    }
  }
);
export const authCheckPhone = createAsyncThunk(
  "auth/check-phone",
  async (data: AuthCheckPhone, thunkAPI) => {
    try {
      const responsive = await RequestServices.post({
        method: "POST",
        isAuthRequired: false,
        url: `${URL + "/auth/check-phone"}`,
        authorization: "",
        contentType: "application/json",
        body: { phone: data.phone },
      });
      return {
        error: responsive.error,
        data: responsive.data,
      };
    } catch (error) {}
  }
);
