import { configAPI } from "@/config/config";
import { RequestServices } from "@/services/request-services";
import { UpdateUserW1Info } from "@/types/user/user";
import { createAsyncThunk } from "@reduxjs/toolkit";
const URL = configAPI.URL_BACKEND;

export const updateUserInfoW1 = createAsyncThunk('user/update-user-w1',
  async (data: UpdateUserW1Info, thunkAPI) => {
    const responsive = RequestServices.put({
      method: 'PUT',
      authorization: '',
      isAuthRequired: true,
      contentType: 'application/json',
      url: `${URL + '/user/update-user-w1'}`,
      body: {
        fullName: data.fullName,
        sex: data.sex,
        date: data.date
      }
    })
    return {
      data: responsive.data,
      error: responsive.error
    }

  })
