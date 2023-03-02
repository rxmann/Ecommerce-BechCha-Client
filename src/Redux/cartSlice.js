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
        deleteProductSuccess: (state, action) => {
            state.isLoading = false;
            const prodId = action.payload;
            const productItem = state.cart.find(item => item.product._id.toString() === prodId)
            state.totalQuantity -= 1;
            state.totalAmount -= productItem.product.price * productItem.quantity;
            state.cart = state.cart.filter(item => item.product._id.toString() !== prodId);
        },
        // decreaseProductFromCart: (state, action) => {
        //     state.isLoading = false;
        //     state.cart = action.payload;
        // },
        // increaseProductFromCart: (state, action) => {
        //     state.isLoading = false;
        //     let price, set = false;
        //     const updatedCart = state.cart.map( (item) => {
        //         if (item.product._id.toString() === action.payload && item.quantity < item.product.quantity ) {
        //             price = item.product.price;
        //             set = true;
        //             return { ...item, quantity: item.quantity + 1 }
        //         }
        //         return item;
        //     })
        //     if (set) {
        //         state.cart = updatedCart;
        //         state.totalAmount += price;
        //     }
        // },
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