import { CartItem } from "../cart/cart";
import { AddressUser } from "../user/user";

export type CheckoutState = {
  data: CartItem[];
  priceResult: number;
  priceDiscount: number;
  checkout?: CheckoutPayment;
  address: AddressUser,
  shipType?: string;
  code_payment?: string;
  dataCheckout: {
    loading: boolean;
    error: any | null;
    data: any | null;
  }
}


export type CheckoutPayment = {
  code: string;
  namePayment: string;
  image?: string;
  status: boolean;
}
export type CheckoutActionPayment = {
  code: string;
}
export type CheckoutAction = {
  data: any[],
  priceDiscount: number,
  priceResult: number,
  address: {
    code: string,
    fullName: string
  },
}
