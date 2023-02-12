import axios from "axios"

const BASE_URL = "http://localhost:5000/api"

const getAccessToken = () => {
    const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
    const currentUser = user && JSON.parse(user).currentUser;
    const TOKEN = currentUser.accessToken;
    return TOKEN;
}

export const publicRequest = axios.create({
    baseURL: BASE_URL,
    withCredentials: true
})

export const userRequest = () => {
    const accessToken = getAccessToken();

    console.log(accessToken);
    
    return axios.create({
      baseURL: BASE_URL,
      headers: {authorization: `Bearer ${accessToken}` }
    });
  }