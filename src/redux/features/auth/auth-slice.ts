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
const initialState: AuthUserState = {
  loading: false,
  data: null,
  error: null,
  checkPhone: false,
  verifyCode: null,
  login_register: {
    loading: false,
    error: null,
  },
  data_verifyCode: {
    loading: false,
    error: null,
    message: null,
  },
  dataSendCode: {
    error: null,
    loading: false,
    message: null,
  },
};
const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
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
        state.login_register.loading = true;
      })
      .addCase(authLoginPhone.rejected, (state, action) => {
        state.login_register.loading = false;
        state.error = action.error;
      })
      .addCase(authLoginPhone.fulfilled, (state, action) => {
        state.login_register.loading = false;
        state.data = action.payload.data?.data;
        localStorage.setItem("token", action.payload.data?.token);
        state.error = action.payload.error;
      });
    builder
      .addCase(authGetMe.pending, (state) => {})
      .addCase(authGetMe.rejected, (state, action) => {
        state.error = action.error;
      })
      .addCase(authGetMe.fulfilled, (state, action) => {
        state.data = action.payload.data.data[0];
      });
    builder
      .addCase(authSendCode.pending, (state) => {
        state.dataSendCode.loading = true;
      })
      .addCase(authSendCode.rejected, (state, action) => {
        state.dataSendCode.loading = false;
        state.dataSendCode.error = action.error;
      })
      .addCase(authSendCode.fulfilled, (state, action) => {
        state.dataSendCode.loading = false;
        state.dataSendCode.message = action.payload.data;
      });
    builder
      .addCase(authVerifyCode.pending, (state) => {
        state.data_verifyCode.loading = true;
      })
      .addCase(authVerifyCode.rejected, (state, action) => {
        state.data_verifyCode.loading = false;
        state.data_verifyCode.error = action.payload;
      })
      .addCase(authVerifyCode.fulfilled, (state, action) => {
        state.data_verifyCode.loading = false;
        state.data_verifyCode.message = action.payload?.data;
      });
    builder
      .addCase(authLogin.pending, (state) => {
        state.loading = true;
      })
      .addCase(authLogin.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error;
      })
      .addCase(authLogin.fulfilled, (state, action) => {
        state.loading = false;
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
        state.loading = false;
        state.data = null;
      });
  },
});

export const { restartAuth } = authSlice.actions;
export default authSlice.reducer;
