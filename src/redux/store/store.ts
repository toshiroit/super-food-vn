import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import rootReducers from "../reducer/rootReducers";

const customizedMiddleware = getDefaultMiddleware({
  serializableCheck: false
})
export const store = configureStore({
  devTools: true,
  reducer: rootReducers,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
  }),
});
