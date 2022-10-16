import { RootState } from "@/types/redux/redux";

export const selectCartSliceData = (state: RootState) => state.cartSlice.data
export const selectCartSliceLoading = (state: RootState) => state.cartSlice.loading
export const selectCartSliceDataLocal = (state: RootState) => state.cartSlice.dataLocal
export const selectCartSlicePriceResult = (state: RootState) => state.cartSlice.priceResult
export const selectCartSLiceCodeGift = (state: RootState) => state.cartSlice.codeGift
export const selectCartSlicePriceDiscount = (state: RootState) => state.cartSlice.priceDiscount
