import { createSlice } from "@reduxjs/toolkit";

export const compareSlice = createSlice({
    name: "compare",
    initialState: {
        products: [],
    },
    reducers: {
        addToCompare: (state, action) => {
            let productCat;
            let productsIDs = state.products.map((prod) => {
                productCat = prod.category.name;
                return prod._id;
            });

            console.log(productCat);

            if (productsIDs.includes(action.payload._id)) {
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