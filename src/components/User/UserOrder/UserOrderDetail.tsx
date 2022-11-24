import { formatPriceVND } from "@/lib/formatPrice";
import { selectOrderSliceDataOrderDetail } from "@/redux/features/order/order-selects";
import { getOrderDetailByCodeOrder } from "@/redux/features/order/order-thunks";
import { selectSocketSliceSocket } from "@/redux/features/socket/socket-selects";
import { useAppDispatch, useAppSelector } from "@/redux/hooks/hooks";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";

const UserOrderDetail = () => {
  const router = useRouter()
  const dispatch = useAppDispatch()
  const socketRdx = useAppSelector(selectSocketSliceSocket)
  const dataOrderDetail = useAppSelector(selectOrderSliceDataOrderDetail)
  useEffect(() => {
    if (router.query.code) {
      dispatch(getOrderDetailByCodeOrder({ code_order: router.query.code as string || '' }))
    }
  }, [router.query, dispatch])
  useEffect(() => {
    if (socketRdx) {
      socketRdx.on('notification_progress', (data) => {
        if (data.code_order && router.query.code) {
          if (data.code_order === router.query.code) {
            dispatch(getOrderDetailByCodeOrder({ code_order: router.query.code as string || '' }))
          }
        }
      })
    }
  }, [socketRdx])

  return (
    <div className="content">
      <div className="title">
        <h4>
          <i className="fa-solid fa-circle-info" />
          Chi tiết đơn hàng : {dataOrderDetail.data && dataOrderDetail.data.code_order}
        </h4>
        <i id="showMenuUserIdx" className="fa-solid fa-bars" />
      </div>
      <div className="content__order">
        {
          dataOrderDetail.data && dataOrderDetail.data.product_order.map((item: any, key: number) => {
            return (
              <div className="content__order___imageName" key={item.code_product}>
                <picture>
                  <img
                    src={item.image}
                    alt=""
                  />
                </picture>
                <div className="namePrice">
                  <h4>
                    <i className="fa-solid fa-signature fa-size" />
                    {item.name}
                  </h4>
                  <span className="tag">
                    <i className="fa-solid fa-tag fa-size" />
                    {item.name_product_type || 'Chưa có'}
                  </span>
                  <div className="grpPro">
                    <span>
                      <b>
                        <i className="fa-solid fa-layer-group fa-size" />
                        Loại sản phẩm
                      </b>
                      : Không toping , Thêm bún
                    </span>
                  </div>
                  <div className="grpPro">
                    <span>
                      <b>
                        <i className="fa-brands fa-affiliatetheme fa-size" />
                        Số lượng
                      </b>
                      : {item.quality}
                    </span>
                  </div>

                </div>
                <div className="removeOrder">
                </div>
              </div>
            )
          })
        }
        <div
          style={{
            marginTop: '10px',
            textAlign: 'end',
            padding: '10px'
          }}
          className="result_price">
          <h4 style={{ color: '#DC3545' }}>
            Tổng tiền : {dataOrderDetail.data && formatPriceVND(dataOrderDetail.data.total_order)}
          </h4>
        </div>
        <div className="content__order___infoW">
          <ul className="statusMain">
            <span className="fxNd">
              <i className="fa-solid fa-truck-fast" /> Tình trạng đơn hàng
            </span>
            <li
              className={`
                statusMain__item 
                ${dataOrderDetail.data && dataOrderDetail.data.progress === -1 ? '' : 'active'}`}
            >
              {
                dataOrderDetail.data && dataOrderDetail.data.progress === -1
                  ? <i className="fa-solid fa-rotate fa-size fa-size-waitLoad" /> : <i className="fa-solid fa-check fa-size" />
              }
              <span> Đang xác nhận</span>
            </li>
            <li
              className={`
                statusMain__item 
                ${dataOrderDetail.data
                  && dataOrderDetail.data.progress === 1
                  || dataOrderDetail.data && dataOrderDetail.data.progress < 1
                  ? '' : 'active'}`}
            >
              {
                dataOrderDetail.data && dataOrderDetail.data.progress === 1 ? <i className="fa-solid fa-rotate fa-size fa-size-waitLoad" />
                  : dataOrderDetail.data && dataOrderDetail.data.progress > 1 ? <i className="fa-solid fa-check fa-size" />
                    : <i className="fa-solid fa-quote-left fa-size" />


              }
              <span>Đơn hàng đã được xác nhận </span>
            </li>
            <li className={`
              statusMain__item
                ${dataOrderDetail.data
                && dataOrderDetail.data.progress === 2
                || dataOrderDetail.data && dataOrderDetail.data.progress < 2 ? '' : 'active'}
            `}>
              {
                dataOrderDetail.data
                  && dataOrderDetail.data.progress === 2 ? <i className="fa-solid fa-rotate fa-size fa-size-waitLoad" />
                  : dataOrderDetail.data && dataOrderDetail.data.progress > 2 ? <i className="fa-solid fa-check fa-size" />
                    : <i className="fa-solid fa-quote-left fa-size" />
              }
              <span>Đơn hàng đang chế biến </span>
            </li>
            <li
              className={`
              statusMain__item
                ${dataOrderDetail.data
                  && dataOrderDetail.data.progress === 3
                  || dataOrderDetail.data && dataOrderDetail.data.progress < 3 ? '' : 'active'}
            `}
            >
              {
                dataOrderDetail.data
                  && dataOrderDetail.data.progress === 3 ? <i className="fa-solid fa-rotate fa-size fa-size-waitLoad" />
                  : dataOrderDetail.data && dataOrderDetail.data.progress > 3 ? <i className="fa-solid fa-check fa-size" />
                    : <i className="fa-solid fa-quote-left fa-size" />
              }
              <span>Shipper đã nhận đơn hàng</span>
            </li>
            <li
              className={`
              statusMain__item
                ${dataOrderDetail.data
                  && dataOrderDetail.data.progress === 4
                  || dataOrderDetail.data && dataOrderDetail.data.progress < 4 ? '' : 'active'}

             `}
            >
              {
                dataOrderDetail.data
                  && dataOrderDetail.data.progress === 4 ? <i className="fa-solid fa-rotate fa-size fa-size-waitLoad" />
                  : dataOrderDetail.data && dataOrderDetail.data.progress > 4 ? <i className="fa-solid fa-check fa-size" />
                    : <i className="fa-solid fa-quote-left fa-size" />
              }
              <span>Đơn hàng đang được giao</span>
            </li>
            <li
              className={`
              statusMain__item
                ${dataOrderDetail.data
                  && dataOrderDetail.data.progress === 5
                  || dataOrderDetail.data && dataOrderDetail.data.progress < 5 ? '' : 'active'}

             `}
            >
              {
                dataOrderDetail.data
                  && dataOrderDetail.data.progress === 5 ? <i className="fa-solid fa-rotate fa-size fa-size-waitLoad" />
                  : dataOrderDetail.data && dataOrderDetail.data.progress > 5 ? <i className="fa-solid fa-check fa-size" />
                    : <i className="fa-solid fa-quote-left fa-size" />
              }
              <span>Giao thành công</span>
            </li>
            <li
              className={`
              statusMain__item
                ${dataOrderDetail.data
                  && dataOrderDetail.data.progress === -2
                  || dataOrderDetail.data && dataOrderDetail.data.progress > -2 ? '' : 'active'}

             `}
            >
              {
                dataOrderDetail.data
                  && dataOrderDetail.data.progress === -2 ? <i className="fa-solid fa-rotate fa-size fa-size-waitLoad" />
                  : dataOrderDetail.data && dataOrderDetail.data.progress < -2 ? <i className="fa-solid fa-check fa-size" />
                    : <i className="fa-solid fa-quote-left fa-size" />
              }
              <span>Giao thất bại </span>
            </li>
          </ul>
          <div className="gifOrder">
            <div className="gifOrder__image">
              <picture>
                <img
                  src="./public/gif/b0067ade5e832d2aefec8ee9bda50fdc.gif"
                  alt=""
                />
              </picture>
            </div>
          </div>
          <div className="show">
            <p className="show__infoFx">
              <i className="fa-solid fa-triangle-exclamation" /> Quý khách có
              thể kiểm tra đối chiều giữa Shipper và shop đúng sản phẩm bạn đặt
              hay chưa . Nếu sản phẩm không đúng bạn liên hệ với shipper để hỏi
              hoặc liên hệ bên hỗ trợ của chúng tối
            </p>
            <p className="show__infoFx">
              <i className="fa-solid fa-triangle-exclamation" /> Quý khách khi
              nhận hàng vui lòng đeo khẩu trang để phòng dich
            </p>
            <div className="show__infoBuy">
              <div className="show__infoBuy___shop show__infoBuy___item">
                <div className="title">
                  <h4 className="title__shop">
                    <i className="fa-solid fa-shop" /> Thông tin người bán
                  </h4>
                </div>
                <ul className="nd">
                  <li className="nd__item">
                    <span>
                      <i className="fa-solid fa-signature fa-size" />
                      Tên của hàng :<b>{dataOrderDetail.data && dataOrderDetail.data.name_shop} </b>
                    </span>
                  </li>
                  <li className="nd__item">
                    <span>
                      <i className="fa-solid fa-phone fa-size" /> Số điện thoại
                      : <b> {dataOrderDetail.data && dataOrderDetail.data.phone_shop}</b>
                    </span>
                  </li>
                  <li className="nd__item">
                    <span>
                      <i className="fa-solid fa-bowl-rice fa-size" />
                      Sản phẩm đặt :
                      <b>
                        {dataOrderDetail.data && dataOrderDetail.data.product_order.map((item: any, key: number) => {
                          return (
                            item.name + ' , '
                          )
                        })
                        }

                      </b>
                    </span>
                  </li>
                  <li className="nd__item">
                    <span>
                      <i className="fa-solid fa-envelope-open-text fa-size" />
                      Thông tin thêm cho Shop :
                    </span>
                    <p style={{ fontSize: '0.9rem', fontWeight: '500' }}>
                      {
                        dataOrderDetail.data && dataOrderDetail.data.product_order.map((item: any, key: number) => {
                          return (
                            item.info_order || 'Không có' + ' - '
                          )
                        })
                      }
                    </p>
                  </li>
                  <li className="nd__item">
                    <span>
                      <i className="fa-solid fa-list-check fa-size" />
                      Tình trang : <b>Đang chế biến </b>
                    </span>
                  </li>
                </ul>
              </div>
              <div className="show__infoBuy___wd" />
              {/* 
            <div className="show__infoBuy___shop show__infoBuy___item">
                <div className="title">
                  <h4 className="title__shipper">
                    <i className="fa-solid fa-truck-fast" />
                    Thông tin Shipper
                  </h4>
                </div>
                <ul className="nd">
                  <li className="nd__item">
                    <span>
                      <i className="fa-solid fa-signature fa-size" />
                      Tên Shipper: <b>Đậu Văn Nam </b>
                    </span>
                  </li>
                  <li className="nd__item">
                    <span>
                      <i className="fa-solid fa-phone fa-size" /> Số điện thoại
                      : <b> 0941.714.714</b>
                    </span>
                  </li>
                  <li className="nd__item">
                    <span>
                      <i className="fa-solid fa-bowl-rice fa-size" />
                      Sản phẩm đặt :
                      <b>Lẩu thái cay ( Không Topping , cay nhiều 124124)</b>
                    </span>
                  </li>
                  <li className="nd__item">
                    <span>
                      <i className="fa-solid fa-location-dot fa-size" />
                      Địa chỉ nhận :
                      <b>Lẩu thái cay ( Không Topping , cay nhiều 124124)</b>
                    </span>
                  </li>
                  <li className="nd__item">
                    <span>
                      <i className="fa-solid fa-location-dot fa-size" />
                      Địa chỉ giao :
                      <b>Lẩu thái cay ( Không Topping , cay nhiều 124124)</b>
                    </span>
                  </li>
                  <li className="nd__item">
                    <span>
                      <i className="fa-solid fa-dollar-sign fa-size" />
                      Phí Ship :<b>24.000 đ </b>
                    </span>
                  </li>
                  <li className="nd__item">
                    <span>
                      <i className="fa-solid fa-money-bills fa-size" />
                      Tổng tiền thanh toán :<b>168.000 đ </b>
                    </span>
                  </li>
                  <li className="nd__item">
                    <span>
                      <i className="fa-solid fa-location-dot fa-size" />
                      Phương thức thanh toán :<b>Tiền mặt </b>
                    </span>
                  </li>
                  <li className="nd__item">
                    <span>
                      <i className="fa-solid fa-envelope-open-text fa-size" />
                      Thông tin thêm cho Shipper :
                    </span>
                    <p>
                      Lorem facere at blanditiis doloribus! Similique aliquid
                      error vel ratione quos reiciendis nisi illo!
                    </p>
                  </li>
                  <li className="nd__item">
                    <span>
                      <i className="fa-solid fa-list-check fa-size" />
                      Tình trang : <b>Đang chế biến </b>
                    </span>
                  </li>
                </ul>
              </div>
              */
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default UserOrderDetail;
