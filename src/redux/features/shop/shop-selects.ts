import { RootState } from "@/types/redux/redux";

export const selectShopSliceDataShopDetail = (state: RootState) =>
  state.shopSlice.dataDetailShop;
export const selectShopSliceDataProductByCodeShop = (state: RootState) =>
  state.shopSlice.dataProductShop;
export const selectShopSliceDataFilterProductShop = (state: RootState) =>
  state.shopSlice.dataFilterProductShop;
export const selectShopSliceDataFollowShopByUser = (state: RootState) =>
  state.shopSlice.followShopByUser;
export const selectShopSliceDataActionShopByUser = (state: RootState) =>
  state.shopSlice.dataActionFollowShop;

export const selectShopSliceDataCategoryShop = (state: RootState) =>
  state.shopSlice.dataCategoryShop;
