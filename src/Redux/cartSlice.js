import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: "usercart",
    initialState: {
        cart: [],
        totalQuantity: 0,
        totalAmount: 0,
        isLoading: false,
        error: false,
    },
    reducers: {
        cartStart: (state) => {
            state.isLoading = true;
            state.error = false;
        },
        cartFail: (state) => {
            state.isLoading = false;
            state.error = true;
        },
        updateCartSuccess: (state, action) => {
            state.isLoading = false;
            state.cart = action.payload.cart;
            state.totalQuantity = action.payload.totalQuantity;
            state.totalAmount = action.payload.totalAmount;
        },
        emptyCart: (state) => {
            state.isLoading = false;
            state.cart = [];
            state.totalQuantity = 0;
            state.totalAmount = 0;
            state.error = false;
        }
    }
})


export const { 
    addProductSuccess, 
    updateCartSuccess,
    deleteProductSuccess, 
    decreaseProductFromCart,
    increaseProductFromCart,
    cartStart, 
    cartFail, 
    emptyCart } = cartSlice.actions;
export default cartSlice.reducer;