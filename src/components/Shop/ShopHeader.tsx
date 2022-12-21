import { clientRoutes } from "@/constants/router/client/client";
import { onDisplayLogin } from "@/redux/features/display/display-slice";
import { selectNotifySliceDataNotify } from "@/redux/features/notify/notify-selects";
import { addNewNotifyShop } from "@/redux/features/notify/notify-thunks";
import {
  selectShopSliceDataActionShopByUser,
  selectShopSliceDataFollowShopByUser,
  selectShopSliceDataShopDetail,
} from "@/redux/features/shop/shop-selects";
import { filterProductShop } from "@/redux/features/shop/shop-slice";
import {
  disableFollowShopByUser,
  followShopByUser,
  getDataDetailShopByCodeShop,
} from "@/redux/features/shop/shop-thunks";
import { selectSocketSliceSocket } from "@/redux/features/socket/socket-selects";
import { useAppDispatch, useAppSelector } from "@/redux/hooks/hooks";
import Link from "next/link";
import { useRouter } from "next/router";
import { ChangeEvent, KeyboardEvent, useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { useAuthContext } from "src/contexts/Auth/AuthContext";

const ShopHeader = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { isLogged } = useAuthContext();
  const socketRdx = useAppSelector(selectSocketSliceSocket);
  const dataShopDetail = useAppSelector(selectShopSliceDataShopDetail);
  const dataFollowShop = useAppSelector(selectShopSliceDataFollowShopByUser);
  const [isDisableFollow, setDisableFollow] = useState<boolean>(false);
  const [isFollow, setIsFollow] = useState<boolean>(false);
  const [isAddNew, setIsAddNew] = useState<boolean>(false);
  const [textSearch, setTextSearch] = useState<string>();
  const onChangeSearchProduct = (e: ChangeEvent<HTMLInputElement>) => {
    setTextSearch(e.target.value);
  };
  const onEnterSearchProduct = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      console.log(textSearch);
      dispatch(filterProductShop({ text_search: textSearch }));
    }
  };

  const onFollowShop = (code_shop: string) => {
    if (isLogged) {
      dispatch(followShopByUser({ code_shop: code_shop }));
      setIsFollow(true);
    } else {
      dispatch(onDisplayLogin({ isShowFixed: true, isShowPhone: true }));
    }
  };
  const onDisableFollowShop = (code_shop: string) => {
    if (isLogged) {
      dispatch(disableFollowShopByUser({ code_shop }));
      setDisableFollow(true);
    } else {
      dispatch(onDisplayLogin({ isShowFixed: true, isShowPhone: true }));
    }
  };
  useEffect(() => {
    if (isFollow && !dataFollowShop.loading) {
      const query_code = (router.query.code as string) || "";
      if (query_code) {
        const code_shop = query_code.split(".");
        dispatch(getDataDetailShopByCodeShop({ code_shop: code_shop[0] }));
        dispatch(
          addNewNotifyShop({
            title: "Thông báo từ hệ thống",
            info: "Bạn nhận được 1 theo dõi từ người dùng 🙏 🙏",
            code_shop: code_shop[0],
          })
        );
        if (socketRdx) {
          socketRdx.emit("notification_follow", {
            code_shop: code_shop[0],
            message: "Bạn nhận được 1 theo dõi từ người dùng",
          });
        }
        toast.success("🦄 Theo dõi thành công", {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    } else if (isDisableFollow && !dataFollowShop.loading) {
      const query_code = (router.query.code as string) || "";
      if (query_code) {
        const code_shop = query_code.split(".");
        dispatch(getDataDetailShopByCodeShop({ code_shop: code_shop[0] }));
        toast.success("🦄 Huỷ theo dõi thành công", {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    }
    //eslint-disable-next-line
  }, [isFollow, dataFollowShop.loading]);
  return (
    <>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <div className="shopIf__flex">
        <div className="shopIf__flex___logo">
          <div className="logo">
            <picture>
              <img
                src={dataShopDetail.data && dataShopDetail.data.image_shop}
                alt=""
              />
            </picture>
          </div>
          <div className="nameWp">
            <h4 className="nameWp__hw">
              {dataShopDetail.data && dataShopDetail.data.name_shop}
            </h4>
            <div className="ticker">
              <span className="ticker__sc">
                Đang tin cậy
                <i className="fa-solid fa-square-check" />
              </span>
            </div>
            <div className="star">
              <span>
                <i className="fa-solid fa-star fa-size" />
                {dataShopDetail.data && dataShopDetail.data.evaluate}/10
              </span>
            </div>
          </div>
        </div>
        <div className="shopIf__flex___wp">
          {dataShopDetail.data && dataShopDetail.data.is_follow ? (
            <button
              onClick={() =>
                onDisableFollowShop(
                  dataShopDetail.data && dataShopDetail.data.code_shop
                )
              }
              className="follow"
            >
              <i className="fa-solid fa-user-plus" />
              Hủy theo dõi
            </button>
          ) : (
            <button
              onClick={() =>
                onFollowShop(
                  dataShopDetail.data && dataShopDetail.data.code_shop
                )
              }
              className="follow"
            >
              <i className="fa-solid fa-user-plus" />
              Theo dõi
            </button>
          )}
        </div>
      </div>
      <div className="shopIf__menu">
        <div className="wp">
          <ul className="menu">
            <Link href={`${clientRoutes.SHOP}/${router.query.code}?tow=shop`}>
              <a>
                <li
                  className={
                    router.query.tow === "shop"
                      ? " menu__item active"
                      : "menu__item"
                  }
                >
                  Cửa hàng
                </li>
              </a>
            </Link>
            <Link
              href={`${clientRoutes.SHOP}/${router.query.code}?tow=product`}
            >
              <a>
                <li
                  className={
                    router.query.tow === "product"
                      ? " menu__item active"
                      : "menu__item"
                  }
                >
                  Tất cả sản phẩm
                </li>
              </a>
            </Link>
            <Link
              href={`${clientRoutes.SHOP}/${router.query.code}?tow=category`}
            >
              <a>
                <li
                  className={
                    router.query.tow === "category"
                      ? " menu__item active"
                      : "menu__item"
                  }
                >
                  Danh mục
                </li>
              </a>
            </Link>
            {/* <Link href={`${clientRoutes.SHOP}/${router.query.code}?tow=info`}>
              <a>
                <li
                  className={
                    router.query.tow === "info"
                      ? " menu__item active"
                      : "menu__item"
                  }
                >
                  Thông tin cửa hàng
                </li>
              </a>
            </Link> */}
          </ul>
        </div>
        <div className="ipnSearch">
          <i className="fa-solid fa-magnifying-glass fa-size" />
          <input
            type="text"
            name=""
            value={textSearch}
            onChange={onChangeSearchProduct}
            onKeyPress={onEnterSearchProduct}
            placeholder="Tìm sản phẩm tại cửa hàng này "
            id=""
          />
        </div>
      </div>
    </>
  );
};
export default ShopHeader;
