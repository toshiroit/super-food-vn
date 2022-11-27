import { SerializedError } from "@reduxjs/toolkit";
export type ChatState = {
  dataMessenger: {
    data: any;
    loading: boolean;
    error: SerializedError | null;
  };
};
export type ChatDataSend = {
  type_chat: "1";
  text_chat: string;
  code_shop: string;
};
