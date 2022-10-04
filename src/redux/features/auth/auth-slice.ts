import { AuthUserState } from "./../../../types/user/user";
import {
  authCheckPhone,
  authLogin,
  authLoginPhone,
} from "@/redux/features/auth/auth-thunks";
import { createAction, createSlice } from "@reduxjs/toolkit";
const incrementBy = createAction("incrementBy");
const initialState: AuthUserState = {
  loading: false,
  data: null,
  error: null,
  checkPhone: false,
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
      return state;
    },
  },

  extraReducers(builder) {
    builder
      .addCase(authLogin.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(authLogin.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error;
      })
      .addCase(authLogin.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload?.data;
      });
    builder
      .addCase(authCheckPhone.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(authCheckPhone.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error;
      })
      .addCase(authCheckPhone.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload?.data;
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
        console.log(action);
        state.loading = false;
        state.data = action.payload.data;
        state.error = action.payload.error;
      });
  },
});

export const { loginUserPhone, restartAuth } = authSlice.actions;
export default authSlice.reducer;
