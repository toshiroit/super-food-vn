import { RootState } from "@/types/redux/redux";

export const selectNotifySliceDataNotify = (state: RootState) =>
  state.notifySlice.dataAddNewNotify;
export const selectNotifySliceDataNotifyUser = (state: RootState) =>
  state.notifySlice.dataNotifyUser;
