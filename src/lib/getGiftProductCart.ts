import { CartItem } from "@/types/cart/cart";
import { VoucherT } from "@/types/voucher/voucher";

export const getGiftProductCart = (arr: CartItem[]) => {
  let result: VoucherT[] = []
  if (arr) {
    arr.map(item => {
      if (item.code_w_voucher) {
        result.push({
          code_w_voucher: item.code_w_voucher,
          name_voucher: item.name_voucher,
          description: item.description,
          price_voucher: item.price_voucher,
          quality_voucher: item.quality_voucher,
          time_start: item.time_start,
          time_end: item.time_end
        })
      }
    })
  }
  return result
}
