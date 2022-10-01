export const clientRoutes = {
  INDEX: "/",
  LOGIN: "/login",
  PRODUCT_DETAIL: (nameProduct: string, codeProduct: string) => {
    return `/product-detail/${nameProduct}.${codeProduct};`;
  },
  SHOP_INDEX: (name: string, code?: string) => {
    return `/shop/${name}`;
  },
  //?
  USER_INFO: "/user/info",
  USER_SHOP: "/user/shop",
};
