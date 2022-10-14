import { ProductSliceState } from "@/types/product/product";
import { createSlice } from "@reduxjs/toolkit";
import { getProductAll, getProductByCodeOrName } from "./product-thunks";

const initialState: ProductSliceState = {
  data: null,
  dataAll: null,
  message: null,
  loading: false,
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
      state.data = action.payload.data
    })

    builder.addCase(getProductAll.pending, (state) => {
      state.loading = true
    }).addCase(getProductAll.rejected, (state, action) => {
      console.log(action)
      state.loading = false;
      state.error = action.error
    }).addCase(getProductAll.fulfilled, (state, action) => {
      state.loading = false;
      state.dataAll = action.payload.data
    })
  },
})

export const { getProduct } = productSlice.actions;
export default productSlice.reducer;
