export type GiftItem = {
  code: string;
  title: string;
  image: string;
  onSetVoucher: (code: string) => void;
};
