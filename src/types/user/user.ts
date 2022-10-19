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
  dataCheckPhone?: any;
  verifyCode?: any;
};
export type AuthCheckPhone = {
  phone: string;
};

export type ChangeInfoUser = {
  isChangeEmail?: boolean;
  isChangePhone?: boolean;
  isPasswordV1?: boolean;
  isPasswordV2?: boolean;
}

export type UserInfoFull = {
  fullName?: string;
  date?: string;
  sex?: boolean;
  address?: string;
  email?: string;
  phone?: string;
  passwordv1?: string;
  passwordv2?: string;
  facebook?: string;
  zalo?: string;
}
export type UserDate = {
  day?: string;
  month?: string;
  five?: string;
}
export type Sex = {
  sex: boolean;
}

export type AddressUser = {
  code: string;
  fullName: string;
}
