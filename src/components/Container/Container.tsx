import { configAPI } from "@/config/config";
import { selectAuthData } from "@/redux/features/auth/auth-selects";
import { setSocket } from "@/redux/features/socket/socket-slice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks/hooks";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useAuthContext } from "src/contexts/Auth/AuthContext";
import { ContainerProps } from "src/types/container/container";
import Banner from "../Banner/Banner";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { selectSocketSliceSocket } from "@/redux/features/socket/socket-selects";
import { ToastContainer, toast } from "react-toastify";
import { useSocketContext } from "src/contexts/Auth/SocketContext";
const Container = ({ children }: ContainerProps) => {
  const data = useAppSelector(selectAuthData);
  const { socket } = useSocketContext();
  const socketRdx = useAppSelector(selectSocketSliceSocket);
  const router = useRouter();
  const [dataShow] = useState<string[]>(["/", "/search"]);
  const [notication, setNotification] = useState<any>();
  const isShowBanner = (data: string[]) => {
    let result: boolean = false;
    for (let i = 0; i < data.length; i++) {
      if (data[i] === router.pathname) {
        result = true;
        break;
      } else {
        result = false;
      }
    }
    return result;
  };
  // useEffect(() => {
  //   const setupSocketIO = () => {
  //     if (!socketRdx) {
  //       const socket = io(configAPI.URL_SOCKET_IO as string, {
  //         transports: ["websocket", "polling", "flashsocket"],
  //       });
  //       socket.on("disconnect", () => {
  //         dispatch(setSocket({ data_socket: null }));
  //         setTimeout(setupSocketIO, 3000);
  //       });
  //       dispatch(setSocket({ data_socket: socket }));
  //     }
  //     socketRdx?.close();
  //   };
  //   setupSocketIO();
  //   // eslint-disable-next-line
  // }, [isLogged, dispatch]);

  useEffect(() => {
    if (socket) {
      socket.on("notification_order_all", (data: any) => {
        toast(`${data.message}`, {
          position: "bottom-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      });
    }
  }, [socket]);
  useEffect(() => {
    if (socket) {
      socket.on("notification_progress", (data) => {
        if (data.status === -1) {
          toast.error(`${data.message}`, {
            position: "bottom-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        } else {
          toast.success(`${data.message}`, {
            position: "bottom-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        }
      });
    }
  }, [socket]);
  return (
    <div id="body" className="wrapper">
      <div className="desktop supership">
        <ToastContainer
          position="bottom-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        {router.pathname === "/checkout" ||
        router.pathname === "/checkout/completion" ? (
          <>{children}</>
        ) : (
          <>
            <Header />
            {isShowBanner(dataShow) ? <Banner /> : ""}
            {children}
            <Footer />
          </>
        )}
      </div>
    </div>
  );
};
export default Container;
