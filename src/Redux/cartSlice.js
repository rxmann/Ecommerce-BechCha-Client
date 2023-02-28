import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: "cart",
    initialState: {
        products: [],
        quantity: 0,
        total: 0,
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
            state.isLoading = false;
            state.quantity += 1;
            state.products.push(action.payload);
            state.total += action.payload.price * action.payload.quantity;
            console.log("State: ", state.quantity, state.total);
        },
        deleteProductSuccess: (state, action) => {
            state.isLoading = false;
            const prodId = action.payload;
            const product = state.products.find(prod => prod._id === prodId)
            state.quantity -= 1;
            state.total -= product.price * product.quantity;
            state.products = state.products.filter(prod => prod._id !== prodId);
        },
        emptyCart: (state) => {
            state.products = [];
            state.quantity = 0;
            state.total = 0;
            state.isLoading = false;
            state.error = false;
        }


    }
})


export const { addProductSuccess, deleteProductSuccess, cartStart, cartFail, emptyCart } = cartSlice.actions;
export default cartSlice.reducer;