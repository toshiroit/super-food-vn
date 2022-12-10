import { ChangeSearchType } from "./../../../types/search/search";
import { SearchActionDispatch, SearchSliceState } from "@/types/search/search";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  getListTextSearch,
  getShopByNameOrCode,
  searchProductByName,
} from "./search-thunks";

const searchState: SearchSliceState = {
  searchType: [
    {
      nameType: "OPEN-SHOP",
      value: {
        value_name_type: 1,
        value_type: -1,
      },
    },
    {
      nameType: "DISCOUNT",
      value: {
        value_name_type: 2,
        value_type: -1,
      },
    },
    {
      nameType: "FREE-SHIP",
      value: {
        value_name_type: 3,
        value_type: -1,
      },
    },
    {
      nameType: "EVALUATE-TOP",
      value: {
        value_name_type: 4,
        value_type: -1,
      },
    },
    {
      nameType: "SORT",
      value: {
        value_name_type: 5,
        value_type: -1,
      },
    },
    {
      nameType: "TYPE-SHOW",
      value: {
        value_name_type: 6,
        value_type: -1,
      },
    },
  ],
  loading: false,
  product: [],
  error: "",
  message: "",
  textSearch: "",
  listTextSearch: {
    data: null,
    error: null,
    loading: false,
  },
  listShop: {
    data: null,
    error: null,
    loading: false,
  },
};
const searchSlice = createSlice({
  name: "search-slice",
  initialState: searchState,

  reducers: {
    addSearch: () => {},
    changeSearch: (state, action: PayloadAction<SearchActionDispatch>) => {
      if (action.payload.textSearch) {
        state.textSearch = action.payload.textSearch || "";
        localStorage.setItem("text_search", action.payload.textSearch);
      }
      return state;
    },
    changeSearchType: (state, action: PayloadAction<ChangeSearchType>) => {
      if (action.payload.searchType === "OPEN-SHOP") {
        state.searchType[0].value.value_type = action.payload.textSearch;
      }
      if (action.payload.searchType === "DISCOUNT") {
        state.searchType[1].value.value_type = action.payload.textSearch;
      }
      if (action.payload.searchType === "FREE-SHIP") {
        state.searchType[2].value.value_type = action.payload.textSearch;
      }
      if (action.payload.searchType === "EVALUATE-TOP") {
        state.searchType[3].value.value_type = action.payload.textSearch;
      }
      if (action.payload.searchType === "SORT") {
        state.searchType[4].value.value_type = action.payload.textSearch;
      }
      if (action.payload.searchType === "TYPE-SHOW") {
        state.searchType[5].value.value_type = action.payload.textSearch;
      }
    },
  },
  extraReducers(builder) {
    builder
      .addCase(searchProductByName.pending, (state) => {
        state.loading = true;
      })
      .addCase(searchProductByName.rejected, (state, action) => {
        state.error = action.error;
      })
      .addCase(searchProductByName.fulfilled, (state, action) => {
        state.product = action.payload.data;
      });
    builder
      .addCase(getListTextSearch.pending, (state) => {
        state.listTextSearch.loading = true;
      })
      .addCase(getListTextSearch.rejected, (state, action) => {
        state.listTextSearch.loading = false;
        state.listTextSearch.error = action.error;
      })
      .addCase(getListTextSearch.fulfilled, (state, action) => {
        state.listTextSearch.loading = false;
        state.listTextSearch.data = action.payload.data?.data;
      });
    builder
      .addCase(getShopByNameOrCode.pending, (state) => {
        state.listShop.loading = true;
      })
      .addCase(getShopByNameOrCode.rejected, (state, action) => {
        state.listShop.loading = false;
        state.listShop.error = action.error;
      })
      .addCase(getShopByNameOrCode.fulfilled, (state, action) => {
        state.listShop.loading = false;
        state.listShop.data = action.payload.data;
      });
  },
});
export const { addSearch, changeSearch, changeSearchType } =
  searchSlice.actions;
export default searchSlice.reducer;
