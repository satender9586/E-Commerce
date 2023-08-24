import { configureStore } from "@reduxjs/toolkit"
import userDataslice from "./slice/UserSlice.jsx"


export const store = configureStore({
    reducer: {
        user: userDataslice,
    }
})