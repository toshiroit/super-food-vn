import { OrderState } from "@/types/order/order";
import { createSlice } from "@reduxjs/toolkit";
import {
  confirmOrderSuccess,
  getListOrderByCodeUser,
  getOrderDetailByCodeOrder,
} from "./order-thunks";

const orderState: OrderState = {
  dataListOrder: {
    loading: false,
    error: null,
    message: null,
    data: null,
  },
  dataOrderDetail: {
    loading: false,
    error: null,
    message: null,
    data: null,
  },
  dataOrderAction: {
    loading: false,
    error: null,
    data: null,
  },
};
const orderSlice = createSlice({
  name: "order-slice",
  initialState: orderState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getListOrderByCodeUser.pending, (state) => {
        state.dataListOrder.loading = true;
      })
      .addCase(getListOrderByCodeUser.rejected, (state, action) => {
        state.dataListOrder.loading = false;
        state.dataListOrder.data = null;
        state.dataListOrder.error = action.error;
      })
      .addCase(getListOrderByCodeUser.fulfilled, (state, action) => {
        state.dataListOrder.loading = false;
        state.dataListOrder.error = null;
        state.dataListOrder.data = action.payload.data;
      });

    builder
      .addCase(getOrderDetailByCodeOrder.pending, (state) => {
        state.dataOrderDetail.loading = true;
        state.dataOrderDetail.data = null;
      })
      .addCase(getOrderDetailByCodeOrder.rejected, (state, action) => {
        state.dataOrderDetail.loading = false;
        state.dataOrderDetail.error = action.error;
      })
      .addCase(getOrderDetailByCodeOrder.fulfilled, (state, action) => {
        state.dataOrderDetail.loading = false;
        state.dataOrderDetail.data = action.payload.data.data[0];
      });
    builder
      .addCase(confirmOrderSuccess.pending, (state) => {
        state.dataOrderAction.loading = true;
      })
      .addCase(confirmOrderSuccess.rejected, (state, action) => {
        state.dataOrderAction.loading = false;
        state.dataOrderAction.error = action.error;
      })
      .addCase(confirmOrderSuccess.fulfilled, (state, action) => {
        state.dataOrderAction.loading = false;
        state.dataOrderAction.data = action.payload.data;
      });
  },
});
export default orderSlice.reducer;
