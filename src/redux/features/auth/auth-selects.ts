import { RootState } from "@/types/redux/redux";

export const selectAuthLoading = (state: RootState) => state.authSlice.loading;
export const selectAuthData = (state: RootState) => state.authSlice.data;
export const selectAuthSliceDataAll = (state: RootState) => state.authSlice;
export const selectAuthError = (state: RootState) => state.authSlice.error;
export const selectAuthDataCheckPhone = (state: RootState) =>
  state.authSlice.dataCheckPhone;
export const selectAuthVerifyCode = (state: RootState) =>
  state.authSlice.verifyCode;

export const selectAuthSliceDataLoginRegister = (state: RootState) =>
  state.authSlice.login_register;

export const selectAuthSliceDataVerifyCode = (state: RootState) =>
  state.authSlice.data_verifyCode;

export const selectAuthSliceDataSendCode = (state: RootState) =>
  state.authSlice.dataSendCode;
export const selectAuthSliceDataRestPassword = (state: RootState) =>
  state.authSlice.data_restPass;
