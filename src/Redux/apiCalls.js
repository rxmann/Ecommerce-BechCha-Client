import { publicRequest, userRequest } from "../requestMethods/requestMethods";
import { loginSuccess, logoutSuccess, registerSuccess, requestFailure, requestStart,  updateSuccess } from "./userSlice";
import { getProductsFailure, getProductsStart, getProductsSucess } from "./productSlice";

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const registerUser = async (dispatch, userPayload) => {
    dispatch(requestStart());
    try {
        const response = await publicRequest.post("/users/register", userPayload)
        const user = response.data.user;
        dispatch(registerSuccess(user))
        toast.success('User account created!');
    }
    catch (err) {
        dispatch(requestFailure());
        toast.error(err.response.data);
    }
}


export const loginUser = async (dispatch, user) => {
    dispatch(requestStart());
    try {
        const response = await publicRequest.post("/users/login", user)
        dispatch(loginSuccess(response.data));
    }
    catch (err) {
        dispatch(requestFailure(err.reponse?.data));
    }

}


export const updateUser = async (dispatch, user, id) => {
    dispatch(requestStart());
    try {
        const response = await userRequest.patch(`/users/${id}`, user);
        dispatch(updateSuccess(response.data));
    }
    catch (err) {
        console.log(err.response);
        dispatch(requestFailure(err.reponse?.data));
    }
}

export const updateUserByAdmin = async (dispatch, user, id) => {
    dispatch(requestStart());
    try {
        await userRequest.patch(`/users/${id}`, user);
    }
    catch (err) {
        console.log(err.response);
        dispatch(requestFailure(err.reponse?.data));
    }
}

export const LogoutUser = async (dispatch, id) => {
    dispatch(requestStart());
    try {
        await userRequest.delete(`/users/logout/${id}`);
        dispatch(logoutSuccess());
    }
    catch (err) {
        console.log(err);
        dispatch(requestFailure(err.reponse?.data));
    }
}


export const getAllProducts = async (dispatch) => {
    dispatch(getProductsStart)
    try {
        const response = await publicRequest.get("/products");
        dispatch(getProductsSucess(response.data));
    }
    catch (err) {
        console.log(err);
        dispatch(getProductsFailure);
    }
}


export const addProductAdmin = async (values) => {
    const formData = new FormData();
    formData.append("title", values.title);
    formData.append("category", "63b945c7eee85ec57531dd36");
    formData.append("price", values.price);
    formData.append("quantity", values.quantity);
    formData.append("description", values.description);
    values.images.forEach((image) => {
        formData.append(`images`, image);
    });

    try {
        await userRequest.post("/products", formData, {headers : { "Content-Type": "multipart/form-data" }})
    }
    catch (err) {
        console.log(err)
    }                        
}

export const editProductAdmin = async (values, id) => {
    const formData = new FormData();
    formData.append("title", values.title);
    formData.append("category", "63b945c7eee85ec57531dd36");
    formData.append("price", values.price);
    formData.append("quantity", values.quantity);
    formData.append("description", values.description);
    values.images.forEach((image) => {
        formData.append(`images`, image);
    });

    try {
        const response = await userRequest.post(`/products/${id}`, formData, {headers : { "Content-Type": "multipart/form-data" }})
        console.log(response.data);
    }
    catch (err) {
        console.log(err.response.data);
    }                        
}