import { configAPI } from "@/config/config";
import { RequestServices } from "@/services/request-services";
import { VoucherDataCheck } from "@/types/voucher/voucher";
import { createAsyncThunk } from "@reduxjs/toolkit";

const URL = configAPI.URL_BACKEND;
export const checkVoucherProductByVoucherShop = createAsyncThunk(
  "voucher/check-voucher-product-by-voucher-shop",
  async (data: VoucherDataCheck, thunkAPI) => {
    try {
      const responsive = await RequestServices.get({
        method: "GET",
        authorization: "",
        contentType: "application/json",
        isAuthRequired: true,
        url: `${
          URL +
          `/voucher/check-voucher?code_product=${JSON.stringify(
            data.code_product
          )}&code_w_voucher=${data.code_w_voucher}`
        }`,
      });
      return {
        data: responsive.data,
      };
    } catch (error) {
      return thunkAPI.rejectWithValue({
        message: error,
      });
    }
  }
);
