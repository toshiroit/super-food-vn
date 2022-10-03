import { authLogin } from "@/redux/features/auth/auth-thunks";
import { createAction, createSlice } from "@reduxjs/toolkit";
const incrementBy = createAction("incrementBy");
const authSlice = createSlice({
  name: "authSlice",
  initialState: {
    name: "",
  },
  reducers: {
    loginUserPhone: (state, action) => {
      state.name = "124";
    },
  },

  extraReducers: {
  },
});

export const { loginUserPhone } = authSlice.actions;
export default authSlice.reducer;
