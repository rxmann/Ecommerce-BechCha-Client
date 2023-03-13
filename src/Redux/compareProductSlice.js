import { createSlice } from "@reduxjs/toolkit";

export const compareSlice = createSlice({
    name: "compare",
    initialState: {
        products: [],
    },
    reducers: {
        addToCompare: (state, action) => {
            if (state.products.includes(action.payload.toString())) {
                return;
            }
            else if (state.products.length >= 3) {
                state.products.splice(0, (state.products.length - 2 ));
            }
            state.products.push(action.payload.toString());
            
        },
        emptyCompare: (state) => {
            state.products = [];
        }
    }
})


export const { 
    addToCompare,  
    emptyCompare,  
} = compareSlice.actions;
export default compareSlice.reducer;