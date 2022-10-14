export type CommentData<T> = {
  rows?: number;
  data: Array<T> | null;
  loading: boolean;
  error: any | null;
}
export type CommentState<T> = {
  dataComment: CommentData<T>
}
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
}

export type EvaluateType = {
  color?:
  | "#dc3545"
  | '#ffc107'
  | '#28a745' | null
  name: 'Quá hài lòng' | 'Hài lòng' | 'Tạm ổn' | 'Không ổn' | 'Quá không ổn '
}
export interface CommentItemProps {
  CommentItemProps: CommentItem;
}
