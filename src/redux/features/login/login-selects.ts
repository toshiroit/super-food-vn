import { RootState } from "@/types/redux/redux";

export const selectLoginPhone = (state: RootState) => state.loginSlice.phone;
export const selectLoginFullData = (state: RootState) => state.loginSlice;
