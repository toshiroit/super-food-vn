import { RootState } from "@/types/redux/redux";

export const selectChatSliceDataMessenger = (state: RootState) =>
  state.chatSlice.dataMessenger;

export const selectChatSliceSendChat = (state: RootState) =>
  state.chatSlice.dataSendMessenger;
