
import { createSlice } from "@reduxjs/toolkit"

const AddToCartSlice = createSlice({
    name: "cart",
    initialState: {
        items: []
    },
    reducers: {
        addtoCart: (state, action) => {
            const existinitem = state.items.find((value) => {
                return value._id == action.payload._id
            })
            if (existinitem) {
                existinitem.quantity++;
            }
            else {
                state.items.push({ ...action.payload, quantity: 1 })
            }
        },
        removeCart: (state, action) => {
            state.items = state.items.filter((item) => item._id !== action.payload);
        }
    }
})

export default AddToCartSlice.reducer;
export const { addtoCart, removeCart } = AddToCartSlice.actions;