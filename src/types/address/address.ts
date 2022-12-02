import { SerializedError } from "@reduxjs/toolkit";
export type AddressState<T> = {
  dataAddress: {
    loading: boolean;
    error: any | null;
    message: any | null;
    data: ItemAddressShow[] | null;
  };
  dataAddAddress: {
    loading: boolean;
    message: string | null;
    error: string | null;
  };
  dataProvincesAPI: {
    data: any[];
    loading: boolean;
    error: SerializedError | null;
  };
  dataAddressDetail: {
    loading: boolean;
    error: any;
    data: ItemAddressShow | null;
  };
  dataUpdateAddress: {
    loading: boolean;
    error: any;
    data: any;
  };
};
export type ItemAddressShow = {
  code_address: string;
  full_name: string;
  phone: string;
  email: string;
  detail_address: string;
  status: boolean;
  street: string;
  village: string;
  district: string;
  city: string;
};

export interface ItemAddressShowProps {
  itemAddress: ItemAddressShow;
}

export type AddressItem = {
  title: string;
  type: "add" | "edit";
  value?: ItemAddressShow;
};
export interface AddRessItemIProps {
  item: AddressItem;
}

export type City = {
  name: string;
  type: string;
  name_with_type: string;
  path: string;
  code: string;
  parent_code: string;
};
export type Province = {
  name: string;
  slug: string;
  type: string;
  name_with_type: string;
  code: string;
};

export type Village = {
  name: string;
  type: string;
  name_with_type: string;
  path: string;
  path_with_type: string;
  code: string;
  parent_code: string;
};

export type DataAddress = {
  city: {
    value: string;
    data: City[];
  };
  province: {
    value: string;
    data: Province[];
  };
  village: {
    value: string;
    data: Village[];
  };
};
