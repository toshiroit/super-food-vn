import { configAPI } from "@/config/config";
import { RequestServices } from "@/services/request-services";
import { NotifyData } from "@/types/notify/notify";
import { createAsyncThunk } from "@reduxjs/toolkit";

const URL = configAPI.URL_BACKEND
export const addNewNotifyShop = createAsyncThunk(
  'notify/add-new-notify-shop',
  async (data: NotifyData, thunkAPI) => {
    const responsive = await RequestServices.post({
      method: 'POST',
      isAuthRequired: true,
      authorization: '',
      contentType: 'application/json',
      url: `${URL + '/notify/add-new-notify-shop'}`,
      body: {
        code_shop: data.code_shop,
        title: data.title,
        info: data.info
      }
    })
    return {
      data: responsive.data
    }
  }
)
