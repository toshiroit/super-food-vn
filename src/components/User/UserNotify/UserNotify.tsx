import { selectNotifySliceDataNotifyUser } from "@/redux/features/notify/notify-selects";
import { getAllNotifyUser } from "@/redux/features/notify/notify-thunks";
import { useAppDispatch, useAppSelector } from "@/redux/hooks/hooks";
import { useEffect } from "react";
import UserNotifyItem from "./UserNotifyItem";

const UserNotify = () => {
  const dispatch = useAppDispatch();
  const dataNotify = useAppSelector(selectNotifySliceDataNotifyUser);
  useEffect(() => {
    dispatch(getAllNotifyUser());
  }, []);
  return (
    <div className="content">
      <div className="title">
        <h4>
          <i className="fa-solid fa-square-envelope fa-size" /> Thông báo của
          bạn
        </h4>
        <i id="showMenuUserIdx" className="fa-solid fa-bars" />
      </div>
      <div className="content__notify">
        <div className="content__notify___wp">
          <div className="title title-root">
            <span>
              <i className="fa-solid fa-envelope" /> Thông báo từ hệ thống
            </span>
            <div className="line" />
          </div>
          <ul className="content__notify___main">
            {dataNotify.data && dataNotify.data.length == 0 ? (
              <div style={{ textAlign: "center" }}>Không có thông báo nào </div>
            ) : (
              <>
                {dataNotify.data &&
                  dataNotify.data.map((item: any) => {
                    return (
                      <UserNotifyItem item={item} key={item.code_notify} />
                    );
                  })}
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};
export default UserNotify;
