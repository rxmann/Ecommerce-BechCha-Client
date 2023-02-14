import axios from "axios"

const BASE_URL = "http://localhost:5000/api"

const getAccessToken = () => {
    const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
    const TOKEN = user && JSON.parse(user).accessToken;
    return TOKEN;
}

const accessToken = getAccessToken();
console.log("Access token from store:", accessToken);

export const publicRequest = axios.create({
    baseURL: BASE_URL,
    withCredentials: true
})

export const userRequest = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'multipart/form-data',
        authorization: `Bearer ${getAccessToken()}`,
    }
});
    
