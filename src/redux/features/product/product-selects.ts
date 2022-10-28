import { RootState } from "@/types/redux/redux";

export const selectProductSliceLoading = (state: RootState) => state.productSlice.loading;
export const selectProductSliceMessage = (state: RootState) => state.productSlice.message;
export const selectProductSliceData = (state: RootState) => state.productSlice.data;
export const selectProductSliceDataAll = (state: RootState) => state.productSlice.dataAll;
export const selectProductSliceError = (state: RootState) => state.productSlice.error
export const selectProductSliceDataProductDetail = (state: RootState) => state.productSlice.dataProductDetail
export const selectProductSliceLoadingSearch = (state: RootState) => state.productSlice.dataProductSearch.loading
export const selectProductSliceDataSearch = (state: RootState) => state.productSlice.dataProductSearch.data
export const selectProductSliceDataProductShopNew = (state: RootState) => state.productSlice.dataProductShopNew
export const selectProductSliceDataProductProductNew = (state: RootState) => state.productSlice.dataProductProductNew
export const selectProductSliceDataProductProductHot = (state: RootState) => state.productSlice.dataProductProductHot
export const selectProductSliceDataProductDetailShop = (state: RootState) => state.productSlice.dataProductDetailShop
export const selectProductSliceDataProductPayTop = (state: RootState) => state.productSlice.dataProductPayTop
