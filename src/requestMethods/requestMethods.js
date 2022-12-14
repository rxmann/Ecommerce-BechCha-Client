import { Token } from "@mui/icons-material";
import axios from "axios"

const BASE_URL = "http://localhost:5000/api"
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Mzk4OWEwZWY0NzBhMDg0YjEzNDFmZDYiLCJpc0FkbWluIjpmYWxzZSwiaWF0IjoxNjcxMDIyNTg0LCJleHAiOjE2NzEwMjI1OTR9.j7JOtNETAeR1EiImeVsfnKbHewl-CMSd7pGF6XOG3yc";



export const publicRequest = axios.create({
    baseURL: BASE_URL
})

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header: {token: `Bearer ${TOKEN}` }
})