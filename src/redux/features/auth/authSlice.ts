import { createSlice } from "@reduxjs/toolkit";

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
});

export const { loginUserPhone } = authSlice.actions;
export default authSlice.reducer;
