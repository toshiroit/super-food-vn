import { CheckoutState } from "@/types/checkout/checkout";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: CheckoutState = {
  data: [],
  priceDiscount: 0,
  priceResult: 0
}
const checkoutSlice = createSlice({
  name: 'checkout-slice',
  initialState: initialState,
  reducers: {
    addDataCheckout: (state, action: PayloadAction<CheckoutState>) => {
      state = action.payload
      return state;
    }
  },
  extraReducers(builder) {

  },
})
export const { addDataCheckout } = checkoutSlice.actions
export default checkoutSlice.reducer
