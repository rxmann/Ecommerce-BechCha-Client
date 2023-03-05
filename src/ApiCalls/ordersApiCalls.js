import { userRequest } from "../requestMethods/requestMethods";
import { emptyMyCart, successToast } from "./apiCalls";

export const getMyOrdersList = async (user) => {
    try {
        const response = await userRequest.get(`/orders/me`)
        return response.data;
    }
    catch (error) {
        console.log(error);
    }
}


export const getAllOrdersAsAdmin = async ({limit=""}) => {
    try {
        let endpoint = "/orders?";
        if (limit) endpoint += `limit=${limit}&`
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
        let cartProducts = orderData.cart.map(prod => {
            const { _id, ...rest} = prod;
            return {...rest,  product: rest.product._id}
        })
        let cartQuantity = orderData.cart.reduce((acc, val) => {
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