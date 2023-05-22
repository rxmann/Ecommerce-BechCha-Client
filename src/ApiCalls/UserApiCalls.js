import { emptyCart } from "../Redux/cartSlice";
import { emptyCompare } from "../Redux/compareProductSlice";
import {
    deleteUserSuccess,
    deleteUserSuccessAdmin,
    loginSuccess,
    logoutUserSuccess,
    requestFailure,
    requestStart,
    requestSuccess,
    updateSuccess
} from "../Redux/userSlice";
import { failureToast, successToast } from "./apiCalls";
import { publicRequest, userRequest } from "../requestMethods/requestMethods";



export const getAllUsers = async () => {
    try {
        const res = await userRequest.get(`/users/find`);
        console.log(res.data);
        return res.data;
    }
    catch (err) {
        console.log(err);
    }
}




export const resetPassword = async (dispatch, payload) => {
    dispatch(requestStart());
    try {
        const response = await publicRequest.post("/users/reset/password", payload)
        console.log(response.data);
        successToast(response.data.message)
        dispatch(requestSuccess());
        return true
    }
    catch (err) {
        dispatch(requestFailure());
        console.log(err);
        failureToast(err.response.data?.message || err.response?.data);
        return false;
    }
}




export const updateShippingDetails = async (dispatch, formData) => {
    dispatch(requestStart());
    try {
        await userRequest.post(`/shipping`, formData);
        successToast("Shipping info updated!");
        dispatch(requestSuccess());
        return true;
    }
    catch (err) {
        dispatch(requestFailure());
        console.log(err);
        failureToast(err.response.data)
        return false;
    }
}




export const getShippingDetails = async ( id ) => {
    try {
        const response = await userRequest.get(`/users/shipping/${id}`)
        const data = response.data;
        return data
    }
    catch (err) {
        console.log(err);
        return null
    }
}



export const registerUser = async (dispatch, userPayload) => {
    dispatch(requestStart());
    try {
        await publicRequest.post("/users/register", userPayload)
        successToast('User account created!');
        dispatch(requestSuccess());
        return true;
    }
    catch (err) {
        failureToast(err.response.data);
        dispatch(requestFailure());
        return false;
    }
}



export const verifyUserOTP = async (dispatch, payload) => {
    dispatch(requestStart());
    try {
        await publicRequest.post("/users/verifyOTP", { email: payload.email, otp: payload.otp.toString() })
        successToast("User verified!")
        dispatch(requestSuccess());
        return true;
    }
    catch (err) {
        console.log(err.response.data);
        failureToast(err.response.data);
        dispatch(requestFailure());
        return false;
    }
}


export const resendUserOTP = async (dispatch, payload) => {
    dispatch(requestStart());
    try {
        console.log(payload, "heyyyy");
        await publicRequest.post("/users/resendOTP", { email: payload })
        successToast("OTP sent to email:", payload);
        dispatch(requestSuccess());
        return true
    }
    catch (err) {
        console.log(err);
        failureToast(err.response.data?.message || err.response?.data);
        dispatch(requestFailure());
        return false;
    }
}




export const loginUser = async (dispatch, user) => {
    dispatch(requestStart());
    try {
        const response = await publicRequest.post("/users/login", user)
        dispatch(loginSuccess(response.data));
        successToast("Logged in successfully");
        return true;
    }
    catch (err) {
        dispatch(requestFailure(err.reponse?.data));
        failureToast(err.response?.data)
    }

}

export const updateUserPassword = async (dispatch, user) => {
    console.log(user.id);
    dispatch(requestStart());
    try {
        const response = await userRequest.patch("/users/password", user)
        successToast(response.data.message);
        dispatch(requestSuccess());
        dispatch(LogoutUser(dispatch, user))
    }
    catch (err) {
        dispatch(requestFailure(err.reponse?.data));
        failureToast(err.response?.data)
        dispatch(requestFailure());
    }

}


export const updateUser = async (dispatch, user, id) => {
    dispatch(requestStart());
    try {
        console.log(user);
        const response = await userRequest.patch(`/users/${id}`, user);
        dispatch(updateSuccess(response.data));
        successToast("User data updated successfully")
        dispatch(requestSuccess)
    }
    catch (err) {
        console.log(err);
        dispatch(requestFailure(err.reponse?.data));
        failureToast(err.response?.data)
    }
}


export const updateUserByAdmin = async (dispatch, user, id) => {
    dispatch(requestStart());
    try {
        await userRequest.patch(`/users/${id}`, user);
        successToast("User data updated successfully")
        dispatch(requestSuccess())
    }
    catch (err) {
        console.log(err.response);
        dispatch(requestFailure());
        failureToast(err.response?.data)
    }
}




export const LogoutUser = async (dispatch, id) => {
    dispatch(requestStart());
    try {
        await userRequest.delete(`/users/logout/${id}`);
        dispatch(requestSuccess());
        dispatch(logoutUserSuccess());
        dispatch(emptyCart());
        dispatch( emptyCompare());
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
        if (!userId) {
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


export const getOneUser = async (dispatch, id) => {
    dispatch(requestStart());
    try {
        const response = await userRequest.get(`/users/find/${id}`)
        dispatch(requestSuccess());
        return response.data;
    }
    catch (er) {
        console.log(er);
        if (er.response?.data?.code?.toString() === "notoken") {
            localStorage.setItem("persist:root", null);
        }
        dispatch(requestFailure());
        return null;
    }
}







