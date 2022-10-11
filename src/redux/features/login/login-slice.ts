import { LoginPayloadAction, LoginState } from "@/types/login/login";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
const initialState: LoginState = {
  fullName: "",
  username: "",
  phone: "",
  email: "",
  password: "",
  passwordConfirmation: "",
  role: "USER",
  status: 0,
  token: "",
  verifyCodeUser: "",
};
const loginSlice = createSlice({
  name: "loginSlice",
  initialState,
  reducers: {
    addPhone: (state, action: PayloadAction<LoginPayloadAction>) => {
      state.phone = action.payload.phone || "";
      return state;
    },
    addPassword: (state, action: PayloadAction<LoginPayloadAction>) => {
      state.password = action.payload.password || "";
      state.passwordConfirmation = action.payload.passwordConfirmation || "";
      return state;
    },
  },
});
export const { addPhone, addPassword } = loginSlice.actions;
export default loginSlice.reducer;
