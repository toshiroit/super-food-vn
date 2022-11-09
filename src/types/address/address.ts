export type AddressState<T> = {
  loading: boolean;
  error: any | null;
  message: any | null;
  data: ItemAddressShow[] | null;
}
export type ItemAddressShow = {
  code_address: string;
  full_name: string;
  phone: string;
  detail_address: string;
  status: boolean;
  street: string;
  village: string;
  province: string;
}

export interface ItemAddressShowProps {
  itemAddress: ItemAddressShow
}
