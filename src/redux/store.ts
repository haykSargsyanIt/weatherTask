import { configureStore } from "@reduxjs/toolkit";
import weatherReducer from "./weather/weatherSlice"

export const store = configureStore({
    reducer: { weather: weatherReducer },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false })
})

export const storeDispatch = store.dispatch;
export const getStoreState = store.getState;

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch