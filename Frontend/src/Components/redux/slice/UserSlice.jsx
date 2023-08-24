import { createSlice } from "@reduxjs/toolkit"


const userDataslice = createSlice({
    name: "user",
    initialState: [],
    reducers: {
        addItem: (state, action) => {
            state.push(...state, action.payload)
        }
    }

})

export const { addItem } = userDataslice.actions;

export default userDataslice.reducer;