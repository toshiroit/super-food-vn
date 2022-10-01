import Link from "next/link";
import UserOrderItem from "./UserOrderItem";

const UserOrder = () => {
  return (
    <div className="content">
      <div className="title">
        <h4>
          <i className="fa-solid fa-coins" /> Quản lí đơn hàng
        </h4>
        <Link href={"/user"}>
          <a>
            <i id="showMenuUserIdx" className="fa-solid fa-bars" />
          </a>
        </Link>
      </div>
      <div className="content__order">
        <UserOrderItem />
      </div>
    </div>
  );
};
export default UserOrder;
