import { Ref } from "react";
import { ProductItem } from "../product/product";
export type searchListProps = {
  refInputSearch: Ref<HTMLFormElement>;
  nameSearch: string;
};

export type SearchActionDispatch = {
  textSearch?: string;
  searchType?: SearchType;
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
  valueType: string;
  nameType: "LIST-SHOP" | "SORT" | "TYPE-SHOW" | "";
};
export type FilterSearch = {
  name: "LIST-SHOP" | "SORT" | "TYPE-SHOW" | "";
  value: string;
};
export type SearchDataAPI = {
  value: SearchType[];
  textSearch: string;
  page?: string;
};
