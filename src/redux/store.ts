import { configureStore } from "@reduxjs/toolkit";
import filter from "./slisec/filterSlice";
import cart from './slisec/cartSlice'

export const store = configureStore({
    reducer: {
        filter,
        cart
    }
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;