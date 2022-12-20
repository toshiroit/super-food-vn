import { configAPI } from "@/config/config";
import { useAppDispatch } from "@/redux/hooks/hooks";
import React, { createContext, useContext, useEffect, useState } from "react";
import { io, Socket } from "socket.io-client";
import { useAuthContext } from "./AuthContext";

type SocketContextType = {
  socket: Socket | null;
};

export const SocketContext = createContext({} as SocketContextType);

export function SocketProvider({ children }: { children: React.ReactNode }) {
  const [socket, setSocket] = useState<Socket | null>(null);
  const { isLogged } = useAuthContext();
  const dispatch = useAppDispatch();
  useEffect(() => {
    const newSocket = io(configAPI.URL_SOCKET_IO as string, {
      transports: ["websocket", "polling", "flashsocket"],
    });
    // newSocket.on("disconnect", () => {
    //   setSocket(null);
    //   setTimeout(startSocket, 3000);
    // });
    setSocket(newSocket);
    return () => {
      newSocket.close();
    };
  }, [isLogged, dispatch]);
  return (
    <SocketContext.Provider value={{ socket: socket }}>
      {children}
    </SocketContext.Provider>
  );
}

export function useSocketContext() {
  return useContext(SocketContext);
}
