import { NotifyState } from "@/types/notify/notify";
import { createSlice } from "@reduxjs/toolkit";
import { addNewNotifyShop } from "./notify-thunks";

const notifyState: NotifyState = {
  dataAddNewNotify: {
    message: null,
    loading: false,
    error: null
  }
}
const notifySlice = createSlice({
  name: 'notify-slice',
  initialState: notifyState,
  reducers: {

  },
  extraReducers(builder) {
    builder.addCase(addNewNotifyShop.pending, (state) => {
      state.dataAddNewNotify.loading = true
    }).addCase(addNewNotifyShop.rejected, (state, action) => {
      state.dataAddNewNotify.loading = false
      state.dataAddNewNotify.error = action.error
    }).addCase(addNewNotifyShop.fulfilled, (state, action) => {
      state.dataAddNewNotify.loading = false
      state.dataAddNewNotify.message = action.payload.data
    })
  },
})
export default notifySlice.reducer;
