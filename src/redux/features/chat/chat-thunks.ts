import { configAPI } from "@/config/config";
import { RequestServices } from "@/services/request-services";
import { ChatDataSend } from "@/types/chat/chat";
import { createAsyncThunk } from "@reduxjs/toolkit";
const URL = configAPI.URL_BACKEND;
export const getAllMessengerUserByShop = createAsyncThunk(
  "messenger/get-all-messenger-user-by-shop",
  async (data: { code_shop: string; limit: number }, thunkAPI) => {
    const responsive = await RequestServices.get({
      method: "GET",
      authorization: "",
      isAuthRequired: true,
      contentType: "application/json",
      url: `${
        URL +
        `/messenger/get-all-messenger?code_shop=${data.code_shop}&limit=${data.limit}`
      }`,
    });
    return {
      data: responsive.data,
    };
  }
);

export const sendMessengerChatByUser = createAsyncThunk(
  "messenger/send-messenger-user-by-shop",
  async (data: ChatDataSend) => {
    const responsive = await RequestServices.post({
      method: "POST",
      authorization: "",
      isAuthRequired: true,
      contentType: "application/json",
      url: `${URL + `/messenger/send-messenger?code_shop=${data.code_shop}`}`,
      body: {
        text_chat: data.text_chat,
        type_chat: data.type_chat,
        code_shop: data.code_shop,
      },
    });
    return {
      data: responsive.data,
    };
  }
);
