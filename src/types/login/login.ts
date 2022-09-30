export type LoginCodeValue = {
  code1: string | number | undefined;
  code2: string | number | undefined;
  code3: string | number | undefined;
  code4: string | number | undefined;
  code5: string | number | undefined;
  code6: string | number | undefined;
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
  fullName: string | undefined;
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
  userName?: string;
  password: string;
  passwordConfirmation: string;
  role?: "ADMIN" | "USER" | "SHOP";
  verifyCodeUser?: string;
  status?: 0 | 1;
};
