import { RootState } from "@/types/redux/redux";

export const selectProductSliceLoading = (state: RootState) => state.productSlice.loading;
export const selectProductSliceMessage = (state: RootState) => state.productSlice.message;
export const selectProductSliceData = (state: RootState) => state.productSlice.data;
export const selectProductSliceDataAll = (state: RootState) => state.productSlice.dataAll;
export const selectProductSliceError = (state: RootState) => state.productSlice.error
