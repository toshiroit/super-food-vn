import { SerializedError } from "@reduxjs/toolkit";

export type ShopState = {
  dataDetailShop: {
    loading: boolean;
    data: any;
    error: SerializedError | null;
  };
  dataProductShop: {
    loading: boolean;
    data: any;
    category_all: any;
    error: SerializedError | null;
  },
  dataFilterProductShop: {
    text_search: string | null;
    category_code: string | null;
    type: string | null
  },
  followShopByUser: {
    message: string | null;
    loading: boolean;
    error: any
  }
};

export type FilterProductAction = {
  text_search?: string;
  category_code?: string;
  type?: string;
}
