import { FilterProductAction, ShopState } from "@/types/shop/shop";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  disableFollowShopByUser,
  followShopByUser,
  getAllCategoryShop,
  getDataDetailShopByCodeShop,
  getDataProductShopByCodeShop,
} from "./shop-thunks";

const shopState: ShopState = {
  dataDetailShop: {
    data: null,
    loading: true,
    error: null,
  },
  dataProductShop: {
    data: null,
    category_all: null,
    loading: true,
    error: null,
  },
  dataFilterProductShop: {
    text_search: null,
    category_code: null,
    type: null,
  },
  followShopByUser: {
    message: null,
    loading: false,
    error: null,
  },
  dataActionFollowShop: {
    loading: false,
    message: null,
    error: null,
  },
  dataCategoryShop: {
    loading: false,
    data: null,
    error: null,
  },
};
const shopSlice = createSlice({
  name: "shop-slice",
  initialState: shopState,
  reducers: {
    filterProductShop: (state, action: PayloadAction<FilterProductAction>) => {
      if (action.payload.text_search) {
        state.dataFilterProductShop.text_search = action.payload.text_search;
      }
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getDataDetailShopByCodeShop.pending, (state) => {
        state.dataDetailShop.data = null;
        state.dataDetailShop.loading = true;
      })
      .addCase(getDataDetailShopByCodeShop.rejected, (state, action) => {
        state.dataDetailShop.loading = false;
        state.dataDetailShop.error = action.error;
      })
      .addCase(getDataDetailShopByCodeShop.fulfilled, (state, action) => {
        state.dataDetailShop.loading = false;
        state.dataDetailShop.data = action.payload.data?.data[0] || null;
      });
    builder
      .addCase(getDataProductShopByCodeShop.pending, (state) => {
        state.dataProductShop.loading = true;
      })
      .addCase(getDataProductShopByCodeShop.rejected, (state, action) => {
        state.dataProductShop.loading = false;
        state.dataProductShop.error = action.error;
      })
      .addCase(getDataProductShopByCodeShop.fulfilled, (state, action) => {
        state.dataProductShop.loading = false;
        state.dataProductShop.data = action.payload.data;
        state.dataProductShop.category_all =
          action.payload.data?.category?.category_product;
      });
    builder
      .addCase(followShopByUser.pending, (state) => {
        state.followShopByUser.loading = true;
      })
      .addCase(followShopByUser.rejected, (state, action) => {
        state.followShopByUser.loading = false;
        state.followShopByUser.error = action.error;
      })
      .addCase(followShopByUser.fulfilled, (state, action) => {
        state.followShopByUser.loading = false;
        state.followShopByUser.message = action.payload.data;
      });
    builder
      .addCase(disableFollowShopByUser.pending, (state) => {
        state.followShopByUser.loading = true;
      })
      .addCase(disableFollowShopByUser.rejected, (state, action) => {
        state.followShopByUser.loading = false;
        state.followShopByUser.message = null;
        state.followShopByUser.error = action.error;
      })
      .addCase(disableFollowShopByUser.fulfilled, (state, action) => {
        state.followShopByUser.loading = false;
        state.followShopByUser.error = null;
        state.followShopByUser.message = action.payload.data;
      });
    builder
      .addCase(getAllCategoryShop.pending, (state) => {
        state.dataCategoryShop.loading = false;
      })
      .addCase(getAllCategoryShop.rejected, (state, action) => {
        state.dataCategoryShop.loading = false;
        state.dataCategoryShop.data = null;
        state.dataCategoryShop.error = action.error;
      })
      .addCase(getAllCategoryShop.fulfilled, (state, action) => {
        state.dataCategoryShop.loading = false;
        state.dataCategoryShop.error = null;
        state.dataCategoryShop.data = action.payload.data.data;
      });
  },
});
export const { filterProductShop } = shopSlice.actions;
export default shopSlice.reducer;
