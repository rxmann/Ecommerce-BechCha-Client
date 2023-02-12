import { publicRequest } from "../requestMethods/requestMethods";
import { loginSuccess, registerSuccess, reqFailure, reqStart } from "./userSlice";
import Cookies from "js-cookie";


export const registerUser = async (dispatch, userPayload) => {
    dispatch(reqStart());
    try {
        const response = await publicRequest.post("/users/register", userPayload)
        const user = response.data.user;
        Cookies.set(`currentUserEmail`, `${user.email}`, {expires: 60 * 60 })
        dispatch(registerSuccess(user))
    }
    catch (err) {
        dispatch(reqFailure(err.response.data));
    }
}


export const loginUser = async (dispatch, user) => {
    dispatch(reqStart);
    try {
        const response = await publicRequest.post("/users/login", user)
        dispatch(loginSuccess(response.data));
        console.log(response.data);
    }
    catch (err) {
        dispatch(reqFailure);
    }

}