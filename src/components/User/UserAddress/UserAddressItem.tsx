import Link from "next/link";
import React, { useState } from "react";

const UserAddressItem = () => {
  const [active] = useState(false);
  return (
    <li
      className={
        active
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
            {"VAN NAm"}
            {/* {value.name} */}
          </span>
        </div>
        <div className="content__phone tw">
          <span>
            <i className="fa-solid fa-phone fa-size" />
            Số điện thoại : <b>0947.712.857</b>
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
        <Link href={"/"}>
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
