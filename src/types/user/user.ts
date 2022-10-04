import { NextPage } from "next";

export type UserChildren = {
  contentUser?: React.ReactNode;
};
export type UserHomeChildren = {
  children: React.ReactNode;
};

export type UserLoginPassword = {
  phone: number | string;
  email?: string;
  password: string;
  passwordConfirmation: string;
};

export type AuthUserState = {
  loading: boolean;
  data: any | null;
  error: any | null;
  checkPhone: boolean;
};
export type AuthCheckPhone = {
  phone: string;
};
