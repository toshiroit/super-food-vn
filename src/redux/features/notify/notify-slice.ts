import { NotifyState } from "@/types/notify/notify";
import { createSlice } from "@reduxjs/toolkit";
import { addNewNotifyShop, getAllNotifyUser } from "./notify-thunks";

const notifyState: NotifyState = {
  dataAddNewNotify: {
    message: null,
    loading: false,
    error: null,
  },
  dataNotifyUser: {
    data: null,
    error: null,
    loading: false,
  },
};
const notifySlice = createSlice({
  name: "notify-slice",
  initialState: notifyState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(addNewNotifyShop.pending, (state) => {
        state.dataAddNewNotify.loading = true;
      })
      .addCase(addNewNotifyShop.rejected, (state, action) => {
        state.dataAddNewNotify.loading = false;
        state.dataAddNewNotify.error = action.error;
      })
      .addCase(addNewNotifyShop.fulfilled, (state, action) => {
        state.dataAddNewNotify.loading = false;
        state.dataAddNewNotify.message = action.payload.data;
      });
    builder
      .addCase(getAllNotifyUser.pending, (state) => {
        state.dataNotifyUser.loading = true;
      })
      .addCase(getAllNotifyUser.rejected, (state, action) => {
        state.dataNotifyUser.loading = false;
        state.dataNotifyUser.data = null;
        state.dataNotifyUser.error = action.error;
      })
      .addCase(getAllNotifyUser.fulfilled, (state, action) => {
        state.dataNotifyUser.loading = false;
        state.dataNotifyUser.data = action.payload.data?.data;
        state.dataNotifyUser.error = null;
      });
  },
});
export default notifySlice.reducer;
