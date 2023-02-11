import { publicRequest } from "../requestMethods/requestMethods";
import { registerSuccess, reqFailure, reqStart } from "./userSlice";
import Cookies from "js-cookie";


export const register = async (dispatch, user) => {
    dispatch(reqStart());
    try {
        const response = await publicRequest.post("/users/register", user)
        Cookies.set(`currentUserId`, `${response.data.user._id}`, {expires: 60 * 60 })
        Cookies.set(`currentUserEmail`, `${response.data.user.email}`, {expires: 60 * 60 })
        dispatch(registerSuccess(response.data.user))
    }
    catch (err) {
        dispatch(reqFailure(err.response.data));
    }
}


export const login = async (dispatch, user) => {
    try {
        const response = await publicRequest.post("/users/login", user)
    }
    catch (err) {

    }

}