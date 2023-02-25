import axios from "axios"

const BASE_URL = "http://localhost:5000/api"

const getAccessToken = () => {
    const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
    const TOKEN = user && JSON.parse(user).accessToken;
    return TOKEN;
}


export const publicRequest = axios.create({
    baseURL: BASE_URL,
    withCredentials: true,
})

export const userRequest = axios.create({
    baseURL: BASE_URL,
    withCredentials: true,
    headers: {
        'Content-Type': 'multipart/form-data',
        authorization: `Bearer ${getAccessToken()}`,
    }
});


// Add a request interceptor to check the access token before each request
// userRequest.interceptors.request.use(
//     async (config) => {
//         const accessToken = getAccessToken();
//         if (accessToken) {
//             const refreshedToken = await axios.get(`${BASE_URL}/users/refresh`);
//             const newAccessToken = refreshedToken.data.accessToken;
            
//             localStorage.setItem("persist:root", JSON.stringify({ user: { accessToken: newAccessToken } }));
//         }
//         return config;
//     },
//     (error) => {
//         return Promise.reject(error);
//     }
// );



