import { Socket } from "socket.io-client";

export type SocketState = {
  data_socket: any | null;
  socket: Socket | null
}
export type SocketAction = {
  data_socket: any;
}
