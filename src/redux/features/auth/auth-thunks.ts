import { configAPI } from "@/config/config";
import { RequestServices } from "@/services/request-services";
import { LoginConfirmation, LoginPhone } from "@/types/login/login";
import { AuthCheckPhone } from "@/types/user/user";
import { createAsyncThunk } from "@reduxjs/toolkit";
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
      if (responsive.data.message) {
        return thunkAPI.rejectWithValue("Tài khoản hoặc mật khẩu không đúng");
      }
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
      return {
        error: err,
      };
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
    try {
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
    } catch (error: any) {
      return thunkAPI.rejectWithValue({
        code: error.response.status,
        message: error.response.data.message || " Không xác định ",
      });
    }
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

export const authRestPassword = createAsyncThunk(
  "auth/auth-rest-password",
  async (data: { phone: string }, thunkAPI) => {
    try {
      const responsive = await RequestServices.post({
        method: "POST",
        authorization: "",
        contentType: "application/json",
        isAuthRequired: true,
        url: `${URL + `/auth/rest-password`}`,
        body: {
          phone: data.phone,
        },
      });
      return {
        data: responsive.data,
      };
    } catch (error) {
      return thunkAPI.rejectWithValue({
        message: error,
      });
    }
  }
);
