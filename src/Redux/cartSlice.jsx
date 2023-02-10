import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: "cart",
    initialState: {
        products: [],
        quantity: 0,
        total: 0,
    },
    reducers: {
        addProduct: (state, action) => {
            state.quantity +=  1;
            state.products.push(action.payload);
            state.total += action.payload.price * action.payload.quantity;
            console.log("State: ", state.products, state.quantity, state.total);
        }
    }
})


export const { addProduct } = cartSlice.actions;
export default cartSlice.reducer;