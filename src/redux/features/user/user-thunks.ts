import { configAPI } from "@/config/config";
import { RequestServices } from "@/services/request-services";
import {
  AuthUpdatePassword,
  UpdateUserW1Info,
  UserDataInfo,
} from "@/types/user/user";
import { createAsyncThunk } from "@reduxjs/toolkit";
const URL = configAPI.URL_BACKEND;

export const updatePasswordUser = createAsyncThunk(
  "user/update-password-user",
  async (data: AuthUpdatePassword, thunkAPI) => {
    try {
      const responsive = await RequestServices.put({
        method: "PUT",
        authorization: "",
        isAuthRequired: true,
        contentType: "application/json",
        url: `${URL + "/auth/update-password"}`,
        body: {
          phone: data.phone,
          password: data.password_root,
          new_password: data.password_new,
        },
      });
      return {
        data: responsive.data,
      };
    } catch (error: any) {
      return thunkAPI.rejectWithValue({
        message: error.response?.data?.message || "",
      });
    }
  }
);

export const updateUserInfoW1 = createAsyncThunk(
  "user/update-user-w1",
  async (data: UserDataInfo, thunkAPI) => {
    const formData = new FormData();
    if (data.box1.avatar_file) {
      formData.append("image", data.box1.avatar_file);
    }
    const responsiveImages = await RequestServices.post({
      method: "POST",
      authorization: "",
      isAuthRequired: true,
      contentType: "multipart/form-data",
      url: `${URL + "/upload/image"}`,
      body: formData,
    });
    if (responsiveImages) {
      const date_birth = `${data.box1.date.day}-${data.box1.date.month}-${data.box1.date.five}`;
      const responsive = await RequestServices.put({
        method: "PUT",
        authorization: "",
        isAuthRequired: true,
        contentType: "application/json",
        url: `${URL + "/user/update-user-w1"}`,
        body: {
          full_name: data.box1.full_name,
          avatar: responsiveImages.data?.data.url,
          date: new Date(date_birth).toLocaleDateString(),
          sex: data.box1.sex,
        },
      });
      return {
        data: responsive.data,
      };
    }
  }
);
