import { configAPI } from "@/config/config";
import { RequestServices } from "@/services/request-services";
import { LoginConfirmation, LoginPhone } from "@/types/login/login";
import { AuthCheckPhone } from "@/types/user/user";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";
import { login } from "src/utils/auth/auth";
import { object } from "yup";
const URL = configAPI.URL_BACKEND;

export const authGetMe = createAsyncThunk(
  "auth/getMe",
  async (data, thunkAPI) => {
    const responsive = await RequestServices.get({
      method: "GET",
      isAuthRequired: true,
      authorization: "",
      url: `${URL + "/auth/getMe"}`,
      contentType: "application/json",
    });
    return {
      data: responsive.data,
      error: responsive.error,
    };
  }
);
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
      // login(responsive.data.token as string);
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
      console.log(responsive.data);
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

export const authSendCode = createAsyncThunk(
  "auth/send-code",
  async ({ phone }: { phone: string }, thunkAPI) => {
    const responsive = await RequestServices.post({
      method: "POST",
      isAuthRequired: false,
      url: `${URL + "/auth/send-code"}`,
      authorization: "",
      contentType: "application/json",
      body: { phone },
    });
    return {
      error: responsive.error,
      data: responsive.data,
    };
  }
);
export const authVerifyCode = createAsyncThunk(
  "auth/verify-code",
  async ({ code }: { code: string }, thunkAPI) => {
    const responsive = await RequestServices.post({
      method: "POST",
      isAuthRequired: false,
      url: `${URL + "/auth/check-code"}`,
      authorization: "",
      contentType: "application/json",
      body: { code },
    });
    return {
      data: responsive.data,
      error: responsive.error,
    };
  }
);
export const authLogout = createAsyncThunk("auth-logout", async () => {
  const responsive = await RequestServices.post({
    method: "POST",
    isAuthRequired: false,
    url: `${URL + "/auth/logout"}`,
    authorization: "",
    contentType: "application/json",
    body: {},
  });
  return {
    message: responsive.data,
  };
});
