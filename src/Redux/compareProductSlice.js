import { createSlice } from "@reduxjs/toolkit";

export const compareSlice = createSlice({
    name: "compare",
    initialState: {
        products: [],
    },
    reducers: {
        addToCompare: (state, action) => {
            const productsIDS = state.products.map((prod) => {
                return prod._id;
            });
            if (productsIDS.includes(action.payload._id)) {
                return;
            }
            else if (state.products.length >= 3) {
                state.products.splice(0, (state.products.length - 2 ));
            }
            state.products.push(action.payload);
            
        },
        emptyCompare: (state) => {
            state.products = [];
        },
        removeOneCompare: (state, action) => {
            state.products = state.products.filter((prod) => prod._id !== action.payload._id )
        }
    }
})


export const { 
    addToCompare,  
    emptyCompare,  
    removeOneCompare
} = compareSlice.actions;
export default compareSlice.reducer;