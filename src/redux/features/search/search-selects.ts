import { RootState } from "@/types/redux/redux";

export const selectSearchSliceSearchType = (state: RootState) =>
  state.searchSlice.searchType;
export const selectSearchSliceTextSearch = (state: RootState) =>
  state.searchSlice.textSearch;
export const selectSearchSliceLoading = (state: RootState) =>
  state.searchSlice.loading;
export const selectSearchSliceDataSearchShop = (state: RootState) =>
  state.searchSlice.listShop;
export const selectSearchSliceDataListTextSearch = (state: RootState) =>
  state.searchSlice.listTextSearch;
