import { UserInfoFull, UserState } from "@/types/user/user";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { updatePasswordUser, updateUserInfoW1 } from "./user-thunks";

const dataUser: UserInfoFull = {
  full_name: "",
  date: "",
  sex: false,
  address: "",
  email: "",
  phone: "",
  passwordv1: "",
  passwordv2: "",
  facebook: "",
  zalo: "",
};
const userState: UserState = {
  updateUserW1: {
    data: null,
    loading: false,
    error: null,
  },
  updatePassword: {
    data: null,
    loading: false,
    error: null,
  },
};
const userSlice = createSlice({
  name: "user-slice",
  initialState: userState,
  reducers: {
    addInfoUser: (state, action: PayloadAction<UserInfoFull | undefined>) => {},
  },
  extraReducers(builder) {
    builder
      .addCase(updateUserInfoW1.pending, (state) => {
        state.updateUserW1.loading = true;
      })
      .addCase(updateUserInfoW1.rejected, (state, action) => {
        state.updateUserW1.loading = false;
        state.updateUserW1.error = action.error;
      })
      .addCase(updateUserInfoW1.fulfilled, (state, action) => {
        state.updateUserW1.loading = false;
        state.updateUserW1.data = action.payload?.data;
      });
    builder
      .addCase(updatePasswordUser.pending, (state) => {
        state.updatePassword.loading = true;
      })
      .addCase(updatePasswordUser.rejected, (state, action) => {
        state.updatePassword.loading = false;
        state.updatePassword.error = action.payload || "";
        state.updatePassword.data = null;
      })
      .addCase(updatePasswordUser.fulfilled, (state, action) => {
        state.updatePassword.loading = false;
        state.updatePassword.error = null;
        state.updatePassword.data = action.payload.data;
      });
  },
});

export const { addInfoUser } = userSlice.actions;
export default userSlice.reducer;
