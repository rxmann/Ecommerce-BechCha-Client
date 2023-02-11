import { createSlice } from "@reduxjs/toolkit"

export const userSlice = createSlice({
    name: "user",
    initialState: {
        currentUser: null,
        isFetching: false,
        error: false,
        errorMessage: "",
    },
    reducers: {
        reqStart: (state) => {
            state.errorMessage = "";
            state.isFetching = true;
        },
        loginSuccess: (state, action) => {
            state.isFetching = false;
            state.currentUser = action.payload;
        },
        reqFailure: (state, action) => {
            state.errorMessage = action.payload;
            state.isFetching = false;
            state.error = true;
        },
        registerSuccess: (state, action) => {
            state.isFetching = false;
            state.currentUser = action.payload;
        },
    }
})

export const { reqStart, reqFailure, registerSuccess, loginSuccess } = userSlice.actions;
export default userSlice.reducer;