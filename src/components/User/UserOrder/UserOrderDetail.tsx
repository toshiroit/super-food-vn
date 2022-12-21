import { formatPriceVND } from "@/lib/formatPrice";
import {
  selectOrderSLiceDataOrderAction,
  selectOrderSliceDataOrderDetail,
} from "@/redux/features/order/order-selects";
import {
  confirmOrderSuccess,
  getOrderDetailByCodeOrder,
} from "@/redux/features/order/order-thunks";
import { selectSocketSliceSocket } from "@/redux/features/socket/socket-selects";
import { useAppDispatch, useAppSelector } from "@/redux/hooks/hooks";
import { useRouter } from "next/router";
import { ChangeEvent, useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import Ratings from "react-ratings-declarative";
import { EvaluateOrder, Images } from "@/types/order/order";
import { randomLengthText } from "@/lib/random";
import {
  EvaluateData,
  EvaluateDataCheck,
  EvaluateProductCheck,
} from "@/types/evaluate/evaluate";
import {
  addEvaluateByProduct,
  checkEvaluateByProductUserOrder,
} from "@/redux/features/evaluate/evaluate-thunks";
import {
  selectEvaluateSliceDataAdd,
  selectEvaluateSliceDataCheckEvaluate,
} from "@/redux/features/evaluate/evaluate-selects";
import { useSocketContext } from "src/contexts/Auth/SocketContext";

const UserOrderDetail = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { socket } = useSocketContext();
  const dataOrderDetail = useAppSelector(selectOrderSliceDataOrderDetail);
  const dataCheckEvaluate = useAppSelector(
    selectEvaluateSliceDataCheckEvaluate
  );
  const dataAddEvaluate = useAppSelector(selectEvaluateSliceDataAdd);
  const dataOrderAction = useAppSelector(selectOrderSLiceDataOrderAction);
  const [isSubmit, setIsSubmit] = useState<boolean>(false);
  const [productEvaluate, setProductEvaluate] =
    useState<EvaluateProductCheck[]>();
  const [upImage, setUpImage] = useState<Images[]>();
  const [images, setImages] = useState<FileList>();
  const [showEvaluate, setShowEvaluate] = useState<{
    code_product: string;
    is_show: boolean;
  }>({
    code_product: "",
    is_show: false,
  });
  const [evaluate_codeProduct, setEvaluate_codeProduct] = useState<string>();
  const [evaluate, setEvaluate] = useState<EvaluateOrder>({
    image: "",
    point_star: 4,
    point_star_progress: 4,
    point_star_ship: 4,
    text: "",
  });
  useEffect(() => {
    if (router.query.code) {
      dispatch(
        getOrderDetailByCodeOrder({
          code_order: (router.query.code as string) || "",
        })
      );
    }
    //eslint-disable-next-line
  }, [router.query, showEvaluate.is_show, dataOrderAction]);
  useEffect(() => {
    if (socket) {
      socket.on("notification_progress", (data) => {
        if (data.code_order && router.query.code) {
          if (data.code_order === router.query.code) {
            dispatch(
              getOrderDetailByCodeOrder({
                code_order: (router.query.code as string) || "",
              })
            );
          }
        }
        socket.off("notification_progress");
      });
    }
    //eslint-disable-next-line
  }, [socket]);
  useEffect(() => {}, [dataOrderAction]);
  const onEvaluate = (is_show: boolean, code_product: string) => {
    setShowEvaluate({
      code_product: code_product,
      is_show: is_show,
    });
  };
  const onChangeEvaluate = (
    e: any,
    type: "product" | "ship" | "progress" | "ANY"
  ) => {
    if (type === "product") {
      setEvaluate({
        ...evaluate,
        point_star: e,
      });
    } else if (type === "ship") {
      setEvaluate({
        ...evaluate,
        point_star_ship: e,
      });
    } else if (type === "progress") {
      setEvaluate({
        ...evaluate,
        point_star_progress: e,
      });
    } else {
      setEvaluate({
        ...evaluate,
        [e.target.name]: e.target.value,
      });
    }
  };
  const onUploadImage = (e: ChangeEvent<HTMLInputElement>) => {
    const files = (e.target.files as FileList) || [];
    setImages(files);
    let resultImages: Images[] = [];

    if (files) {
      for (let i = 0; i < files.length; i++) {
        const url = URL.createObjectURL(files[i]);
        let objImage: Images = {
          code: randomLengthText(15),
          url: url,
        };
        resultImages.push(objImage);
      }
    }

    setUpImage(resultImages);
  };
  const addEvaluate = () => {
    if (showEvaluate.code_product) {
      const evaluateData: EvaluateData = {
        code_product: showEvaluate.code_product,
        evaluate_product: evaluate.point_star,
        evaluate_ship: evaluate.point_star_ship,
        evaluate_progress: evaluate.point_star_progress,
        text: evaluate.text,
        images: images,
        images_link: [],
        code_order: dataOrderDetail.data && dataOrderDetail.data.code_order,
      };
      setIsSubmit(true);
      dispatch(addEvaluateByProduct(evaluateData));
    }
  };
  useEffect(() => {
    if (isSubmit && !dataAddEvaluate.loading) {
      setShowEvaluate({
        code_product: "",
        is_show: false,
      });
    }
  }, [isSubmit, dataAddEvaluate.loading]);
  //   dispatch(checkEvaluateByProductUserOrder({}))
  const is_check_evaluate = (data: any, item: string): boolean => {
    let result = true;
    if (data && data.check_evaluate) {
      for (let j of data.check_evaluate) {
        if (j.trim() === item.trim()) {
          result = false;
          break;
        }
      }
    }
    return result;
  };

  const onOrderSuccess = (code_order: string) => {
    if (code_order.length > 0) {
      dispatch(confirmOrderSuccess({ code_order }));
    }
  };
  console.log(dataOrderDetail.data);
  return (
    <div className="content">
      <div className="title">
        <h4>
          <i className="fa-solid fa-circle-info" />
          {showEvaluate.is_show
            ? " Đánh giá đơn hàng : "
            : " Chi tiết đơn hàng : "}
          {dataOrderDetail.data && dataOrderDetail.data.code_order}
        </h4>
        <i id="showMenuUserIdx" className="fa-solid fa-bars" />
      </div>
      {showEvaluate.is_show ? (
        dataAddEvaluate.loading ? (
          <div className="content__order">
            <h4 style={{ textAlign: "center", fontWeight: 500 }}>
              Đang tải đánh giá của bạn ... cảm ơn bạn đánh giá
            </h4>
          </div>
        ) : (
          <div className="content__order">
            <div className="star">
              <h5>
                Chất lượng sản phẩm :{" "}
                <Ratings
                  rating={evaluate.point_star}
                  changeRating={(e: any) => onChangeEvaluate(e, "product")}
                  widgetRatedColors="#FFCD3C"
                >
                  <Ratings.Widget widgetSpacing="2px" widgetDimension="20px" />
                  <Ratings.Widget widgetSpacing="2px" widgetDimension="20px" />
                  <Ratings.Widget widgetSpacing="2px" widgetDimension="20px" />
                  <Ratings.Widget widgetSpacing="2px" widgetDimension="20px" />
                  <Ratings.Widget widgetSpacing="2px" widgetDimension="20px" />
                </Ratings>{" "}
                <span>
                  {evaluate.point_star === 5
                    ? "Tuyệt vời"
                    : evaluate.point_star === 4
                    ? "Được"
                    : evaluate.point_star === 3
                    ? "Ổn"
                    : evaluate.point_star === 2
                    ? "Tệ"
                    : evaluate.point_star === 1
                    ? "Quá tệ"
                    : ""}
                </span>
              </h5>
            </div>
            <div style={{ padding: "30px" }} className="content">
              <textarea
                placeholder="Đánh giá của bạn"
                name="text"
                onChange={(e) => onChangeEvaluate(e, "ANY")}
                style={{
                  padding: "10px",
                  width: "100%",
                  height: "150px",
                  borderRadius: "4px",
                  fontWeight: 500,
                  outline: "none",
                  border: "1px solid #d7d7d7",
                  resize: "none",
                }}
              ></textarea>
              <ul
                className="listImage"
                style={{
                  display: "flex",
                  alignContent: "center",
                  flexWrap: "wrap",
                }}
              >
                {upImage &&
                  upImage.map((item) => {
                    return (
                      <li
                        key={item.code}
                        style={{ margin: "2px" }}
                        className="listImage__item"
                      >
                        <picture>
                          <img
                            style={{
                              width: "50px",
                              height: "50px",
                              objectFit: "cover",
                              borderRadius: 4,
                            }}
                            src={(item.url as string) || ""}
                            alt=""
                          />
                        </picture>
                      </li>
                    );
                  })}
              </ul>
              <button
                style={{
                  position: "relative",
                  padding: "5px 20px",
                  borderRadius: "3px",
                  border: "1px solid #1b96ff",
                  fontWeight: 500,
                  fontSize: "0.8rem",
                  background: "none",
                }}
                type="button"
              >
                <i className="fa-solid fa-camera-retro"></i> Thêm hình ảnh
                <input
                  accept="image/png,image/jpeg,image/ipg"
                  style={{
                    position: "absolute",
                    left: 0,
                    width: "100%",
                    top: 0,
                    bottom: 0,
                    opacity: 0,
                    cursor: "pointer",
                  }}
                  type="file"
                  onChange={onUploadImage}
                  name=""
                  id=""
                  multiple={true}
                />
              </button>
            </div>
            <div style={{ padding: "30px" }} className="star">
              <span style={{ fontWeight: 500 }}>Về dịch vụ của chúng tôi</span>
              <div style={{ marginTop: "10px" }} className="bd">
                <h5>
                  Giao hàng :{" "}
                  <Ratings
                    rating={evaluate.point_star_ship}
                    changeRating={(e: any) => onChangeEvaluate(e, "ship")}
                    widgetRatedColors="#FFCD3C"
                  >
                    <Ratings.Widget
                      widgetSpacing="2px"
                      widgetDimension="20px"
                    />
                    <Ratings.Widget
                      widgetSpacing="2px"
                      widgetDimension="20px"
                    />
                    <Ratings.Widget
                      widgetSpacing="2px"
                      widgetDimension="20px"
                    />
                    <Ratings.Widget
                      widgetSpacing="2px"
                      widgetDimension="20px"
                    />
                    <Ratings.Widget
                      widgetSpacing="2px"
                      widgetDimension="20px"
                    />
                  </Ratings>{" "}
                  <span>
                    {evaluate.point_star_ship === 5
                      ? "Tuyệt vời"
                      : evaluate.point_star_ship === 4
                      ? "Được"
                      : evaluate.point_star_ship === 3
                      ? "Ổn"
                      : evaluate.point_star_ship === 2
                      ? "Tệ"
                      : evaluate.point_star_ship === 1
                      ? "Quá tệ"
                      : ""}
                  </span>
                </h5>
                <h5>
                  Xử lí đơn hàng :{" "}
                  <Ratings
                    rating={evaluate.point_star_progress}
                    changeRating={(e: any) => onChangeEvaluate(e, "progress")}
                    widgetRatedColors="#FFCD3C"
                  >
                    <Ratings.Widget
                      widgetSpacing="2px"
                      widgetDimension="20px"
                    />
                    <Ratings.Widget
                      widgetSpacing="2px"
                      widgetDimension="20px"
                    />
                    <Ratings.Widget
                      widgetSpacing="2px"
                      widgetDimension="20px"
                    />
                    <Ratings.Widget
                      widgetSpacing="2px"
                      widgetDimension="20px"
                    />
                    <Ratings.Widget
                      widgetSpacing="2px"
                      widgetDimension="20px"
                    />
                  </Ratings>{" "}
                  <span>
                    {evaluate.point_star_progress === 5
                      ? "Tuyệt vời"
                      : evaluate.point_star_progress === 4
                      ? "Được"
                      : evaluate.point_star_progress === 3
                      ? "Ổn"
                      : evaluate.point_star_progress === 2
                      ? "Tệ"
                      : evaluate.point_star_progress === 1
                      ? "Quá tệ"
                      : ""}
                  </span>
                </h5>
              </div>
            </div>
            <div style={{ textAlign: "end" }} className="btn_evaluate">
              <button
                onClick={() => onEvaluate(false, "")}
                style={{
                  cursor: "pointer",
                  borderRadius: 4,
                  border: "none",
                  padding: "10px 40px",
                  fontWeight: 500,
                  marginRight: "5px",
                  backgroundColor: "#F33030",
                  color: "#Fff",
                }}
              >
                Trở về{" "}
              </button>
              <button
                onClick={addEvaluate}
                style={{
                  fontWeight: 500,
                  borderRadius: 4,
                  border: "none",
                  padding: "10px 40px",
                  color: "#FFF",
                  backgroundColor: "rgba(40, 167, 69, 1)",
                }}
              >
                Đánh giá
              </button>
            </div>
          </div>
        )
      ) : (
        <div className="content__order">
          {console.log(dataOrderDetail.data)}
          <>
            {dataOrderDetail.data &&
              dataOrderDetail.data.product_order.map((item: any) => {
                return dataOrderDetail.data?.code_product.map((item3: any) => {
                  if (item.code_product.trim() === item3.code) {
                    return (
                      <>
                        <div
                          className="content__order___imageName"
                          key={item.code_product}
                        >
                          <picture>
                            <img src={item.image} alt="" />
                          </picture>
                          <div className="namePrice">
                            <h4>
                              <i className="fa-solid fa-signature fa-size" />
                              {console.log(item)}
                              {item.name}
                            </h4>
                            <span className="tag">
                              <i className="fa-solid fa-tag fa-size" />
                              {item.name_product_type || "Chưa có"}
                            </span>
                            <div className="grpPro">
                              <span>
                                <b>
                                  <i className="fa-solid fa-layer-group fa-size" />
                                  Thông tin :{" "}
                                </b>
                                {`${item3.info_product.note}`}
                              </span>
                            </div>
                            <div className="grpPro">
                              <span>
                                <b>
                                  <i className="fa-brands fa-affiliatetheme fa-size" />
                                  Số lượng
                                </b>
                                : {item3.quatity}
                              </span>
                            </div>
                            <div className="price">
                              <span className="price__w2">
                                <b>Tổng tiền : </b>
                                {formatPriceVND(item3.price_result)}
                              </span>
                            </div>
                          </div>
                          {is_check_evaluate(
                            dataOrderDetail.data,
                            item.code_product
                          ) && dataOrderDetail.data.progress === 6 ? (
                            <div className="removeOrder">
                              <button
                                onClick={() =>
                                  onEvaluate(true, item.code_product)
                                }
                                style={{
                                  fontWeight: 500,
                                }}
                              >
                                Đánh giá ngay
                              </button>
                            </div>
                          ) : dataOrderDetail.data.progress !== 6 ? (
                            <div className="removeOrder"></div>
                          ) : (
                            <div className="removeOrder">
                              <button
                                style={{
                                  background: "#4a934a",
                                  fontWeight: 500,
                                }}
                              >
                                Đã đánh giá
                              </button>
                            </div>
                          )}
                        </div>
                      </>
                    );
                  }
                });
              })}

            <div
              style={{
                marginTop: "10px",
                textAlign: "end",
                padding: "10px",
              }}
              className="result_price"
            >
              <h4 style={{ color: "#DC3545" }}>
                Tổng tiền :{" "}
                {dataOrderDetail.data &&
                  formatPriceVND(dataOrderDetail.data.total_order)}
              </h4>
              {dataOrderDetail.data?.progress == 5 ? (
                <>
                  <button
                    onClick={() =>
                      onOrderSuccess(dataOrderDetail.data?.code_order)
                    }
                    type="button"
                  >
                    Đã nhận được hàng
                  </button>
                </>
              ) : (
                ""
              )}
            </div>

            <div className="content__order___infoW">
              <ul className="statusMain">
                <span className="fxNd">
                  <i className="fa-solid fa-truck-fast" /> Tình trạng đơn hàng
                </span>
                {console.log(dataOrderDetail.data?.progress)}
                <li
                  className={`
                statusMain__item 
                ${
                  dataOrderDetail.data?.progress === -1 ||
                  dataOrderDetail.data?.progress === -2
                    ? "load"
                    : "active"
                }`}
                >
                  {dataOrderDetail.data &&
                  dataOrderDetail.data.progress === -1 ? (
                    <i className="fa-solid fa-rotate fa-size fa-size-waitLoad" />
                  ) : (
                    <i className="fa-solid fa-check fa-size" />
                  )}
                  <span> Đang xác nhận</span>
                </li>
                <li
                  className={`
                statusMain__item 
                ${
                  (dataOrderDetail.data &&
                    dataOrderDetail.data.progress === 1) ||
                  (dataOrderDetail.data && dataOrderDetail.data.progress < 1)
                    ? "load"
                    : "active"
                }`}
                >
                  {dataOrderDetail.data &&
                  dataOrderDetail.data.progress === 1 ? (
                    <i className="fa-solid fa-rotate fa-size fa-size-waitLoad" />
                  ) : dataOrderDetail.data &&
                    dataOrderDetail.data.progress > 1 ? (
                    <i className="fa-solid fa-check fa-size" />
                  ) : (
                    <i className="fa-solid fa-quote-left fa-size" />
                  )}
                  <span>Đơn hàng đã được xác nhận </span>
                </li>
                <li
                  className={`
              statusMain__item
                ${
                  (dataOrderDetail.data &&
                    dataOrderDetail.data.progress === 2) ||
                  (dataOrderDetail.data && dataOrderDetail.data.progress < 2)
                    ? "load"
                    : "active"
                }
            `}
                >
                  {dataOrderDetail.data &&
                  dataOrderDetail.data.progress === 2 ? (
                    <i className="fa-solid fa-rotate fa-size fa-size-waitLoad" />
                  ) : dataOrderDetail.data &&
                    dataOrderDetail.data.progress > 2 ? (
                    <i className="fa-solid fa-check fa-size" />
                  ) : (
                    <i className="fa-solid fa-quote-left fa-size" />
                  )}
                  <span>Đơn hàng đang chế biến </span>
                </li>
                <li
                  className={`
              statusMain__item
                ${
                  (dataOrderDetail.data &&
                    dataOrderDetail.data.progress === 3) ||
                  (dataOrderDetail.data && dataOrderDetail.data.progress < 4)
                    ? "load"
                    : "active"
                }

             `}
                >
                  {dataOrderDetail.data &&
                  dataOrderDetail.data.progress === 3 ? (
                    <i className="fa-solid fa-rotate fa-size fa-size-waitLoad" />
                  ) : dataOrderDetail.data &&
                    dataOrderDetail.data.progress > 3 ? (
                    <i className="fa-solid fa-check fa-size" />
                  ) : (
                    <i className="fa-solid fa-quote-left fa-size" />
                  )}
                  <span>Đơn hàng đang chuẩn bị giao</span>
                </li>
                <li
                  className={`
              statusMain__item
                ${
                  (dataOrderDetail.data &&
                    dataOrderDetail.data.progress === 4) ||
                  (dataOrderDetail.data && dataOrderDetail.data.progress < 4)
                    ? "load"
                    : "active"
                }

             `}
                >
                  {dataOrderDetail.data &&
                  dataOrderDetail.data.progress === 4 ? (
                    <i className="fa-solid fa-rotate fa-size fa-size-waitLoad" />
                  ) : dataOrderDetail.data &&
                    dataOrderDetail.data.progress > 4 ? (
                    <i className="fa-solid fa-check fa-size" />
                  ) : (
                    <i className="fa-solid fa-quote-left fa-size" />
                  )}
                  <span>Đang giao hàng</span>
                </li>
                <li
                  className={`
              statusMain__item
                ${
                  (dataOrderDetail.data &&
                    dataOrderDetail.data.progress === 5) ||
                  (dataOrderDetail.data && dataOrderDetail.data.progress < 5)
                    ? "load"
                    : "active"
                }

             `}
                >
                  {dataOrderDetail.data &&
                  dataOrderDetail.data.progress === 5 ? (
                    <i className="fa-solid fa-rotate fa-size fa-size-waitLoad" />
                  ) : dataOrderDetail.data &&
                    dataOrderDetail.data.progress > 5 ? (
                    <i className="fa-solid fa-check fa-size" />
                  ) : (
                    <i className="fa-solid fa-quote-left fa-size" />
                  )}
                  <span>Giao thành công</span>
                </li>
                <li
                  className={`
              statusMain__item
                ${
                  (dataOrderDetail.data &&
                    dataOrderDetail.data.progress === -2) ||
                  (dataOrderDetail.data && dataOrderDetail.data.progress > -2)
                    ? ""
                    : "active"
                }

             `}
                >
                  {dataOrderDetail.data &&
                  dataOrderDetail.data.progress === -3 ? (
                    <i className="fa-solid fa-rotate fa-size fa-size-waitLoad" />
                  ) : dataOrderDetail.data &&
                    dataOrderDetail.data.progress < -2 ? (
                    <i className="fa-solid fa-check fa-size" />
                  ) : (
                    <i className="fa-solid fa-quote-left fa-size" />
                  )}
                  <span>Giao thất bại </span>
                </li>
                <li
                  className={`
              statusMain__item
                ${
                  (dataOrderDetail.data &&
                    dataOrderDetail.data.progress === -3) ||
                  (dataOrderDetail.data && dataOrderDetail.data.progress > -2)
                    ? ""
                    : "active"
                }

             `}
                >
                  {dataOrderDetail.data &&
                  dataOrderDetail.data.progress === -99 ? (
                    <i className="fa-solid fa-rotate fa-size fa-size-waitLoad" />
                  ) : dataOrderDetail.data &&
                    dataOrderDetail.data.progress < -2 ? (
                    <i className="fa-solid fa-check fa-size" />
                  ) : (
                    <i className="fa-solid fa-quote-left fa-size" />
                  )}
                  <span>Đơn hàng đã bị huỷ</span>
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
                  <i className="fa-solid fa-triangle-exclamation" /> Quý khách
                  có thể kiểm tra đối chiều giữa Shipper và shop đúng sản phẩm
                  bạn đặt hay chưa . Nếu sản phẩm không đúng bạn liên hệ với
                  shipper để hỏi hoặc liên hệ bên hỗ trợ của chúng tối
                </p>
                <p className="show__infoFx">
                  <i className="fa-solid fa-triangle-exclamation" /> Quý khách
                  khi nhận hàng vui lòng đeo khẩu trang để phòng dich
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
                          Tên của hàng :
                          <b>
                            {dataOrderDetail.data &&
                              dataOrderDetail.data.name_shop}{" "}
                          </b>
                        </span>
                      </li>
                      <li className="nd__item">
                        <span>
                          <i className="fa-solid fa-phone fa-size" /> Số điện
                          thoại :{" "}
                          <b>
                            {" "}
                            {dataOrderDetail.data &&
                              dataOrderDetail.data.phone_shop}
                          </b>
                        </span>
                      </li>
                      <li className="nd__item">
                        <span>
                          <i className="fa-solid fa-bowl-rice fa-size" />
                          Sản phẩm đặt :
                          <b>
                            {dataOrderDetail.data &&
                              dataOrderDetail.data.product_order.map(
                                (item: any, key: number) => {
                                  return item.name + " , ";
                                }
                              )}
                          </b>
                        </span>
                      </li>
                      <li className="nd__item">
                        <span>
                          <i className="fa-solid fa-envelope-open-text fa-size" />
                          Thông tin thêm cho Shop :
                        </span>
                        <p style={{ fontSize: "0.9rem", fontWeight: "500" }}>
                          {dataOrderDetail.data &&
                            dataOrderDetail.data.product_order.map(
                              (item: any, key: number) => {
                                return item.info_order || "Không có" + " - ";
                              }
                            )}
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
                </div>
              </div>
            </div>
          </>
        </div>
      )}
    </div>
  );
};
export default UserOrderDetail;
