export const clientRoutes = {
  INDEX: "/",
  LOGIN: "/login",
  PRODUCT_DETAIL: (nameProduct: string, codeProduct: string) => {
    return `/product-detail/${nameProduct}.${codeProduct};`;
  },
};
