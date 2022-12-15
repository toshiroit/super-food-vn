import { RootState } from "@/types/redux/redux";

export const selectVoucherSliceDataVoucherCheck = (state: RootState) =>
  state.voucherSlice.dataCheckVoucher;
