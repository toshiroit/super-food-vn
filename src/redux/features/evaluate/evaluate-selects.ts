import { RootState } from "@/types/redux/redux";

export const selectEvaluateSliceDataAdd = (state: RootState) =>
  state.evaluateSlice.dataAddEvaluate;
export const selectEvaluateSliceDataCheckEvaluate = (state: RootState) =>
  state.evaluateSlice.dataCheckEvaluate;
export const selectEvaluateSliceDataEvaluateProduct = (state: RootState) =>
  state.evaluateSlice.dataEvaluateProduct;
