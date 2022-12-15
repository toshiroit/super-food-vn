import { SerializedError } from "@reduxjs/toolkit";

export type NotifyState = {
  dataAddNewNotify: {
    message: any;
    loading: boolean;
    error: SerializedError | null;
  };
  dataNotifyUser: {
    data: any;
    loading: boolean;
    error: any;
  };
};

export type NotifyData = {
  code_shop: string;
  title: string;
  info: string;
};

export type NotifyDataDetail = {
  code_notify: string;
  code_user: string;
  title_send: string;
  text_send: string;
  status: boolean;
  date_send: string;
};

export interface NotifyDataDetailItemIProps {
  item: NotifyDataDetail;
}
