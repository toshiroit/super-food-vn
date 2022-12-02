import { RootState } from "@/types/redux/redux";
export const selectAddressSliceDataAddress = (state: RootState) =>
  state.addressSlice.dataAddress;
export const selectAddressSliceDataAddAddress = (state: RootState) =>
  state.addressSlice.dataAddAddress;
export const selectAddressSliceDataAddressDetail = (state: RootState) =>
  state.addressSlice.dataAddressDetail;
export const selectAddressSliceDataUpdateAddress = (state: RootState) =>
  state.addressSlice.dataUpdateAddress;
