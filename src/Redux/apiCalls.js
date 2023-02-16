import { publicRequest, userRequest } from "../requestMethods/requestMethods";
import { loginSuccess, logoutSuccess, registerSuccess, requestFailure, requestStart,  updateSuccess } from "./userSlice";
import { getProductsFailure, getProductsStart, getProductsSucess } from "./productSlice";
import Cookies from "js-cookie";

// set refresh token in cookie
// set refresh token in cookie
const cookieOptions = {
    sameSite: "None",
    expires: new Date(
        Date.now() + 30 * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
    secure: true
};

export const registerUser = async (dispatch, userPayload) => {
    dispatch(requestStart());
    try {
        const response = await publicRequest.post("/users/register", userPayload)
        const user = response.data.user;
        Cookies.set(`currentUserEmail`, `${user.email}`, cookieOptions);
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
        console.log(response.data);
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