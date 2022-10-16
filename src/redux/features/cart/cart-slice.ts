import { randomLengthText } from "@/lib/random";
import { CartItem, CartItemProps, CartState, OnChangeCartType, PriceResultCartData } from "@/types/cart/cart";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getCartByCodeUser, removeCartItemByCodeCart } from "./cart-thunks";

const initialState: CartState<CartItem> = {
  data: null,
  loading: false,
  error: '',
  dataLocal: [],
  message: null,
  codeGift: '',
  priceDiscount: 0
}
const cartSlice = createSlice({
  name: 'cart-slice',
  initialState: initialState,
  reducers: {
    addCart: (state, action: PayloadAction<CartItemProps>) => {
      const item = action.payload.item || null
      if (item) {
        const cartLocal = localStorage.getItem('cart')
        const cartItem: CartItem = {
          code_cart: randomLengthText(14),
          code_product: item.code_product,
          code_user: null,
          price: item.price,
          quality_product: action.payload.quality,
          name: item.name,
          image: item.image,
          discount: item.discount,
          code_product_detail: item.code_product_detail,
          id_product: item.id_product,
          status: item.status,
          evaluate: item.evaluate,
          code_shop: item.code_shop,
          code_w_voucher: item.code_w_voucher,
          name_voucher: item.name_voucher,
          quality_voucher: item.quality_voucher,
          time_start: item.time_start,
          time_end: item.time_end,
          price_voucher: item.price_voucher,
          description: item.description,
          code_voucher: item.code_voucher,
          createdat: item.createdat,
          type: item.type,
          updatedat: item.updatedat,
        }
        if (!cartLocal) {
          const cartArr = []
          cartArr.push(
            cartItem
          )
          if (cartArr) {
            localStorage.setItem('cart', JSON.stringify(cartArr))
          }
          state.dataLocal = cartArr;
        }
        else {
          const arrCartLocal = JSON.parse(cartLocal) as [any]
          const isCheck = arrCartLocal.some(item => item.code_product === cartItem.code_product)
          if (!isCheck) {
            arrCartLocal.push(cartItem)
          }
          localStorage.setItem('cart', JSON.stringify(arrCartLocal))
          state.dataLocal = arrCartLocal
        }
      }
      return state
    },
    onChangeCart: (state, action: PayloadAction<OnChangeCartType>) => {
      let data: any[] = []
      if (state.dataLocal) {
        data = state.dataLocal
      }
      else {
        data = JSON.parse(localStorage.getItem('cart') || '')
      }
      if (data) {
        if (action.payload.type === '+') {
          data.map(item => {
            if (item.code_product === action.payload.data?.code_product) {
              item.quality_product += 1
            }
          })
          state.dataLocal = data

        }
        else if (action.payload.type === '-') {
          data.map(item => {
            if (item.code_product === action.payload.data?.code_product) {
              if (item.quality_product > 0)
                item.quality_product -= 1
            }
          })
          state.dataLocal = data
        }
        else if (action.payload.type == 'remove') {
          data = data.filter(item => item.code_product !== action.payload.data?.code_product)
          state.dataLocal = data;
        }
        else {

        }
        localStorage.setItem('cart', JSON.stringify(data))
      }
      return state;
    },
    setCartLocal: (state) => {
      if (localStorage.getItem('cart')) {
        if (JSON.parse(localStorage.getItem('cart') || '').length !== 0) {
          state.dataLocal = JSON.parse(localStorage.getItem('cart') || '')
        }
        else {

        }

      }

    },
    priceResultData: (state, action: PayloadAction<PriceResultCartData>) => {
      let result: number = 0
      const priceResultQuality = (price: number, quality: number) => {
        return price * quality;
      }
      const priceDiscount = (price: number, discount: number) => {
        const discountResult = discount / 100;
        return price - (price * discountResult);
      };
      action.payload.data.map(item => {
        result += priceDiscount(priceResultQuality(item.price as number, item.quality_product as number), item.discount as number)
      })

      if (action.payload.price_gift) {
        state.codeGift = action.payload.code_gift
        state.priceDiscount = result - priceDiscount(result, action.payload.price_gift)
        result = priceDiscount(result, action.payload.price_gift)
      }
      state.priceResult = result

      return state;

    },
    restCart: (state) => {
      state.data = null
    },
    resultPay: (state) => {

    }
  },
  extraReducers(builder) {
    builder.addCase(getCartByCodeUser.pending, (state) => {
      state.loading = true
    }).addCase(getCartByCodeUser.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error
    }).addCase(getCartByCodeUser.fulfilled, (state, action) => {
      localStorage.setItem('cart', JSON.stringify(action.payload.data))
      state.loading = false;
      state.data = action.payload.data
    })

    builder.addCase(removeCartItemByCodeCart.pending, (state) => {
      state.loading = true
    }).addCase(removeCartItemByCodeCart.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error
    }).addCase(removeCartItemByCodeCart.fulfilled, (state, action) => {
      state.loading = false;
      state.message = action.payload.data
    })
  },
})
export const { setCartLocal, onChangeCart, addCart, restCart, priceResultData } = cartSlice.actions;
export default cartSlice.reducer;
