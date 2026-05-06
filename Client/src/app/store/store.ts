import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import { catalogApi } from "../../features/catalog/catalogApi";
import { uiSlice } from "../layout/uiSlice";
import { errorApi } from "../../features/about/errorApi";
import { basketApi } from "../../features/basket/basketApi";
import { catalogSlice } from "../../features/catalog/catalogSlice";
import { accountApi } from "../../features/account/accountApi";
import { checkoutApi } from "../../features/checkout/checkoutApi";
import { ordersApi } from "../../features/orders/ordersApi";
import { adminApi } from "../../features/admin/adminApi";

export const store = configureStore({
  reducer: {
    [catalogApi.reducerPath]: catalogApi.reducer,
    [errorApi.reducerPath]: errorApi.reducer,
    [basketApi.reducerPath]: basketApi.reducer,
    [accountApi.reducerPath]: accountApi.reducer,
    [checkoutApi.reducerPath]: checkoutApi.reducer,
    [ordersApi.reducerPath]: ordersApi.reducer,
    [adminApi.reducerPath]: adminApi.reducer,
    ui: uiSlice.reducer,
    catalog: catalogSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      catalogApi.middleware,
      errorApi.middleware,
      basketApi.middleware,
      accountApi.middleware,
      checkoutApi.middleware,
      ordersApi.middleware,
      adminApi.middleware,
    ),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
