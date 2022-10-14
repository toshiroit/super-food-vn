import { RootState } from "@/types/redux/redux";

export const selectCommentDataComment = (state: RootState) => state.commentSlice.dataComment.data
export const selectCommentLoading = (state: RootState) => state.commentSlice.dataComment.loading
