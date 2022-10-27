export type ProductItem = {
  code_product: string;
  name: string;
  price: number;
  image: string;
  discount: number;
  evaluate: number;
  purchase: number;
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

export type ProductSliceState = {
  message: string | null;
  loading: boolean;
  error?: any | null;
  data?: any | null;
  dataProductDetail?: any | null;
  dataProductSearch: {
    loading: boolean,
    data: any | null
  };
  dataProductShopNew: {
    data: any | null;
    loading: boolean;
    error: any
  },
  dataProductProductNew: {
    data: any | null;
    loading: boolean;
    error: any
  },
  dataProductProductHot: {
    data: any | null;
    loading: boolean;
    error: any
  },
  dataProductPayTop: {
    data: any | null;
    loading: boolean;
    error: any

  },
  dataProductEvaluate: {
    data: any | null;
    loading: boolean;
    error: any

  },
  dataAll?: any | null;
  count?: number;
  pageSize?: number;
}
export type ProductGetDetailDataAPI = {
  code: string | null;
  name: string | null;
}


export type ShowProductList = {
  typeShow: 'SHOP-NEW' | 'PRODUCT-NEW' | 'HOT' | 'GOOD' | 'TOP' | 'ANY',

}
export interface ShowProductListProps {
  item: ShowProductList;
  dataProductAll: any
}


export type GetAllProductTypeAPIThunk = {
  limit?: number;
  type: 'new-product' | 'shop-new' | 'pay-top' | 'evaluate'
}
