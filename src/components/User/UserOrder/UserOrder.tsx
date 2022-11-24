import LoadingBackgroundV1 from "@/components/Background/BackgroundLoading/LoadingBackgroundV1";
import LoadingSpinner from "@/components/Loading/LoadingSpinner";
import { selectOrderSliceDataListOrder } from "@/redux/features/order/order-selects";
import { getListOrderByCodeUser } from "@/redux/features/order/order-thunks";
import { useAppDispatch, useAppSelector } from "@/redux/hooks/hooks";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import UserOrderItem from "./UserOrderItem";

const UserOrder = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const dataListOrder = useAppSelector(selectOrderSliceDataListOrder);
  const [pageOrder, setPageOrder] = useState<number[]>([]);
  const [current_page, setCurent_page] = useState<number>(1);
  const range = (from: number, to: number, step = 1) => {
    let i = from;
    const range = [];

    while (i <= to) {
      range.push(i);
      i += step;
    }

    return range;
  };
  useEffect(() => {
    dispatch(getListOrderByCodeUser({ page: current_page }));
  }, [current_page, dispatch]);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [current_page]);
  useEffect(() => {
    if (dataListOrder.data && dataListOrder.data.totalPages) {
      const totalNumbers = 2 * 2 + 2;
      const totalBlocks = totalNumbers + 2;
      let tempData = [];
      if (dataListOrder.data.totalPages > totalBlocks) {
        const startPage = Math.max(2, current_page - 2);
        const endPage = Math.min(
          dataListOrder.data.totalPages - 1,
          current_page + 2
        );
        let pages = range(startPage, endPage);

        tempData = [1, ...pages, dataListOrder.data.totalPages];
        setPageOrder(tempData);
      } else {
        for (let i = 1; i <= dataListOrder.data.totalPages; i++) {
          tempData.push(i);
        }
        setPageOrder(tempData);
      }
    }
    // eslint-disable-next-line
  }, [current_page, dispatch]);
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
        {dataListOrder.loading ? (
          <LoadingSpinner css={{ textAlign: "center" }} />
        ) : dataListOrder &&
          dataListOrder.data &&
          dataListOrder.data.data.length !== 0 ? (
          dataListOrder.data.data.map((item: any) => {
            return <UserOrderItem itemOrder={item} key={item.code_order} />;
          })
        ) : (
          <span style={{ textAlign: "center" }}> Không có đơn hàng nào</span>
        )}
      </div>
      {pageOrder.length !== 0 || pageOrder.length > 1 ? (
        <div className="pagination">
          <ul className="pagination__main">
            <li className="pagination__main___item arrow">
              <i className="fa-solid fa-angle-left fa-size" />
            </li>
            {pageOrder.map((item) => {
              return (
                <li
                  key={item}
                  onClick={() => setCurent_page(item)}
                  className={`pagination__main___item ${
                    current_page === item ? "active" : ""
                  }`}
                >
                  {item}
                </li>
              );
            })}
            <li className="pagination__main___item arrow">
              <i className="fa-solid fa-angle-right fa-size" />
            </li>
          </ul>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
export default UserOrder;
