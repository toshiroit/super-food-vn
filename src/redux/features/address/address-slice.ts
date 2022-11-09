import { AddressState } from "@/types/address/address";
import { createSlice } from "@reduxjs/toolkit";
import { getAddressByUser } from "./address-thunks";

const addressState: AddressState<any> = {
  data: null,
  loading: false,
  error: null,
  message: null
}
const addressSlice = createSlice({
  name: 'address-slice',
  initialState: addressState,
  reducers: {

  },
  extraReducers(builder) {
    builder.addCase(getAddressByUser.pending, (state) => {
      state.loading = true
    }).addCase(getAddressByUser.rejected, (state, action) => {
      state.loading = false
      state.error = action.error
    }).addCase(getAddressByUser.fulfilled, (state, action) => {
      state.loading = false
      state.data = action.payload.data.data
    })
  },
})
export default addressSlice.reducer
