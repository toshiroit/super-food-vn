export interface VoucherT {
  code_w_voucher: string;
  name_voucher: string;
  description: string;
  time_start: string;
  time_end: string;
  price_voucher: number;
  quality_voucher: number;
}
export type VoucherProductData = {
  code_product: string;
};
export type VoucherDataCheck = {
  code_product: VoucherProductData[];
  code_w_voucher: string;
};
export type VoucherState = {
  dataCheckVoucher: {
    loading: boolean;
    error: any;
    data: any;
  };
};
