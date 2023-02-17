import { publicRequest, userRequest } from "../requestMethods/requestMethods";
import { loginSuccess, logoutSuccess, registerSuccess, requestFailure, requestStart,  updateSuccess } from "./userSlice";
import { getProductsFailure, getProductsStart, getProductsSucess } from "./productSlice";



export const registerUser = async (dispatch, userPayload) => {
    dispatch(requestStart());
    try {
        const response = await publicRequest.post("/users/register", userPayload)
        const user = response.data.user;
        dispatch(registerSuccess(user))
    }
    catch (err) {
        console.log(err.response);
        dispatch(requestFailure(err.reponse?.data));
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
        console.log("Get all products data: ", response.data);
        dispatch(getProductsSucess(response.data));
    }
    catch (err) {
        console.log(err);
        dispatch(getProductsFailure);
    }
}