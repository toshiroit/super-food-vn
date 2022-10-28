import { RootState } from "@/types/redux/redux";

export const selectAddressSliceData = (state: RootState) => state.addressSlice.data
export const selectAddressSliceError = (state: RootState) => state.addressSlice.error
export const selectAddressSliceLoading = (state: RootState) => state.addressSlice.loading
export const selectAddressSliceMessage = (state: RootState) => state.addressSlice.message
