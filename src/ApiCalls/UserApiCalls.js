import { deleteUserSuccess, 
    deleteUserSuccessAdmin, 
    loginSuccess, 
    logoutUserSuccess, 
    registerSuccess, 
    requestFailure, 
    requestStart, 
    requestSuccess, 
    updateSuccess } from "../Redux/userSlice";
import { publicRequest, userRequest } from "../requestMethods/requestMethods";
import { failureToast, successToast } from "./apiCalls";




export const registerUser = async (dispatch, userPayload) => {
    dispatch(requestStart());
    try {
        const response = await publicRequest.post("/users/register", userPayload)
        const user = response.data.user;
        dispatch(registerSuccess(user))
        successToast('User account created!');
    }
    catch (err) {
        dispatch(requestFailure());
        failureToast(err.response.data);
    }
}



export const loginUser = async (dispatch, user) => {
    dispatch(requestStart());
    try {
        const response = await publicRequest.post("/users/login", user)
        dispatch(loginSuccess(response.data));
        successToast("Logged in successfully");
    }
    catch (err) {
        dispatch(requestFailure(err.reponse?.data));
        failureToast(err.response?.data)
    }

}



export const updateUser = async (dispatch, user, id) => {
    dispatch(requestStart());
    try {
        const response = await userRequest.patch(`/users/${id}`, user);
        dispatch(updateSuccess(response.data));
        successToast("User data updated successfully")
    }
    catch (err) {
        console.log(err.response);
        dispatch(requestFailure(err.reponse?.data));
        failureToast(err.response?.data)
    }
}


export const updateUserByAdmin = async (dispatch, user, id) => {
    dispatch(requestStart());
    try {
        await userRequest.patch(`/users/${id}`, user);
        successToast("User data updated successfully")
    }
    catch (err) {
        console.log(err.response);
        dispatch(requestFailure(err.reponse?.data));
        failureToast(err.response?.data)
    }
}




export const LogoutUser = async (dispatch, id) => {
    dispatch(requestStart());
    try {
        await userRequest.delete(`/users/logout/${id}`);
        dispatch(logoutUserSuccess());
        successToast("User logged out!")
    }
    catch (err) {
        console.log(err);
        dispatch(requestFailure());
        failureToast(err.response?.data)
    }
}




export const deleteUserAccount = async (dispatch, id, userId) => {
    dispatch(requestStart());
    try {
        await userRequest.delete(`/users/${id}`)
        if (id === userId) {
            dispatch(deleteUserSuccess());
        }
        else {
            dispatch(deleteUserSuccessAdmin());
        }
        successToast("User Account deleted")
    }
    catch (err) {
        console.log(err);
        failureToast("Unable to delete user Account");
        dispatch(requestFailure());
    }
}


export const getOneUser = async (dispatch, id ) => {
    dispatch(requestStart());
    try {
        const response = await userRequest.get(`/users/find/${id}`)
        dispatch(requestSuccess());
        return response.data;
    }
    catch (er) {
        console.log(er);
        dispatch(requestFailure());
    }
}






