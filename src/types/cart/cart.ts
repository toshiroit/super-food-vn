import { VoucherT } from '../voucher/voucher'
export type CartState<T> = {
  data: Array<T> | null;
  loading: boolean;
  error?: any;
  pageSize?: number;
  dataLocal: any[];
  message: any;
  priceResult?: number;
  codeGift?: string;
  priceDiscount?: number;
  code_address?: string;
}


export interface CartItem extends VoucherT {
  readonly code_cart: string | null;
  readonly code_product: string | null;
  readonly code_product_detail: string | null;
  readonly code_shop?: string | null;
  readonly code_user?: string | null;
  code_voucher: string | null;
  name_shop: string;
  evaluate: number | undefined;
  id_product: number | null;
  image: string | null;
  name: string | null;
  discount: number | null;
  price: number | null;
  quality_product: number | undefined;
  status: boolean | false;
  type?: string;
  createdat?: string | null;
  updatedat?: string | null;
  info_product: string;
}

export interface CartItemProps {
  item: CartItem;
  quality?: number;
  infoProduct?: string;
}
export type OnChangeCartType = {
  type: '+' | '-' | 'remove';
  data?: CartItem;
}
export type CartShop = {
  code_shop: string;
  name_shop: string;
  cartItem: CartItem[]
}
export type CartItemShop = {
  shop: any
  cart: CartItem[]
}

export type PriceResultCartData = {
  data: CartItem[];
  price_gift?: number;
  code_gift?: string;
}

export type GiftT = {
  code?: string;
  isCheck?: boolean;
  price_gift?: number;
  show?: 'SHOW' | 'HIDE'
}
