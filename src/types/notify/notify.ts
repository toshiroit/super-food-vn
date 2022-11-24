import { SerializedError } from "@reduxjs/toolkit";

export type NotifyState = {
  dataAddNewNotify: {
    message: any;
    loading: boolean;
    error: SerializedError | null;
  }
}

export type NotifyData = {
  code_shop: string;
  title: string;
  info: string;
}
