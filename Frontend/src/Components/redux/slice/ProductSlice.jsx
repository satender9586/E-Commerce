import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"

export const fetchAllProuct = createAsyncThunk("fetch/Product", async () => {
    try {
        const response = axios.get("http://localhost:8080/api/v1/product/products")
        return response;
    } catch (error) {
        console.log("Error Fron product api callinng", error)
    }
})


const productSlice = createSlice({
    name: "product",
    initialState: {
        data: [],
        status: "idle",
        error: null
    },
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(fetchAllProuct.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchAllProuct.fulfilled, (state, action) => {
                state.status = "success";
                state.data = action.payload;
            })
            .addCase(fetchAllProuct.rejected, (state, action) => {
                state.status = "error";
                state.error = action.error.message;
            });
    }

})



export default productSlice.reducer;

