import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: "cart",
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
        addProductSuccess: (state, action) => {
            console.log(action.payload);
            state.isLoading = false;
            state.totalQuantity += 1;
            state.cart.push(action.payload);
            state.totalAmount += action.payload.product.price * action.payload.quantity;
        },
        deleteProductSuccess: (state, action) => {
            state.isLoading = false;
            const prodId = action.payload;
            const product = state.cart.find(prod => prod.product === prodId)
            state.totalQuantity -= 1;
            state.totalAmount -= product.price * product.quantity;
            state.cart = state.cart.filter(prod => prod._id !== prodId);
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


export const { addProductSuccess, deleteProductSuccess, cartStart, cartFail, emptyCart } = cartSlice.actions;
export default cartSlice.reducer;