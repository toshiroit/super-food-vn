import { ChatState } from "@/types/chat/chat";
import { createSlice } from "@reduxjs/toolkit";
import { getAllMessengerUserByShop } from "./chat-thunks";

const chatState: ChatState = {
  dataMessenger: {
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
  },
});
export default chatSlice.reducer;
