import { Ref } from "react";
import { ProductItem } from "../product/product";
export type searchListProps = {
  refInputSearch: Ref<HTMLFormElement>;
  nameSearch: string;
};

export type SearchActionDispatch = {
  textSearch?: string;
  searchType?:
    | "OPEN-SHOP"
    | "DISCOUNT"
    | "FREE-SHIP"
    | "EVALUATE-TOP"
    | "SORT"
    | "TYPE-SHOW";
};
export type ChangeSearchType = {
  textSearch: number;
  searchType:
    | "OPEN-SHOP"
    | "DISCOUNT"
    | "FREE-SHIP"
    | "EVALUATE-TOP"
    | "SORT"
    | "TYPE-SHOW";
};
/**
 * @description
 * searchType Array
 *  0 ; "SORT"
 *  1 : "TYPE-SHOW",
 *  2 : "LIST-SHOP"
 */
export type SearchSliceState = {
  textSearch: string;
  product: ProductItem[];
  searchType: SearchType[];
  error: any;
  message?: string;
  loading: boolean;
  listTextSearch: {
    data: any;
    loading: boolean;
    error: any;
  };
  listShop: {
    data: any;
    loading: boolean;
    error: any;
  };
};

export type SearchType = {
  value: {
    value_name_type: 1 | 2 | 3 | 4 | 5 | 6;
    value_type: number;
  };
  nameType:
    | "OPEN-SHOP"
    | "DISCOUNT"
    | "FREE-SHIP"
    | "EVALUATE-TOP"
    | "SORT"
    | "TYPE-SHOW";
};
export type FilterSearch = {
  name:
    | "OPEN-SHOP"
    | "DISCOUNT"
    | "FREE-SHIP"
    | "EVALUATE-TOP"
    | "SORT"
    | "TYPE-SHOW";
  value: number;
};
export type SearchDataAPI = {
  textSearch: string;
  type_filter?: SearchType[];
  page?: string;
};
