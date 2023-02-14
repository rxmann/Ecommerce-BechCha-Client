import { createSlice } from "@reduxjs/toolkit"

export const userSlice = createSlice({
    name: "user",
    initialState: {
        currentUser: null,
        isFetching: false,
        error: false,
        isSignedIn: false,
        accessToken: null,
    },
    reducers: {
        registerStart: (state) => {
            state.isFetching = true;
            state.error = false;
        },
        registerFailure: (state) => {
            state.isFetching = false;
            state.error = true;
        },
        registerSuccess: (state, action) => {
            state.isFetching = false;
            state.currentUser = action.payload;
        },
        loginStart: (state) => {
            state.isFetching = true;
            state.error = false;
        },
        loginFailure: (state) => {
            state.isFetching = false;
            state.error = true;
        },
        loginSuccess: (state, action) => {
            state.isFetching = false;
            state.currentUser = action.payload;
            state.isSignedIn = true;
            state.accessToken = action.payload.accessToken;
        },
        updateStart: (state) => {
            state.isFetching = true;
            state.error = false;
        },
        updateFailure: (state) => {
            state.isFetching = false;
            state.error = true;
        },
        updateSuccess: (state, action) => {
            state.isFetching = false;
            state.currentUser = action.payload;
        },
        logoutStart: (state) => {
            state.isFetching = true;
            state.error = false;
        },
        logoutFailure: (state) => {
            state.isFetching = false;
            state.error = true;
        },
        logoutSuccess: (state) => {
            state.isFetching = false;
            state.currentUser = null;
            state.accessToken = "";
            state.isSignedIn = false;
        },
    }
})

export const { registerStart, registerFailure, registerSuccess, 
                loginStart, loginFailure, loginSuccess,
                updateStart, updateFailure, updateSuccess,
                logoutStart, logoutFailure, logoutSuccess } = userSlice.actions;
                
export default userSlice.reducer;