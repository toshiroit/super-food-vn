import { SocketAction, SocketState } from "@/types/socket/socket";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const socketState: SocketState = {
  data_socket: null,
  socket: null
}
const socketSlice = createSlice({
  name: 'socket-slice',
  initialState: socketState,
  reducers: {
    setSocket: (state, action: PayloadAction<SocketAction>) => {
      state.socket = action.payload.data_socket
      return state;
    }
  }
})
export const { setSocket } = socketSlice.actions
export default socketSlice.reducer
