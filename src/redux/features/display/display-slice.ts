import { DisplayState, ShowDisplayLogin } from "@/types/display/display";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
const initialState: DisplayState | null = {
  displayLogin: {
    isShowFixed: false,
    isShowPhone: false,
    isShowCode: false,
    isShowConfirmation: false,
    isShowPassword: false,
  },
};
const displaySlice = createSlice({
  name: "displaySlice",
  initialState,
  reducers: {
    onDisplayLogin: (state, action: PayloadAction<ShowDisplayLogin>) => {
      state.displayLogin.isShowFixed = action.payload.isShowFixed || false;
      state.displayLogin.isShowPhone = action.payload.isShowPhone || false;
      state.displayLogin.isShowCode = action.payload.isShowCode || false;
      state.displayLogin.isShowConfirmation =
        action.payload.isShowConfirmation || false;
      action.payload.isShowConfirmation;
      state.displayLogin.isShowPassword =
        action.payload.isShowPassword || false;
      return state;
    },
  },
});
export const { onDisplayLogin } = displaySlice.actions;
export default displaySlice.reducer;
