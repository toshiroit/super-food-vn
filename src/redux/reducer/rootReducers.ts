import { combineReducers } from "@reduxjs/toolkit";
import authSlice from "../features/auth/auth-slice";
import displaySlice from "../features/display/display-slice";
import loginSlice from "../features/login/login-slice";
import userSlice from "../features/user/user-slice";

export default combineReducers({
  displaySlice,
  loginSlice,
  authSlice,
  userSlice
});
