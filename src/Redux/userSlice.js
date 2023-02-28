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
        requestStart: (state) => {
            state.isFetching = true;
            state.error = false;
        },
        requestFailure: (state) => {
            state.isFetching = false;
            state.error = true;
        },
        requestSuccess: (state) => {
            state.isFetching = false;
            state.error = false;
        },
        registerSuccess: (state, action) => {
            state.isFetching = false;
            state.isSignedIn = false;
            state.currentUser = action.payload;
        },
        loginSuccess: (state, action) => {
            state.isFetching = false;
            state.currentUser = action.payload.user;
            state.isSignedIn = true;
            state.accessToken = action.payload.accessToken;
        },
        updateSuccess: (state, action) => {
            state.isFetching = false;
            state.currentUser = action.payload;
        },
        logoutUserSuccess: (state) => {
            state.isFetching = false;
            state.currentUser = null;
            state.accessToken = "";
            state.isSignedIn = false;
        },
        deleteUserSuccess: (state) => {
            state.isFetching = false;
            state.currentUser = null;
            state.accessToken = "";
            state.isSignedIn = false;
        },
        deleteUserSuccessAdmin: (state) => {
            state.isFetching = false
        }
    }
})

export const {  requestStart,
                requestFailure,
                requestSuccess,
                registerSuccess, 
                loginSuccess,
                updateSuccess,
                logoutUserSuccess,
                deleteUserSuccessAdmin,
                deleteUserSuccess
            } = userSlice.actions;
                
export default userSlice.reducer;