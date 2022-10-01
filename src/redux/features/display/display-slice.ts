import { DisplayState, ShowDisplayLogin } from "@/types/display/display";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
const initialState: DisplayState | null = {
  displayLogin: {
    isShow: false,
  },
};
const displaySlice = createSlice({
  name: "displaySlice",
  initialState,
  reducers: {
    onDisplayLogin: (state, action: PayloadAction<ShowDisplayLogin>) => {
      state.displayLogin.isShow = action.payload.isShow;
      return state;
    },
  },
});
export const { onDisplayLogin } = displaySlice.actions;
export default displaySlice.reducer;
