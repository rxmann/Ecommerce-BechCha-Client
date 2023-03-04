import { userRequest } from "../requestMethods/requestMethods";


export const getAllOrdersAsAdmin = async () => {
    try {
        const response = await userRequest.get("/orders");
        return response.data;
    }
    catch (err) {
        console.log(err);
    }
}