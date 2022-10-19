import { CartItem } from "../cart/cart";

export type CheckoutState = {
  data: CartItem[];
  priceResult: number;
  priceDiscount: number;
  checkout?: CheckoutPayment;
  address?: {};
  shipType?: string;
}


export type CheckoutPayment = {
  code: string;
  namePayment: string;
  image?: string;
  status: boolean;
}
