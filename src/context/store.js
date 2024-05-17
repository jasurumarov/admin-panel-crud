import { configureStore } from "@reduxjs/toolkit";
import heartSlice from "./slice/heartSlice";
import cartSlice from './slice/cartSlice'
import { api } from "./api/api";

export const store = configureStore({
  reducer: {
    heart: heartSlice,
    cart: cartSlice,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(api.middleware),
});