import { clientRoutes } from "@/constants/router/client/client";
import { ItemAddressShowProps } from "@/types/address/address";
import Link from "next/link";
const UserAddressItem = ({ itemAddress }: ItemAddressShowProps) => {
  return (
    <li
      className={
        itemAddress.status
          ? `content__address___main____item root`
          : `content__address___main____item `
      }
    >
      <div className="title">
        <h4>
          <i className="fa-solid fa-location-dot" /> Địa chỉ gốc
        </h4>
      </div>
      <div className="content">
        <div className="content__name tw">
          <span>
            <i className="fa-solid fa-signature fa-size" /> Họ và tên :{" "}
            {/* <b >{addRess} </b> */}
            {itemAddress.full_name}
            {/* {value.name} */}
          </span>
        </div>
        <div className="content__phone tw">
          <span>
            <i className="fa-solid fa-phone fa-size" />
            Số điện thoại : <b>{itemAddress.phone}</b>
          </span>
        </div>
        <div className="content__address tw">
          <span>
            <i className="fa-solid fa-location-dot fa-size" />
            Địa chỉ :<b>24/71 Hà huy tập , ......... ,...........</b>
          </span>
        </div>
      </div>
      <div className="btn">
        <Link href={clientRoutes.USER_ADDRESS_DETAIL(itemAddress.code_address)}>
          <a>
            <button>
              <i className="fa-solid fa-eye fa-size" /> Xem chi tiết
            </button>
          </a>
        </Link>
      </div>
    </li>
  );
};
export default UserAddressItem;
