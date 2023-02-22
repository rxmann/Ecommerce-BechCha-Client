import { publicRequest, userRequest } from "../requestMethods/requestMethods";
import { loginSuccess, logoutSuccess, registerSuccess, requestFailure, requestStart,  updateSuccess } from "./userSlice";
import { getFailure, getStart, getProductsSuccess, getCategoriesSuccess } from "./productSlice";

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


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
        successToast("Logged in successfully")
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
        dispatch(logoutSuccess());
        successToast("User logged out!")
    }
    catch (err) {
        console.log(err);
        dispatch(requestFailure(err.reponse?.data));
        failureToast(err.response?.data)
    }
}


export const getAllProducts = async (dispatch) => {
    dispatch(getStart)
    try {
        const response = await publicRequest.get("/products");
        dispatch(getProductsSuccess(response.data));
    }
    catch (err) {
        console.log(err);
        dispatch(getFailure);
    }
}

export const getAllCategories = async (dispatch) => {
    dispatch(getStart)
    try {
        const response = await publicRequest.get("/categories");
        dispatch(getCategoriesSuccess(response.data.CategoryList));
    }
    catch (err) {
        console.log(err);
        dispatch(getFailure);
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
        successToast("Product added in the system")
    }
    catch (err) {
        console.log(err.response.data);
        failureToast(err.response?.data)
    }                        
}

export const editProductAdmin = async (values, id) => {
    const formData = new FormData();
    formData.append("title", values.title);
    formData.append("category", values.category);
    formData.append("price", values.price);
    formData.append("quantity", values.quantity);
    formData.append("description", values.description);
    values.images.forEach((image) => {
        formData.append(`images`, image);
    });

    try {
        await userRequest.patch(`/products/${id}`, formData, {headers : { "Content-Type": "multipart/form-data" }})
        successToast("Product updated")
    }
    catch (err) {
        console.log(err.response.data);
        failureToast("Problem updating the product info.")
    }                        
}