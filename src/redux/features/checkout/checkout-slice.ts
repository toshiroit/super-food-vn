import { CheckoutAction, CheckoutActionPayment, CheckoutState } from "@/types/checkout/checkout";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { checkoutOrder } from "./checkout-thunks";

const initialState: CheckoutState = {
  data: [],
  priceDiscount: 0,
  priceResult: 0,
  address: {
    code: '',
    fullName: ''
  },
  code_payment: '',
  dataCheckout: {
    loading: false,
    error: null,
    data: null
  }
}
const checkoutSlice = createSlice({
  name: 'checkout-slice',
  initialState: initialState,
  reducers: {
    addDataCheckout: (state, action: PayloadAction<CheckoutAction>) => {
      console.log(action.payload)
      state.address = action.payload.address
      state.data = action.payload.data
      state.priceResult = action.payload.priceResult
      state.priceDiscount = action.payload.priceDiscount
      return state;
    },
    addPayment: (state, action: PayloadAction<CheckoutActionPayment>) => {
      console.log(action.payload.code)
      state.code_payment = action.payload.code
      return state;
    },
    restCheckout: (state) => {
      state.dataCheckout.data = null
      state.dataCheckout.error = null
      state.dataCheckout.loading = false
    }
  },
  extraReducers(builder) {
    builder.addCase(checkoutOrder.pending, (state) => {
      state.dataCheckout.loading = true
    }).addCase(checkoutOrder.rejected, (state, action) => {
      state.dataCheckout.loading = false
      state.dataCheckout.error = action.error
    }).addCase(checkoutOrder.fulfilled, (state, action) => {
      state.dataCheckout.loading = false
      state.dataCheckout.data = action.payload.data
    })
  },
})
export const { addDataCheckout, addPayment, restCheckout } = checkoutSlice.actions
export default checkoutSlice.reducer
