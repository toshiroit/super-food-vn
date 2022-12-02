export type CommentData<T> = {
  rows?: number;
  data: Array<T> | null;
  loading: boolean;
  error: any | null;
};
export type CommentState<T> = {
  dataComment: CommentData<T>;
};
export type CommentItem = {
  avatar: string | null;
  code_comment: string | null;
  code_message: string | null;
  full_name: string;
  image: Array<string> | null;
  video: Array<string>;
  star: number | 0;
  date: string | null;
  like: number;
  isCheck: boolean | false;
  comment: string | null;
  createdat: string;
  updatedat: string;
  evaluate: number;
  like_count: number;
  like_data: any;
};

export type EvaluateType = {
  color?: "#dc3545" | "#ffc107" | "#28a745" | null;
  name: "Quá hài lòng" | "Hài lòng" | "Tạm ổn" | "Không ổn" | "Quá không ổn ";
};
export interface CommentItemProps {
  CommentItemProps: CommentItem;
}

export type EvaluateProductItem = {
  code_evaluate: string;
  code_order: string;
  code_product: string;
  code_user: string;
  createdAt: string;
  evaluate_product: number;
  evaluate_progress: number;
  evaluate_ship: number;
  avatar: string;
  full_name: string;
  images: any;
  text: string;
};
export interface EvaluateProductItemIProps {
  itemEvaluate: EvaluateProductItem;
}
