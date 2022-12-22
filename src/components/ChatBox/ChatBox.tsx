import {
  selectChatSliceDataMessenger,
  selectChatSliceSendChat,
} from "@/redux/features/chat/chat-selects";
import {
  getAllMessengerUserByShop,
  sendMessengerChatByUser,
} from "@/redux/features/chat/chat-thunks";
import { useAppDispatch, useAppSelector } from "@/redux/hooks/hooks";
import { KeyboardEvent, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { ChatDataSend } from "@/types/chat/chat";
import { selectSocketSliceSocket } from "@/redux/features/socket/socket-selects";
import { useSocketContext } from "src/contexts/Auth/SocketContext";
import { useRef } from "react";
import { useAuthContext } from "src/contexts/Auth/AuthContext";
import { onDisplayLogin } from "@/redux/features/display/display-slice";
const ChatBox = ({ data_shop }: { data_shop: any }) => {
  const router = useRouter();
  const { isLogged } = useAuthContext();
  const dataSendChat = useAppSelector(selectChatSliceSendChat);
  const divMessengerChatRef = useRef<HTMLDivElement>(null);
  const { socket } = useSocketContext();
  const dispatch = useAppDispatch();
  const [textChat, setTextChat] = useState<string>();
  const [showBox, setShowBox] = useState<boolean>(false);
  const [statusSend, setStatusSend] = useState<boolean>(false);
  const dataMessenger = useAppSelector(selectChatSliceDataMessenger);
  const scrollIntoViewChat = () => {
    divMessengerChatRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  useEffect(scrollIntoViewChat, [dataMessenger]);
  useEffect(() => {
    console.log(dataSendChat);
    if (showBox && !dataSendChat.loading) {
      const query_code = (router.query.code as string) || "";
      if (query_code) {
        const code_shop = query_code.split(".");
        dispatch(
          getAllMessengerUserByShop({
            code_shop: code_shop[0] || "",
            limit: 20,
          })
        );
      }
    }
    //eslint-disable-next-line
  }, [showBox, statusSend, dataSendChat]);
  const onShowChatBox = () => {
    if (isLogged) {
      setShowBox(!showBox);
    } else {
      dispatch(onDisplayLogin({ isShowFixed: true, isShowPhone: true }));
    }
  };
  const onSendMessengerUser = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      const query_code = (router.query.code as string) || "";
      if (query_code && query_code) {
        const code_shop = query_code.split(".")[0] || "";
        const dataChat: ChatDataSend = {
          code_shop: code_shop,
          text_chat: textChat || "",
          type_chat: "1",
        };
        dispatch(sendMessengerChatByUser(dataChat));
        if (socket) {
          socket.emit("messenger_send_to_shop", {
            message: "Bạn nhận được 1 tín nhắn mới",
            code_shop: code_shop,
            code_user: "",
          });
        }
      }
      setStatusSend(!statusSend);
      setTextChat("");
    }
  };
  useEffect(() => {
    if (socket) {
      const query_code = (router.query.code as string) || "";
      const code_shop = query_code.split(".")[0] || "";
      socket.on("notification_messenger_user", (data) => {
        let objDiv = document.getElementById("listMess");
        if (objDiv) {
          objDiv.scrollTop = objDiv.scrollHeight;
        }
        // setTimeout(() => {
        //   console.log("VO DAY : ", data);
        dispatch(
          getAllMessengerUserByShop({ code_shop: code_shop, limit: 20 })
        );
        // }, 3000);
      });
    }
    //eslint-disable-next-line
  }, [socket]);

  return (
    <>
      {showBox ? (
        <div className="chatBox">
          <header className="header">
            <h5>Shop "{data_shop && data_shop.name_shop}" xin chào bạn </h5>
            <span onClick={onShowChatBox} className="close">
              <i className="fa-regular fa-circle-xmark"></i>
            </span>
          </header>
          <main className="page__main">
            <div className="block--background">
              <div id="listMess" className="chatbot__overview">
                <ul className="chatlist">
                  {dataMessenger.data &&
                    dataMessenger.data.map((item: any) => {
                      if (item.type_chat === "2") {
                        return (
                          <>
                            <li
                              key={item.code_chat}
                              className="bot__output bot__output--standard"
                            >
                              {item.text_chat}
                            </li>
                            ;
                          </>
                        );
                      } else if (item.type_chat === "1") {
                        return (
                          <>
                            <li key={item.code_chat} className="userInput">
                              {item.text_chat}
                            </li>
                            ;
                          </>
                        );
                      }
                    })}
                  <div ref={divMessengerChatRef} />
                </ul>
              </div>
              <div className="chatbox-area">
                <i className="fa-solid fa-camera fa-left"></i>
                <i className="fa-regular fa-paper-plane fa-right"></i>
                <input
                  onChange={(e) => setTextChat(e.target.value)}
                  onKeyPress={onSendMessengerUser}
                  value={textChat}
                  placeholder="Talk to me!"
                  className="chatbox"
                  name=""
                />
              </div>
              <div className="block--background" />
            </div>
          </main>
        </div>
      ) : (
        <div onClick={onShowChatBox} className="boxChat">
          <div className="boxChat__inner">
            <i className="fa-regular fa-comments fa-css"></i>
          </div>
        </div>
      )}
    </>
  );
};
export default ChatBox;
