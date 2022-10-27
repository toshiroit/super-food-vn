export type OrderState = {
  dataListOrder: {
    loading: boolean;
    error: any | null;
    message: any | null;
    data: any | null
  }
}

export type OrderGetDataAPI = {
  page: number;
}
export type ItemOrder = {
  code_order: string;
}
export interface ItemOrderProps {
  itemOrder: ItemOrder
}
