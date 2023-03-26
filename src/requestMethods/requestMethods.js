import axios from "axios"
import jwt_decode from "jwt-decode";
import dayjs from 'dayjs'

const BASE_URL = "http://localhost:5000/api"

let isRefreshing = false;



function refreshPage() {
    window.location.reload(false);
  }


const getAccessToken = () => {
    const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
    const TOKEN = user && JSON.parse(user)?.accessToken;
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
userRequest.interceptors.request.use(async (request) => {

    const accessToken = getAccessToken();

    const user = jwt_decode(accessToken);
    const isExpired = dayjs.unix(user.exp).diff(dayjs()) < 1;
    console.log("Request Interceptors! | isExpired? ", isExpired);

    if (!isExpired) return request;

    if (!isRefreshing) {

        isRefreshing = true;

        try {
            const response = await publicRequest.get(`/users/refresh`);

            const persistRoot = JSON.parse(localStorage.getItem('persist:root'));
            const userObjectString = persistRoot?.user;
            if (userObjectString) {
                const userObject = JSON.parse(userObjectString);
                userObject.accessToken = response.data.accessToken;
                persistRoot.user = JSON.stringify(userObject);
                localStorage.setItem('persist:root', JSON.stringify(persistRoot));
            }
            refreshPage();
            // set new authorization header
            if (getAccessToken !== accessToken) {
                console.log("NewToken set");
                request.headers.authorization = `Bearer ${getAccessToken()}`;
            }
        }
        catch (err) {
            console.log("Interceptor Error: ", err.response?.data);
            if (err.response.data?.code.toString() === "notoken") {
                localStorage.setItem("persist:root", JSON.stringify(null));
                refreshPage();
                return;
            }
        }

        isRefreshing = false;
    }
    else  {
        request.headers.authorization = `Bearer ${getAccessToken()}`;
    }


    return request;
})




// CHECK response after every request
userRequest.interceptors.response.use(async (response) => {
    // console.log("Response Intyerceptors ", response.data);

    return response;
})




