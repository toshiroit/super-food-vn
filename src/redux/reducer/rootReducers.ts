import { combineReducers } from "@reduxjs/toolkit";
import displaySlice from "../features/display/display-slice";
import loginSlice from "../features/login/login-slice";

export default combineReducers({
  displaySlice,
  loginSlice,
});
