export type OrderState = {
  dataListOrder: {
    loading: boolean;
    error: any | null;
    message: any | null;
    data: any | null;
  };
  dataOrderDetail: {
    loading: boolean;
    error: any | null;
    message: any | null;
    data: any | null;
  };
  dataOrderAction: {
    loading: boolean;
    error: any | null;
    data: any | null;
  };
};

export type OrderGetDataAPI = {
  page: number;
  date_filter?: OrderFilterData;
};
export type OrderGetDetailAPI = {
  code_order: string;
};
export type ItemOrder = {
  code_order: string;
  date_order: string;
  image_shop: string;
  total_order: number;
  phone_shipw: string;
  progress: number;
  name_product: string;
  image_product: string;
};
export interface ItemOrderProps {
  itemOrder: ItemOrder;
}

export type EvaluateOrder = {
  point_star: number;
  point_star_ship: number;
  point_star_progress: number;
  text: string;
  image: any;
};
export type Images = {
  code: string;
  url: string | ArrayBuffer | null;
};
export type OrderFilterData = {
  text_search?: string | null;
  date_start?: string | null;
  date_end?: string | null;
  status_order?:
    | "-3"
    | "-1"
    | "-2"
    | "1"
    | "2"
    | "3"
    | "4"
    | "5"
    | "6"
    | "-11"
    | "23"
    | "34"
    | null;
  sort_order?: "1" | "2" | "3" | "4" | null;
};
