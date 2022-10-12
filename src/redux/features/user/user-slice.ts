import { UserInfoFull } from "@/types/user/user";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const dataUser: UserInfoFull = {
  fullName: "",
  date: "",
  sex: false,
  address: "",
  email: "",
  phone: "",
  passwordv1: "",
  passwordv2: "",
  facebook: "",
  zalo: ""
}
const userSlice = createSlice({
  name: 'user-slice',
  initialState: {
    data:
      dataUser,
  },
  reducers: {
    addInfoUser: (state, action: PayloadAction<UserInfoFull | undefined>) => {
      console.log(action.payload)
      state.data = { ...action.payload }
      return state;
    }
  }
})

export const { addInfoUser } = userSlice.actions
export default userSlice.reducer

