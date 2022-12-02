import { AddressState } from "@/types/address/address";
import { createSlice } from "@reduxjs/toolkit";
import {
  addAddressByUser,
  getAddressByUser,
  getAddressDetailUserByCode,
  getAllProvinces,
} from "./address-thunks";

const addressState: AddressState<any> = {
  dataAddress: {
    data: null,
    loading: false,
    error: null,
    message: null,
  },
  dataAddAddress: {
    loading: false,
    error: null,
    message: null,
  },
  dataProvincesAPI: {
    data: [],
    error: null,
    loading: false,
  },
  dataAddressDetail: {
    loading: false,
    data: null,
    error: null,
  },
  dataUpdateAddress: {
    loading: false,
    data: null,
    error: null,
  },
};
const addressSlice = createSlice({
  name: "address-slice",
  initialState: addressState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getAddressByUser.pending, (state) => {
        state.dataAddress.loading = true;
      })
      .addCase(getAddressByUser.rejected, (state, action) => {
        state.dataAddress.loading = false;
        state.dataAddress.error = action.error;
      })
      .addCase(getAddressByUser.fulfilled, (state, action) => {
        state.dataAddress.loading = false;
        state.dataAddress.data = action.payload.data.data;
      });
    builder
      .addCase(addAddressByUser.pending, (state) => {
        state.dataAddAddress.loading = true;
      })
      .addCase(addAddressByUser.rejected, (state, action) => {
        state.dataAddAddress.loading = false;
        state.dataAddAddress.message = null;
        state.dataAddAddress.error = (action.payload as string) || "";
      })
      .addCase(addAddressByUser.fulfilled, (state, action) => {
        state.dataAddAddress.loading = false;
        state.dataAddAddress.error = null;
        state.dataAddAddress.message = action.payload.data;
      });
    builder
      .addCase(getAllProvinces.pending, (state) => {
        state.dataProvincesAPI.loading = true;
      })
      .addCase(getAllProvinces.rejected, (state, action) => {
        state.dataProvincesAPI.loading = false;
        state.dataProvincesAPI.error = action.error;
      })
      .addCase(getAllProvinces.fulfilled, (state, action) => {
        state.dataProvincesAPI.loading = false;
        state.dataProvincesAPI.data = action.payload.data;
      });
    builder
      .addCase(getAddressDetailUserByCode.pending, (state) => {
        state.dataAddressDetail.loading = true;
      })
      .addCase(getAddressDetailUserByCode.rejected, (state, action) => {
        state.dataAddressDetail.loading = false;
        state.dataAddressDetail.error = action.error;
      })
      .addCase(getAddressDetailUserByCode.fulfilled, (state, action) => {
        state.dataAddressDetail.loading = false;
        console.log(action.payload.data.data);
        state.dataAddressDetail.data = action.payload.data.data;
      });
  },
});
export default addressSlice.reducer;
