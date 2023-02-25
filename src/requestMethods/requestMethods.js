import axios from "axios"
import Cookies from 'js-cookie';

const jwt = Cookies.get();

console.log(jwt);

const BASE_URL = "http://localhost:5000/api"

const getAccessToken = () => {
    const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
    const TOKEN = user && JSON.parse(user).accessToken;
    return TOKEN;
}


export const publicRequest = axios.create({
    baseURL: BASE_URL,
})

export const userRequest = axios.create({
    baseURL: BASE_URL,
    withCredentials: true,
    headers: {
        'Content-Type': 'multipart/form-data',
        authorization: `Bearer ${getAccessToken()}`,
    }
});



