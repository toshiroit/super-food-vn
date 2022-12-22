import LoadingBackgroundV1 from "@/components/Background/BackgroundLoading/LoadingBackgroundV1";
import LoadingSpinner from "@/components/Loading/LoadingSpinner";
import { clientRoutes } from "@/constants/router/client/client";
import { selectOrderSliceDataListOrder } from "@/redux/features/order/order-selects";
import { getListOrderByCodeUser } from "@/redux/features/order/order-thunks";
import { useAppDispatch, useAppSelector } from "@/redux/hooks/hooks";
import { validateFilterOrderSchema } from "@/schema/order.schema";
import { OrderFilterData } from "@/types/order/order";
import { useFormik } from "formik";
import Link from "next/link";
import { useRouter } from "next/router";
import { ChangeEvent, KeyboardEvent, useEffect, useState } from "react";
import UserOrderItem from "./UserOrderItem";

const UserOrder = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const dataListOrder = useAppSelector(selectOrderSliceDataListOrder);
  const [pageOrder, setPageOrder] = useState<number[]>([]);
  const [dataFilter, setDataFilter] = useState<OrderFilterData>({
    status_order: null,
    text_search: null,
    date_start: null,
    date_end: null,
    sort_order: null,
  });
  const [current_page, setCurrent_page] = useState<number>(1);
  const range = (from: number, to: number, step = 1) => {
    let i = from;
    const range = [];

    while (i <= to) {
      range.push(i);
      i += step;
    }

    return range;
  };
  const formik = useFormik({
    initialValues: dataFilter,
    validationSchema: validateFilterOrderSchema,
    onSubmit(values, formikHelpers) {
      setCurrent_page(1);
      console.log(values);
      if (router.query.type === "1" || !router.query.type) {
        dispatch(
          getListOrderByCodeUser({
            page: current_page,
            date_filter: {
              ...values,
              status_order: "-11",
            },
          })
        );
      } else if (router.query.type === "2") {
        dispatch(
          getListOrderByCodeUser({
            page: current_page,
            date_filter: {
              ...values,
              status_order: "23",
            },
          })
        );
      } else if (router.query.type === "3") {
        dispatch(
          getListOrderByCodeUser({
            page: current_page,
            date_filter: {
              ...values,
              status_order: "34",
            },
          })
        );
      } else if (router.query.type === "4") {
        dispatch(
          getListOrderByCodeUser({
            page: current_page,
            date_filter: {
              ...values,
              status_order: "5",
            },
          })
        );
      } else if (router.query.type === "5") {
        dispatch(
          getListOrderByCodeUser({
            page: current_page,
            date_filter: {
              ...values,
              status_order: "-2",
            },
          })
        );
      } else if (router.query.type === "5") {
        dispatch(
          getListOrderByCodeUser({
            page: current_page,
            date_filter: {
              ...values,
              status_order: "-2",
            },
          })
        );
      } else if (router.query.type === "6") {
        dispatch(
          getListOrderByCodeUser({
            page: current_page,
            date_filter: {
              ...values,
              status_order: "-3",
            },
          })
        );
      }
      //dispatch(getListOrderByCodeUser({ page: 1, date_filter: values }));
    },
  });
  useEffect(() => {
    if (router.query.type === "-1" || !router.query.type) {
      dispatch(
        getListOrderByCodeUser({
          page: current_page,
          date_filter: {
            status_order: "all",
          },
        })
      );
    } else if (router.query.type === "1") {
      dispatch(
        getListOrderByCodeUser({
          page: current_page,
          date_filter: {
            status_order: "-11",
          },
        })
      );
    } else if (router.query.type === "2") {
      dispatch(
        getListOrderByCodeUser({
          page: current_page,
          date_filter: {
            status_order: "23",
          },
        })
      );
    } else if (router.query.type === "3") {
      dispatch(
        getListOrderByCodeUser({
          page: current_page,
          date_filter: {
            status_order: "34",
          },
        })
      );
    } else if (router.query.type === "4") {
      dispatch(
        getListOrderByCodeUser({
          page: current_page,
          date_filter: {
            status_order: "56",
          },
        })
      );
    } else if (router.query.type === "5") {
      dispatch(
        getListOrderByCodeUser({
          page: current_page,
          date_filter: {
            status_order: "-3",
          },
        })
      );
    } else if (router.query.type === "6") {
      dispatch(
        getListOrderByCodeUser({
          page: current_page,
          date_filter: {
            status_order: "-2",
          },
        })
      );
    }
    //eslint-disable-next-line
  }, [current_page, router.query]);
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
  }, [current_page, dataListOrder]);
  const onFilterOrder = () => {
    formik.handleSubmit();
  };
  const onKeySearch = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      console.log(dataFilter);
    }
  };
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
      <ul className="tabOrder">
        <Link href={`${clientRoutes.USER_ORDER}?type=-1`}>
          <a>
            <li
              className={`tabOrder__item ${
                router.query.type === "-1" ? "active" : ""
              }`}
            >
              Tất cả
            </li>
          </a>
        </Link>
        <Link href={`${clientRoutes.USER_ORDER}?type=1`}>
          <a>
            <li
              className={`tabOrder__item ${
                router.query.type === "1" ? "active" : ""
              }`}
            >
              Đang / Đã xác nhận
            </li>
          </a>
        </Link>
        <Link href={`${clientRoutes.USER_ORDER}?type=2`}>
          <a>
            <li
              className={`tabOrder__item ${
                router.query.type === "2" ? "active" : ""
              }`}
            >
              Đang / Đã chế biến{" "}
            </li>
          </a>
        </Link>
        <Link href={`${clientRoutes.USER_ORDER}?type=3`}>
          <a>
            <li
              className={`tabOrder__item ${
                router.query.type === "3" ? "active" : ""
              }`}
            >
              Chuẩn bị / Đang giao{" "}
            </li>
          </a>
        </Link>
        <Link href={`${clientRoutes.USER_ORDER}?type=4`}>
          <a>
            <li
              className={`tabOrder__item ${
                router.query.type === "4" ? "active" : ""
              }`}
            >
              Giao thành công
            </li>
          </a>
        </Link>

        <Link href={`${clientRoutes.USER_ORDER}?type=5`}>
          <a>
            <li
              className={`tabOrder__item ${
                router.query.type === "5" ? "active" : ""
              }`}
            >
              Giao không thành công
            </li>
          </a>
        </Link>
        <Link href={`${clientRoutes.USER_ORDER}?type=6`}>
          <a>
            <li
              className={`tabOrder__item ${
                router.query.type === "6" ? "active" : ""
              }`}
            >
              Bị huỷ
            </li>
          </a>
        </Link>
      </ul>
      <div style={{ display: "block" }} className="filter">
        <div className="filter__input">
          <input
            name="text_search"
            onKeyPress={onKeySearch}
            onChange={formik.handleChange}
            placeholder="Tìm kiếm đơn hàng"
            type="text"
          />
        </div>
        {/* <div className="filter__select">
          <select name="sort_order" onChange={formik.handleChange}>
            <option value="">Sắp xếp đơn hàng</option>
            <option value="1">A-Z</option>
            <option value="2">A-Z</option>
            <option value="3">Giá thấp nhất</option>
            <option value="4">Giá cao nhất</option>
          </select>
          <select name="status_order" onChange={formik.handleChange}>
            <option value="">Tình trạng đơn hàng</option>
            <option value="99">Đơn bị huỷ </option>
            <option value="-1">Chờ xác nhận</option>
            <option value="1">Đã xác nhận</option>
            <option value="2">Đang chế biến</option>
            <option value="3">Chế biến xong - chờ giao </option>
            <option value="4">Chuẩn bị giao</option>
            <option value="5">Đang giao - Chưa xác nhận</option>
            <option value="6">Giao thành công</option>
            <option value="-2">Giao thất bại</option>
          </select>
        </div> */}
      </div>
      <div className="filter">
        <div className="filter__date">
          <div className="filter__date___item">
            <label htmlFor="date_start">Ngày bắt đầu</label>
            <input
              type="date"
              name="date_start"
              onChange={formik.handleChange}
              id="date_start"
            />
            <p>{formik.errors.date_start}</p>
          </div>
          <div className="filter__date___item">
            <label htmlFor="date_end">Ngày kết thúc</label>
            <input
              type="date"
              name="date_end"
              onChange={formik.handleChange}
              id="date_end"
            />
            <p>{formik.errors.date_end}</p>
          </div>
        </div>
        <div className="button">
          <button type="button" onClick={onFilterOrder}>
            Lọc
          </button>
        </div>
      </div>
      <div className="content__order">
        {dataListOrder.loading ? (
          <LoadingSpinner css={{ textAlign: "center" }} />
        ) : dataListOrder &&
          dataListOrder.data &&
          dataListOrder.data.data?.length !== 0 ? (
          dataListOrder.data.data?.map((item: any) => {
            return <UserOrderItem itemOrder={item} key={item.code_order} />;
          })
        ) : (
          <div style={{ textAlign: "center" }}>
            <span
              style={{
                fontWeight: 500,
              }}
            >
              Không có đơn hàng nào
            </span>
          </div>
        )}
      </div>
      {pageOrder.length !== 0 && pageOrder.length > 1 ? (
        <div className="pagination">
          <ul className="pagination__main">
            <li className="pagination__main___item arrow">
              <i className="fa-solid fa-angle-left fa-size" />
            </li>
            {pageOrder.map((item) => {
              return (
                <li
                  key={item}
                  onClick={() => setCurrent_page(item)}
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
