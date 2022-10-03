import { RootState } from "@/types/redux/redux";
export const selectDisplayIsShowLogin = (state: RootState) =>
  state.displaySlice.displayLogin;
export const selectDisplayShowLogin = (state: RootState) =>
  state.displaySlice.displayLogin.isShowPhone;
