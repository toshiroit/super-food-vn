import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";
import Link from "next/link";
import CartItem from "@/components/Cart/CartItem";
import CartPay from "@/components/Cart/CartPay";
import { useEffect, useState } from "react";
import { useAuthContext } from "src/contexts/Auth/AuthContext";
import { useRouter } from "next/router";
import { useAppDispatch, useAppSelector } from "@/redux/hooks/hooks";
import {
  addCartByCodeUser,
  getCartByCodeUser,
} from "@/redux/features/cart/cart-thunks";
import {
  selectCartSliceData,
  selectCartSliceDataLocal,
  selectCartSliceLoading,
} from "@/redux/features/cart/cart-selects";
import { restCart, setCartLocal } from "@/redux/features/cart/cart-slice";
import { joinProductShop } from "@/lib/joinProductShop";
import * as CartType from "@/types/cart/cart";
const Cart = () => {
  const { data, isLogged } = useAuthContext();
  const dataCartAPI = useAppSelector(selectCartSliceData);
  const dataCartLocal = useAppSelector(selectCartSliceDataLocal);
  // const [dataCartLocal, setDataCartLocal] = useState<any[]>()
  const loadingCartAPI = useAppSelector(selectCartSliceLoading);
  const dispatch = useAppDispatch();
  const router = useRouter();
  const onOrder = () => {};
  useEffect(() => {
    if (localStorage.getItem("cart")) {
      if (isLogged) {
        if (data) {
          if (dataCartLocal.length !== 0) {
            console.log(dataCartLocal);
            dispatch(
              addCartByCodeUser({
                data_cart: dataCartLocal,
                code_user: data.code_user || "",
              })
            );
          }
        }
      }
    }
    // eslint-disable-next-line
  }, [router.pathname, isLogged, data, dispatch]);
  useEffect(() => {
    if (isLogged && data) {
      let isStop = true;
      function getCartByCodeUserFc() {
        if (isStop) {
          //dispatch(setCartLocal())
          dispatch(
            getCartByCodeUser({
              code_user: data.code_user || "",
            })
          );
        }
      }
      getCartByCodeUserFc();
      return () => {
        isStop = false;
      };
    } else {
      dispatch(setCartLocal());
    }
    // eslint-disable-next-line
  }, [router.pathname, dispatch, isLogged]);

  const joinProductShopTest = (data: CartType.CartItem[]): any[] => {
    let cpData = [...data];
    const itemsByCodeShop: any = {};
    for (const item of cpData) {
      itemsByCodeShop[item.code_shop || ""] ??= {
        shop: {
          name_shop: item.name_shop,
          code_shop: item.code_shop,
        },
        cart: [],
      };
      itemsByCodeShop[item.code_shop || ""].cart.push(item);
    }
    if (itemsByCodeShop) {
      return Object.values(itemsByCodeShop);
    }
    return [];
  };
  return (
    <div className="cart">
      <div className="container">
        <div className="cart__content breadcrumb">
          <div className="cart__content___breadcrumb breadcrumb__content">
            <Breadcrumb />
          </div>
          <div className="cart__content___main">
            <form onSubmit={onOrder}>
              <div className="cart__content___main____title">
                <Link href={"/"}>
                  <a>
                    <h4>
                      <i className="fa-solid fa-cart-shopping"></i>Giỏ hàng
                    </h4>
                  </a>
                </Link>
              </div>
              <div className="cart__content___main____inner">
                {dataCartLocal && dataCartLocal.length === 0 ? (
                  <div
                    style={{
                      width: "100%",
                      flexDirection: "column",
                      alignItems: "center",
                      height: "auto",
                      display: "flex",
                    }}
                    className="cartNotFound"
                  >
                    <picture>
                      <img
                        style={{ width: "450px" }}
                        src="/images/empty-cart.png"
                        alt=""
                      />
                    </picture>
                    <p
                      className=""
                      style={{
                        margin: "auto",
                        fontSize: "1.5rem",
                        fontWeight: "700",
                      }}
                    >
                      Không có sản phẩm{" "}
                    </p>
                  </div>
                ) : (
                  <>
                    <div className="left">
                      <div className="header">
                        <ul className="header__main">
                          <li className="header__main___item">
                            <input type="checkbox" className="" name="" id="" />
                            <label className="check-box" />
                            <span>
                              Tất cả ( {dataCartLocal.length} sản phẩm ){" "}
                            </span>
                          </li>
                          <li className="header__main___item price">
                            <span>Đơn giá </span>
                          </li>
                          <li className="header__main___item quality">
                            <span>Số lượng </span>
                          </li>
                          <li className="header__main___item priceResult">
                            <span>Thành tiền </span>
                          </li>
                          <li className="header__main___item remove">
                            <span>
                              <i className="fa-solid fa-delete-left" />
                            </span>
                          </li>
                        </ul>
                      </div>
                      <ul className="main">
                        {/* 
    * {joinProductShop(dataCartLocal).map((item, key) => {
                                return <CartItem
                                  cartItem={item.cartItem}
                                  name_shop={item.name_shop}
                                  code_shop={item.code_shop}
                                  key={key}
                                />
                              }
                              )}*/}
                        <CartItem
                          code_shop={""}
                          name_shop={"124"}
                          cartItem={joinProductShopTest(dataCartLocal)}
                        />
                      </ul>
                    </div>
                    <div className="right">
                      <CartPay />
                    </div>
                  </>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Cart;
