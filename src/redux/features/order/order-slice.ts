import { OrderState } from "@/types/order/order";
import { createSlice } from "@reduxjs/toolkit";
import { getListOrderByCodeUser } from "./order-thunks";

const orderState: OrderState = {
  dataListOrder: {
    loading: false,
    error: null,
    message: null,
    data: null
  }
}
const orderSlice = createSlice({
  name: 'order-slice',
  initialState: orderState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getListOrderByCodeUser.pending, (state) => {
      state.dataListOrder.loading = true
    }).addCase(getListOrderByCodeUser.rejected, (state, action) => {
      state.dataListOrder.loading = false;
      state.dataListOrder.error = action.error
    }).addCase(getListOrderByCodeUser.fulfilled, (state, action) => {
      console.log(action.payload)
      state.dataListOrder.loading = false;
      state.dataListOrder.data = action.payload.data
    })
  },
})
export default orderSlice.reducer
