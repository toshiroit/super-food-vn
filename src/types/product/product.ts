export type ProductItem = {
  codeProduct: string;
  sale: number;
  link: string;
  name: string;
  price: number;
  image: string;
  point: number;
  payQuality: string;
};
export interface ProductItemProps {
  productItemProps: ProductItem;
}
export interface ProductListProps {
  productList?: ProductItem[];
}
export type CommentReplay = {
  code: string;
  user: string;
  name: string;
  textComment: string;
  dateComment: string;
  like: number;
  isCheck: boolean;
  codeReplay: string;
  codeShop: string;
};
export type ProductCommentItem = {
  code: string;
  avatar: string;
  name: string;
  rating: number;
  dateComment: string;
  like: number;
  textComment: string;
  codeShop: string;
  images?: [
    {
      code: string;
      link: string;
      status?: boolean;
    }
  ];
  videos?: [
    {
      code: string;
      link: string;
      status?: boolean;
    }
  ];
  commentReplay?: CommentReplay[];
  grComment: 1 | 2;
};
export type ProductContentData = {
  code?: string;
  title: string;
  content: string;
  isActive: number;
};
