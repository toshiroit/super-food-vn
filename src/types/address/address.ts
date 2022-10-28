export type AddressState<T> = {
  loading: boolean;
  error: any | null;
  message: any | null;
  data: Array<T> | null;
}
export type ItemAddressShow = {
  code_address: string;
  full_name: string;
  phone: string;
  detail_address: string;
  status: boolean;
}

export interface ItemAddressShowProps {
  itemAddress: ItemAddressShow
}
