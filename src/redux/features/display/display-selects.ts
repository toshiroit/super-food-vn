import { RootState } from "@/types/redux/redux";
export const selectDisplayIsShow = (state: RootState) => state.displaySlice;
export const selectDisplayShowLogin = (state: RootState) =>
  state.displaySlice.displayLogin.isShow;
