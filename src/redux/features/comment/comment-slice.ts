import { CommentState } from "@/types/comment/comment";
import { createSlice } from "@reduxjs/toolkit";
import { getCommentByProduct } from "./comment-thunks";

const dataComment: CommentState<any> = {
  dataComment: {
    data: null,
    loading: false,
    error: null
  }
}
const commentSlice = createSlice({
  name: "comment-slice",
  initialState: dataComment,
  reducers: {
    addComment: (state, action) => {

    }
  },
  extraReducers: (builder) => {
    builder.addCase(getCommentByProduct.pending, (state) => {
      state.dataComment.loading = true
    }).addCase(getCommentByProduct.rejected, (state, action) => {
      state.dataComment.loading = false;
      state.dataComment.error = action.error
    }).addCase(getCommentByProduct.fulfilled, (state, action) => {
      state.dataComment.loading = false;
      state.dataComment.data = action.payload.data
    })
  }
})
export const { addComment } = commentSlice.actions
export default commentSlice.reducer;
