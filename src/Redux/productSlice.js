import { createSlice } from "@reduxjs/toolkit";


export const productSlice = createSlice({
    name: "product",
    initialState: {
        products: [],
        isFetching: false,
        error: false,
    },
    reducers: {
        // get product list
        getProductsStart: (state) => {
            state.isFetching = true
            state.error = false;
        },
        getProductsSucess: (state, action) => {
            state.isFetching = false;
            state.products = action.payload;
        },
        getProductsFailure: (state) => {
            state.isFetching = false;
            state.error = true;
        }
    },
})


export const { getProductsStart, getProductsFailure, getProductsSucess  } = productSlice.actions;

export default productSlice.reducer;