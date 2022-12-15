export const clientRoutes = {
  INDEX: "/",
  LOGIN: "/login",
  PRODUCT_DETAIL: (nameProduct: string, codeProduct: string) => {
    return `/product-detail/${nameProduct}.${codeProduct}`;
  },
  SHOP: "/shop",
  SHOP_INDEX: (name: string, code?: string) => {
    return `/shop/${name}`;
  },
  //?
  USER_INFO: "/user/info",
  USER_SHOP: "/user/shop",
  USER_ADDRESS: "/user/address",
  USER_ADDRESS_DETAIL: (codeAddress: string) => {
    return `/user/address/detail/${codeAddress}`;
  },
  USER_BALANCE: "/user/balance",
  USER_NOTIFY: "/user/notify",
  USER_NOTIFY_DETAIL: (code: string) => {
    return `/user/notify/detail/${code}`;
  },
  USER_ORDER: "/user/order",
  USER_PAY: "/user/pay",
  USER_SECURITY: "/user/security",
  USER_REST_PASS: "/user/rest-pass",
  USER_ORDER_DETAIL_BY_ID: (id: string) => {
    return `/user/order/detail/${id}`;
  },
  CHECKOUT: "/checkout",
};
export const PRIVATE_ROUTES = ["/user/"];
