export type OrderState = {
  dataListOrder: {
    loading: boolean;
    error: any | null;
    message: any | null;
    data: any | null
  },
  dataOrderDetail: {
    loading: boolean;
    error: any | null;
    message: any | null;
    data: any | null
  }
}

export type OrderGetDataAPI = {
  page: number;
}
export type OrderGetDetailAPI = {
  code_order: string;
}
export type ItemOrder = {
  code_order: string;
  date_order: string;
  image_shop: string;
  total_order: number;
  phone_shipw: string;
  progress: number;
  name_product: string;
  image_product: string;
}
export interface ItemOrderProps {
  itemOrder: ItemOrder
}
