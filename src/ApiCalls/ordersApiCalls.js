import { publicRequest, userRequest } from "../requestMethods/requestMethods";
import { emptyMyCart, failureToast, successToast } from "./apiCalls";



export const updateThisOrder = async (id, status)  => {
    try {
        console.log(status);
        await userRequest.patch(`/orders/update/${id}`, { status: status });
        successToast("Order status updated!")
        return true;
    }
    catch (error) {
        console.log(error);
        failureToast(error.response.data)
    }
}

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

        const response = await userRequest.post("/orders", form);

        await emptyMyCart(dispatch);
        successToast(` ${cartQuantity} items ordered successfully! `)
        return response?.data;
    } catch (error) {
        console.log(error);
        failureToast(error.response.data)
    }
}

export const sendInvoice = async (orderID) => {
    try {
        const order = await getOneOrderById(orderID);

       const response = await publicRequest.post("/orders/invoice", { order });
       console.log(response);
    } catch (error) {
        console.log(error);
        failureToast(error?.response?.data)
    }
}