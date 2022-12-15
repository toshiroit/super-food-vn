import { clientRoutes } from "@/constants/router/client/client";
import { NotifyDataDetailItemIProps } from "@/types/notify/notify";
import Link from "next/link";

const UserNotifyItem: React.FC<NotifyDataDetailItemIProps> = ({ item }) => {
  return (
    <Link href={clientRoutes.USER_NOTIFY_DETAIL(item.code_notify)}>
      <a>
        <li className="content__notify___main____item">
          <span className="title">Tin hệ thống </span>
          <div className="image">
            <i className="fa-solid fa-square-envelope fa-size fa-size-mess" />
          </div>
          <div className="ndw">
            <span className="ndw__code">#{item.code_notify}</span>
            <p>{item.title_send}!</p>
          </div>
          <div className="info">
            <i className="fa-solid fa-eye fa-size fa-size-show" />
          </div>
        </li>
      </a>
    </Link>
  );
};
export default UserNotifyItem;
