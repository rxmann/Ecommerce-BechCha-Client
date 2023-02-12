import { createSlice } from "@reduxjs/toolkit"

export const userSlice = createSlice({
    name: "user",
    initialState: {
        currentUser: null,
        isFetching: false,
        error: false,
        errorMessage: "",
        isSignedIn: false,
    },
    reducers: {
        reqStart: (state) => {
            state.isFetching = true;
            state.error = false;
            state.errorMessage = "";
        },
        reqFailure: (state, action) => {
            state.isFetching = false;
            state.error = true;
            state.errorMessage = action.payload;
        },
        registerSuccess: (state) => {
            state.isFetching = false;
        },
        loginSuccess: (state, action) => {
            state.isFetching = false;
            state.currentUser = action.payload;
            state.isSignedIn = true;
        },
        updateSuccess: (state, action) => {
            state.isFetching = false;
            state.currentUser = action.payload;
        },
    }
})

export const { reqStart, reqFailure, registerSuccess, loginSuccess, updateSuccess } = userSlice.actions;
export default userSlice.reducer;