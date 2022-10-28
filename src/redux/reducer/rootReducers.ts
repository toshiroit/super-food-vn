import { combineReducers } from "@reduxjs/toolkit";
import addressSlice from "../features/address/address-slice";
import authSlice from "../features/auth/auth-slice";
import cartSlice from "../features/cart/cart-slice";
import checkoutSlice from "../features/checkout/checkout-slice";
import commentSlice from "../features/comment/comment-slice";
import displaySlice from "../features/display/display-slice";
import loginSlice from "../features/login/login-slice";
import orderSlice from "../features/order/order-slice";
import productSlice from "../features/product/product-slice";
import searchSlice from "../features/search/search-slice";
import userSlice from "../features/user/user-slice";

export default combineReducers({
  displaySlice,
  loginSlice,
  authSlice,
  userSlice,
  cartSlice,
  productSlice,
  commentSlice,
  checkoutSlice,
  searchSlice,
  orderSlice,
  addressSlice
});
