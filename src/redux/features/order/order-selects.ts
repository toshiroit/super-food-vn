import { RootState } from "@/types/redux/redux";

export const selectOrderSliceDataListOrder = (state: RootState) =>
  state.orderSlice.dataListOrder;
export const selectOrderSliceDataOrderDetail = (state: RootState) =>
  state.orderSlice.dataOrderDetail;
export const selectOrderSLiceDataOrderAction = (state: RootState) =>
  state.orderSlice.dataOrderAction;
