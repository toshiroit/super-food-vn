import { EvaluateState } from "@/types/evaluate/evaluate";
import { createSlice } from "@reduxjs/toolkit";
import {
  addEvaluateByProduct,
  checkEvaluateByProductUserOrder,
  getEvaluateByProduct,
} from "./evaluate-thunks";

const evaluateState: EvaluateState = {
  dataAddEvaluate: {
    loading: false,
    message: null,
    error: null,
  },
  dataCheckEvaluate: {
    loading: false,
    error: null,
    message: null,
  },
  dataEvaluateProduct: {
    data: null,
    error: null,
    loading: false,
  },
};
const evaluateSlice = createSlice({
  name: "evaluate-slice",
  initialState: evaluateState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(addEvaluateByProduct.pending, (state) => {
        state.dataAddEvaluate.loading = true;
      })
      .addCase(addEvaluateByProduct.rejected, (state, action) => {
        state.dataAddEvaluate.loading = false;
        state.dataAddEvaluate.error = action.error;
      })
      .addCase(addEvaluateByProduct.fulfilled, (state, action) => {
        state.dataAddEvaluate.loading = false;
        state.dataAddEvaluate.message = action.payload.data;
      });
    builder
      .addCase(checkEvaluateByProductUserOrder.pending, (state) => {
        state.dataCheckEvaluate.loading = true;
      })
      .addCase(checkEvaluateByProductUserOrder.rejected, (state, action) => {
        state.dataCheckEvaluate.loading = false;
        state.dataCheckEvaluate.error = action.error;
      })
      .addCase(checkEvaluateByProductUserOrder.fulfilled, (state, action) => {
        state.dataCheckEvaluate.loading = false;
        state.dataCheckEvaluate.message = action.payload.data;
      });
    builder
      .addCase(getEvaluateByProduct.pending, (state) => {
        state.dataEvaluateProduct.loading = true;
      })
      .addCase(getEvaluateByProduct.rejected, (state, action) => {
        state.dataEvaluateProduct.loading = false;
        state.dataEvaluateProduct.error = action.error;
      })
      .addCase(getEvaluateByProduct.fulfilled, (state, action) => {
        state.dataEvaluateProduct.loading = false;
        state.dataEvaluateProduct.data = action.payload.data;
      });
  },
});
export default evaluateSlice.reducer;
