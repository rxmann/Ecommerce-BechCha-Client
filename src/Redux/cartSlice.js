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
        addProductSuccess: (state, action) => {
            state.isLoading = false;

            const product = state.cart.find(item => item.product._id === action.payload.product._id)
            if (product) {
                const updatedCart = state.cart.map(item => {
                    if (item.product._id === action.payload.product._id ) {
                        if ( item.maxQuantity <= action.payload.quantity) {
                            return { ...item, quantity: item.quantity + action.payload.quantity };
                        }
                        else {
                            return { ...item, quantity: action.payload.maxQuantity };
                        }
                        
                    }
                    return item;
                });
                state.cart = updatedCart;
                state.totalAmount += action.payload.product.price * action.payload.quantity 
            }
            else {
                state.cart.push(action.payload);
                state.totalQuantity += 1;
                state.totalAmount += action.payload.product.price * action.payload.quantity;
            }

        },
        deleteProductSuccess: (state, action) => {
            state.isLoading = false;
            const prodId = action.payload;
            const productItem = state.cart.find(item => item.product._id.toString() === prodId)
            state.totalQuantity -= 1;
            state.totalAmount -= productItem.product.price * productItem.quantity;
            state.cart = state.cart.filter(item => item.product._id.toString() !== prodId);
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