import { userRequest } from "../requestMethods/requestMethods";
import { emptyMyCart, failureToast, successToast } from "./apiCalls";



export const deleteThisOrder = async (id) => {
    try {
        const response = await userRequest.delete(`/orders/${id}`);
        successToast(response);
        window.location.reload(false);
    }
    catch (error) {
        console.log(error);
        failureToast(error.response.data);
    }
}



export const cancelThisOrder = async (id) => {
    try {
        const response = await userRequest.post(`/orders/cancel/${id}`);
        console.log(response);
        window.location.reload(false);
        successToast(response.data);
    }
    catch (error) {
        console.log(error);
        failureToast(error.response.data);
    }
}




// needs authorization
export const getOneOrderById = async (id) => {
    try {
        const response = await userRequest.get(`/orders/${id}`);
        console.log(response.data);
        return response.data;
    }
    catch (error) {
        console.log(error);
    }
}


export const getMyOrdersList = async () => {
    try {
        const response = await userRequest.get(`/orders/me`)
        return response.data;
    }
    catch (error) {
        console.log(error);
    }
}


export const getAllOrdersAsAdmin = async ({limit=0}) => {
    try {
        let endpoint = "/orders?";
        if (limit !== 0) endpoint += `limit=${limit}&`
        console.log(endpoint);
        const response = await userRequest.get(endpoint);
        return response.data;
    }
    catch (err) {
        console.log(err);
    }
}



export const makeAnOrder = async (dispatch, orderData, totalPayable) => {
    try {
        let cartProducts = orderData.map(prod => {
            const { _id, ...rest} = prod;
            return {...rest,  product: rest.product._id}
        })
        let cartQuantity = orderData.reduce((acc, val) => {
            return acc += val.quantity
        }, 0)
        
        const form = {
            products: cartProducts, payable: totalPayable, totalItems: cartQuantity
        }
        // console.log(form);
        await userRequest.post("/orders", form);
        await emptyMyCart(dispatch);
        successToast(` ${cartQuantity} items ordered successfully! `)
    } catch (error) {
        console.log(error);
    }
}