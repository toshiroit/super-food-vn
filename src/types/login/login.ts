export type LoginCodeValue = {
  code1: string;
  code2: string;
  code3: string;
  code4: string;
  code5: string;
  code6: string;
};
export type ErrorLoginCode = {
  isCode: boolean;
  message: string | null;
};
export type IsCheckCodeLogin = {
  isCheckCodeSubmit: boolean;
  message: string | null;
};
export type LoginValidate = {
  isError: boolean;
  formError: {};
};
export type LoginFormError = {
  fullName?: string | undefined;
  phone?: string | undefined;
  email?: string | undefined;
  username: string | undefined;
  password: string | undefined;
  passwordConfirmation: string | undefined;
};
export type LoginConfirmation = {
  fullName: string;
  phone: string;
  email?: string;
  token?: string;
  username?: string;
  password: string;
  passwordConfirmation: string;
  role?: "ADMIN" | "USER" | "SHOP";
  verifyCodeUser?: string;
  status?: 0 | 1;
};

export type LoginState = LoginConfirmation & {};
export type LoginPayloadAction = {
  phone?: string;
  password?: string;
  passwordConfirmation?: string;
};
export type LoginPhone = {
  phone: string;
  password: string;
  passwordConfirmation: string;
};
export type LoginRestPasswordData = {
  phone: string;
};
export type RestPasswordData = {
  password: string;
  repeat_password: string;
};
