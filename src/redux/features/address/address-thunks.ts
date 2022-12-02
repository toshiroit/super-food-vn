import { configAPI } from "@/config/config";
import { RequestServices } from "@/services/request-services";
import {
  AddressItem,
  DataAddress,
  ItemAddressShow,
} from "@/types/address/address";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosError } from "axios";

const URL = configAPI.URL_BACKEND;
export const getAddressByUser = createAsyncThunk(
  "address/get-address-by-user",
  async (data, thunkAPI) => {
    const responsive = await RequestServices.get({
      method: "GET",
      authorization: "",
      isAuthRequired: true,
      contentType: "application/json",
      url: `${URL + `/address/get-address`}`,
    });
    return {
      data: responsive.data,
      error: responsive.error,
    };
  }
);

export const updateAddressUserByCode = createAsyncThunk(
  "address/update-address-user-by-code",
  async (data: ItemAddressShow, thunkAPI) => {
    const responsive = await RequestServices.put({
      method: "PUT",
      authorization: "",
      isAuthRequired: true,
      contentType: "application/json",
      url: `${URL + "/address/update-address-user-by-code"}`,
      body: {
        data: data,
      },
    });
  }
);

export const getAddressDetailUserByCode = createAsyncThunk(
  "address/detail-address-by-code",
  async (data: { code_address: string }, thunkAPI) => {
    const responsive = await RequestServices.get({
      method: "GET",
      authorization: "",
      isAuthRequired: true,
      contentType: "application/json",
      url: `${
        URL + `/address/detail-address?code_address=${data.code_address}`
      }`,
    });
    return {
      data: responsive.data,
    };
  }
);
export const addAddressByUser = createAsyncThunk(
  "address/add-address-by-user",
  async (data: AddressItem, thunkAPI) => {
    try {
      const responsive = await RequestServices.post({
        method: "POST",
        authorization: "",
        isAuthRequired: true,
        contentType: "application/json",
        url: `${URL + `/address/add-address`}`,
        body: {
          data: data.value,
        },
      });
      return {
        data: responsive.data,
      };
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data?.error);
    }

    // return {
    //   data: responsive.data,
    // };
  }
);

export const getAllProvinces = createAsyncThunk(
  "address/get-all-provinces",
  async (data: { value: any }, thunkAPI) => {
    const responsive = await RequestServices.get({
      method: "GET",
      authorization: "",
      isAuthRequired: true,
      contentType: "application/json",
      url: `https://provinces.open-api.vn/api/?depth=${data.value}`,
    });
    return {
      data: responsive.data,
    };
  }
);
