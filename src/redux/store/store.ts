import { configureStore } from "@reduxjs/toolkit";
import rootReducers from "../reducer/rootReducers";

export const store = configureStore({
  reducer: rootReducers,
});
