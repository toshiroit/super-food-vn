import { PaymentState } from "@/types/payment/payment";
import { createSlice } from "@reduxjs/toolkit";
import { getAllPayment } from "./payment-thunks";

const paymentState: PaymentState = {
  dataPayment: {
    loading: false,
    error: null,
    data: null

  }
}
const paymentSlice = createSlice({
  name: 'payment-slice',
  initialState: paymentState,
  reducers: {

  },
  extraReducers(builder) {
    builder.addCase(getAllPayment.pending, (state) => {
      state.dataPayment.loading = true
    }).addCase(getAllPayment.rejected, (state, action) => {
      state.dataPayment.loading = false
      state.dataPayment.error = action.error
    }).addCase(getAllPayment.fulfilled, (state, action) => {
      state.dataPayment.loading = false
      state.dataPayment.data = action.payload.data
    })
  },
})

export default paymentSlice.reducer
