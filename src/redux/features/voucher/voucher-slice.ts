import { VoucherState } from "@/types/voucher/voucher";
import { createSlice } from "@reduxjs/toolkit";
import { checkVoucherProductByVoucherShop } from "./voucher-thunks";
const voucherState: VoucherState = {
  dataCheckVoucher: {
    loading: false,
    error: null,
    data: null,
  },
};
const voucherSlice = createSlice({
  name: "voucher-slice",
  initialState: voucherState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(checkVoucherProductByVoucherShop.pending, (state) => {
        state.dataCheckVoucher.loading = true;
      })
      .addCase(checkVoucherProductByVoucherShop.rejected, (state, action) => {
        state.dataCheckVoucher.loading = false;
        state.dataCheckVoucher.error = action.payload;
        state.dataCheckVoucher.data = null;
      })
      .addCase(checkVoucherProductByVoucherShop.fulfilled, (state, action) => {
        state.dataCheckVoucher.loading = false;
        state.dataCheckVoucher.error = null;
        state.dataCheckVoucher.data = action.payload.data;
      });
  },
});
export default voucherSlice.reducer;
