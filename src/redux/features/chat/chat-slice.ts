import { ChatState } from "@/types/chat/chat";
import { createSlice } from "@reduxjs/toolkit";
import {
  getAllMessengerUserByShop,
  sendMessengerChatByUser,
} from "./chat-thunks";

const chatState: ChatState = {
  dataMessenger: {
    data: null,
    loading: false,
    error: null,
  },
  dataSendMessenger: {
    data: null,
    loading: false,
    error: null,
  },
};
const chatSlice = createSlice({
  name: "chat-slice",
  initialState: chatState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getAllMessengerUserByShop.pending, (state) => {
        state.dataMessenger.loading = true;
      })
      .addCase(getAllMessengerUserByShop.rejected, (state, action) => {
        state.dataMessenger.loading = false;
        state.dataMessenger.error = action.error;
      })
      .addCase(getAllMessengerUserByShop.fulfilled, (state, action) => {
        state.dataMessenger.loading = false;
        state.dataMessenger.data = action.payload.data.data;
      });
    builder
      .addCase(sendMessengerChatByUser.pending, (state) => {
        state.dataSendMessenger.loading = true;
      })
      .addCase(sendMessengerChatByUser.rejected, (state, action) => {
        state.dataSendMessenger.loading = false;
        state.dataSendMessenger.error = action.error;
      })
      .addCase(sendMessengerChatByUser.fulfilled, (state, action) => {
        state.dataSendMessenger.loading = false;
        state.dataSendMessenger.data = action.payload.data;
      });
  },
});
export default chatSlice.reducer;
