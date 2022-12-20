import { clientRoutes } from "@/constants/router/client/client";
import { formatDatePostSQL } from "@/lib/formatDate";
import { formatPriceVND } from "@/lib/formatPrice";
import { ItemOrder, ItemOrderProps } from "@/types/order/order";
import Link from "next/link";

const UserOrderItem = ({ itemOrder }: ItemOrderProps) => {
  const converImageStringToArray = (image: string) => {
    return image.split(",");
  };
  return (
    <Link href={clientRoutes.USER_ORDER_DETAIL_BY_ID(itemOrder.code_order)}>
      {}
      <a>
        <div className="content__order___item">
          <div className="content__order___item____dateIsShip">
            <span className="fxLeft">
              Ngày mua : {formatDatePostSQL(itemOrder.date_order)} ------ Mã đơn
              hàng : {itemOrder.code_order}
            </span>
            <span className="fxRight">
              <i className="fa-solid fa-truck-fast" />
              {itemOrder.progress === -1
                ? "Chờ xác nhận"
                : itemOrder.progress === 1
                ? "Đã xác nhận "
                : itemOrder.progress === 2
                ? "Đang chế biến"
                : itemOrder.progress === 3
                ? "Chờ giao hàng"
                : itemOrder.progress === 4
                ? "Đang giao hàng"
                : itemOrder.progress === 5
                ? "Giao thành công "
                : itemOrder.progress === -3
                ? "Giao không thành công"
                : itemOrder.progress === -2
                ? "Bị huỷ"
                : ""}
            </span>
          </div>
          <div className="content__order___item____wp">
            <div className="content__order___item____wp_____nameImage wp__left">
              <div className="tw">
                <div className="image">
                  <picture>
                    <img
                      src={converImageStringToArray(itemOrder.image_product)[0]}
                      alt=""
                    />
                  </picture>
                </div>
                <div className="name">
                  <h4>
                    <i className="fa-solid fa-signature" />
                    {itemOrder.name_product}
                  </h4>
                  <div className="category">
                    <span>
                      <i className="fa-solid fa-tag fa-size" />
                      Lẩu cay , Cơm , Bún
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="content__order___item____wp_____ifop wp__left">
              <div className="tw">
                <div className="tl">
                  <span>
                    <i className="fa-solid fa-hand-holding-dollar" />
                    Tổng tiền thanh toán :
                  </span>
                  <b className="tl__price">
                    {formatPriceVND(itemOrder.total_order)}
                  </b>
                </div>
              </div>
            </div>
          </div>
        </div>
      </a>
    </Link>
  );
};
export default UserOrderItem;
