import { selectOrderSliceDataListOrder } from "@/redux/features/order/order-selects";
import { getListOrderByCodeUser } from "@/redux/features/order/order-thunks";
import { useAppDispatch, useAppSelector } from "@/redux/hooks/hooks";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import UserOrderItem from "./UserOrderItem";

const UserOrder = () => {
  const router = useRouter()
  const dispatch = useAppDispatch()
  const dataListOrder = useAppSelector(selectOrderSliceDataListOrder)
  useEffect(() => {
    const page = Number(router.query.page || 1)
    dispatch(getListOrderByCodeUser({ page }))
  }, [router.query, dispatch])
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
        {
          dataListOrder.loading ? <h1>Dang tai </h1> :
            dataListOrder && dataListOrder.data && dataListOrder.data.data.length !== 0 ?
              dataListOrder.data.data
                .map((item: any) => {
                  return (
                    <UserOrderItem itemOrder={item} key={item.code_order} />
                  )
                }) : <span style={{ textAlign: 'center' }} > Không có đơn hàng nào</span>
        }
      </div>
    </div >
  );
};
export default UserOrder;
