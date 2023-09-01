import { configureStore } from "@reduxjs/toolkit"
import userDataslice from "./slice/UserSlice.jsx"
import ProductSlice from "./slice/ProductSlice.jsx"
import CartSlice from "./slice/CartSlice.jsx"


export const store = configureStore({
    reducer: {
        user: userDataslice,
        product: ProductSlice,
        cart: CartSlice
    }
})