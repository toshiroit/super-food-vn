import { RootState } from "@/types/redux/redux";

export const selectDataCheckout = (state: RootState) => state.checkoutSlice
export const selectDataPayment = (state: RootState) => state.checkoutSlice.code_payment
