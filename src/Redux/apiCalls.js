import { publicRequest } from "../requestMethods/requestMethods";
import { registerSuccess, reqFailure, reqStart } from "./userSlice";
import Cookies from "js-cookie";


export const register = async (dispatch, userPayload) => {
    dispatch(reqStart());
    try {
        const response = await publicRequest.post("/users/register", userPayload)
        const user = response.data.user;
        Cookies.set(`currentUserId`, `${user._id}`, {expires: 60 * 60 })
        Cookies.set(`currentUserEmail`, `${user.email}`, {expires: 60 * 60 })
        dispatch(registerSuccess(user))
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