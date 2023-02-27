import {  userRequest } from "../requestMethods/requestMethods";
import { setAccessToken } from "./userSlice";
import { toast } from 'react-toastify';


export const successToast = (message) => {
    toast.success(message, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
    })
}

export const failureToast = (message) => {
    toast.error(message, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
    })
}


export const setToken = async (dispatch, token) => {
    try {
        dispatch(setAccessToken(token));
    }
    catch (err) {
        console.log(err);
    }
}



export const getSalesStats = async () => {
    try {
        const response = await userRequest.get("/orders/sales/analytics");
        return response.data;
    }
    catch (err) {
        console.log(err.response?.data);
    }
}

export const getOrdersStats = async () => {
    try {
        const response = await userRequest.get("/orders/orders/analytics");
        return response.data
    }
    catch (err) {
        console.log(err.response?.data);
    }
}

export const getUserStats = async () => {
    try {
        const response = await userRequest.get("/orders/users/analytics");
        return response.data;
    }
    catch (err) {
        console.log(err.response?.data);
    }
}