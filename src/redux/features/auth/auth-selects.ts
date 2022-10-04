import { RootState } from "@/types/redux/redux";

export const selectAuthLoading = (state: RootState) => state.authSlice.loading;
export const selectAuthData = (state: RootState) => state.authSlice.data;
export const selectAuthError = (state: RootState) => state.authSlice.error;
