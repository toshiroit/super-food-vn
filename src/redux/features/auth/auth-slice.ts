import { AuthUserState } from "./../../../types/user/user";
import {
  authCheckPhone,
  authGetMe,
  authLogin,
  authLoginPhone,
  authLogout,
  authSendCode,
  authVerifyCode,
} from "@/redux/features/auth/auth-thunks";
import { createAction, createSlice } from "@reduxjs/toolkit";
const incrementBy = createAction("incrementBy");
const initialState: AuthUserState = {
  loading: false,
  data: null,
  error: null,
  checkPhone: false,
  verifyCode: null,
};
const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    loginUserPhone: (state, action) => {},
    restartAuth: (state) => {
      state.loading = false;
      state.data = null;
      state.error = null;
      state.checkPhone = false;
      state.dataCheckPhone = false;
      return state;
    },
  },

  extraReducers(builder) {
    builder
      .addCase(authCheckPhone.pending, (state, action) => {})
      .addCase(authCheckPhone.rejected, (state, action) => {
        state.error = action.error;
      })
      .addCase(authCheckPhone.fulfilled, (state, action) => {
        state.dataCheckPhone = action.payload?.data;
      });
    builder
      .addCase(authLoginPhone.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(authLoginPhone.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error;
      })
      .addCase(authLoginPhone.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload.data;
        state.error = action.payload.error;
      });
    builder
      .addCase(authGetMe.pending, (state) => {
        state.loading = true;
      })
      .addCase(authGetMe.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error;
      })
      .addCase(authGetMe.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload.data;
        state.error = action.payload.error;
      });
    builder
      .addCase(authSendCode.pending, (state) => {
        state.loading = true;
      })
      .addCase(authSendCode.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error;
      })
      .addCase(authSendCode.fulfilled, (state, action) => {
        state.loading = false;
        state.dataCheckPhone = action.payload.data;
      });
    builder
      .addCase(authVerifyCode.pending, (state) => {
        state.loading = true;
      })
      .addCase(authVerifyCode.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error;
      })
      .addCase(authVerifyCode.fulfilled, (state, action) => {
        state.loading = false;
        state.verifyCode = action.payload.data;
      });
    builder
      .addCase(authLogout.pending, (state) => {
        state.loading = true;
      })
      .addCase(authLogout.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error;
      })
      .addCase(authLogout.fulfilled, (state, action) => {
        state.data = null;
      });
  },
});

export const { loginUserPhone, restartAuth } = authSlice.actions;
export default authSlice.reducer;
