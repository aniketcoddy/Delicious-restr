import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "../Store/slices/CartSlice"

const Store = configureStore({
    reducer:{
        Cart : CartSlice
    }
})

export type RootState = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;
export default Store;