import { CartItem, CartShop } from "@/types/cart/cart";

export const joinProductShop = (arr: CartItem[]) => {
  let i = 0, j = 0;
  let resultShop: CartShop[] = []
  for (i; i < arr.length; i++) {
    for (j = i; j < arr.length + 1; j++) {
      if (arr[j + 1]) {
        if (arr[i].code_shop === arr[j + 1].code_shop) {
          console.log("vi tri : ", i, ' - ', arr[i], arr[j + 1])
          resultShop.push({
            code_shop: arr[i].code_shop as string,
            name_shop: '',
            cartItem: [arr[i], arr[j + 1]]
          })
        }
      }
      else {
        const data = resultShop.some(item => item.code_shop === arr[i].code_shop)
        if (!data) {
          resultShop.push({
            code_shop: arr[i].code_shop as string,
            name_shop: '',
            cartItem: [arr[i]]
          })
        }
      }
    }
  }
  return resultShop;
}
