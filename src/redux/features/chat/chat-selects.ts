import { RootState } from "@/types/redux/redux";

export const selectChatSliceDataMessenger = (state: RootState) =>
  state.chatSlice.dataMessenger;
