import { ProductSliceState } from "@/types/product/product";
import { createSlice } from "@reduxjs/toolkit";
import { getProductAll, getProductByCodeOrName, searchProductByName } from "./product-thunks";

const initialState: ProductSliceState = {
  data: null,
  dataAll: null,
  message: null,
  loading: false,
  dataProductDetail: null,
  dataProductSearch: {
    data: null,
    loading: false
  },
  dataProductProductHot: {
    loading: false,
    data: null,
    error: ''
  },
  dataProductProductNew: {
    loading: false,
    data: null,
    error: ''
  },
  dataProductShopNew: {
    loading: false,
    data: null,
    error: ''
  },
  dataProductEvaluate: {
    loading: false,
    data: null,
    error: ''
  },
  dataProductPayTop: {
    loading: false,
    data: null,
    error: ''
  },
  error: null
}
const productSlice = createSlice({
  name: 'product-slice',
  initialState: initialState,
  reducers: {
    getProduct: (state, action) => {

    }
  },
  extraReducers(builder) {
    builder.addCase(getProductByCodeOrName.pending, (state) => {
      state.loading = true
    }).addCase(getProductByCodeOrName.rejected, (state, action) => {
      state.loading = false
      state.error = action.error
    }).addCase(getProductByCodeOrName.fulfilled, (state, action) => {
      state.loading = false;
      state.dataProductDetail = action.payload.data
    })

    builder.addCase(getProductAll.pending, (state, action) => {
      state.loading = true
    }).addCase(getProductAll.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error
    }).addCase(getProductAll.fulfilled, (state, action) => {
      state.loading = false;
      if (action.payload.data) {
        if (action.payload.data.type === 'new-product') {
          state.dataProductProductNew.data = action.payload.data.data
        }
        if (action.payload.data.type === 'shop-new') {
          state.dataProductShopNew.data = action.payload.data.data
        }
        if (action.payload.data.type === 'pay-top') {
          state.dataProductPayTop.data = action.payload.data.data
        }
        if (action.payload.data.type === 'evaluate') {
          state.dataProductEvaluate.data = action.payload.data.ta
        }
      }

      state.dataAll = action.payload.data
    })
    builder.addCase(searchProductByName.pending, (state) => {
      state.dataProductSearch.loading = true
      state.loading = true
    }).addCase(searchProductByName.rejected, (state, action) => {
      state.dataProductSearch.loading = false
      state.error = action.error
    }).addCase(searchProductByName.fulfilled, (state, action) => {
      state.dataProductSearch.loading = false
      state.dataProductSearch.data = action.payload.data
    })
  },
})

export const { getProduct } = productSlice.actions;
export default productSlice.reducer;
