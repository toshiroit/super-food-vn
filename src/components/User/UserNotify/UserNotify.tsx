import UserNotifyItem from "./UserNotifyItem";

const UserNotify = () => {
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
          <div className="title title-w">
            <span>
              <i className="fa-solid fa-envelope" /> Tin nhắn từ hệ thống
            </span>
            <div className="line" />
          </div>
          <ul className="content__notify___main"></ul>
        </div>
        <div className="content__notify___wp">
          <div className="title title-root">
            <span>
              <i className="fa-solid fa-envelope" /> Thông báo từ quản trị
            </span>
            <div className="line" />
          </div>
          <ul className="content__notify___main">
            <UserNotifyItem />
          </ul>
        </div>
      </div>
    </div>
  );
};
export default UserNotify;
