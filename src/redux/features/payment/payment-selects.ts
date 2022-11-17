import { RootState } from "@/types/redux/redux";

export const selectPaymentSliceData = (state: RootState) => state.paymentSlice.dataPayment
