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
  dataSendCode: {
    loading: boolean;
    error: any;
    message: any;
  };
  verifyCode?: any;
  login_register: {
    loading: boolean;
    error: any | null;
  };
  data_verifyCode: {
    loading: boolean;
    message: string | null;
    error: any | null;
  };
};
export type AuthCheckPhone = {
  phone: string;
};

export type ChangeInfoUser = {
  isChangeEmail?: boolean;
  isChangePhone?: boolean;
  isPasswordV1?: boolean;
  isPasswordV2?: boolean;
};

export type UserInfoFull = {
  full_name?: string;
  date?: string;
  sex?: boolean;
  address?: string;
  email?: string;
  phone?: string;
  passwordv1?: string;
  passwordv2?: string;
  facebook?: string;
  zalo?: string;
};
export type UserDate = {
  day?: string;
  month?: string;
  five?: string;
};
export type Sex = {
  sex: boolean;
};

export type AddressUser = {
  code: string;
  fullName: string;
};

export type UpdateUserW1Info = {
  fullName: string;
  date: string;
  sex: boolean;
};

export type UserState = {
  updateUserW1: {
    data: any | null;
    loading: boolean;
    error: any | null;
  };
};

export type UserDataInfo = {
  box1: {
    full_name: string;
    date: {
      day: number;
      month: number;
      five: number;
    };
    sex: boolean;
    address: string;
  };
  box2: {
    email: string;
    phone: string;
  };
};
