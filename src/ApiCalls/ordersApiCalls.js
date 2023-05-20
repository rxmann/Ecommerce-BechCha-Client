import { requestFailure, requestStart, requestSuccess } from "../Redux/userSlice";
import { userRequest } from "../requestMethods/requestMethods";
import { emptyMyCart, failureToast, successToast } from "./apiCalls";



export const updateThisOrder = async (id, status)  => {
    try {
        await userRequest.patch(`/orders/update/${id}`, { status: status });
        successToast("Order status updated!")
        return true;
    }
    catch (error) {
        console.log(error);
        failureToast(error.response.data)
        return false;
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
        successToast(response.data);
        setInterval(() => {
            window.location.reload(false);
        }, 2000)
    }
    catch (error) {
        console.log(error);
        failureToast(error.response.data);
    }
}




// needs authorization
export const getOneOrderById = async (id) => {
    try {
        const response = await userRequest.get(`/orders/user/${id}`);
        return response.data;
    }
    catch (error) {
        console.log(error);
    }
}


export const getMyOrdersList = async (id) => {
    try {
        const response = await userRequest.get(`/orders/${id}`)
        console.log(response.data);
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





export const makeAnOrder = async (dispatch, { orderData, totalPayable, type }) => {
    dispatch(requestStart())
    try {
        let cartProducts = orderData.map(prod => {
            const { _id, ...rest} = prod;
            return {...rest,  product: rest.product._id}
        })
        let cartQuantity = orderData.reduce((acc, val) => {
            return acc += val.quantity
        }, 0)
        
        const form = {
            products: cartProducts, 
            payable: totalPayable, 
            totalItems: cartQuantity, 
            paymentType: type,
            isPaid: type === "Cash-on-delivery" ? false : true
        }
        console.log(form.isPaid);

        const response = await userRequest.post("/orders", form);

        await emptyMyCart(dispatch);
        successToast(` ${cartQuantity} items ordered successfully! `)
        dispatch(requestSuccess())
        return response?.data;
    } catch (error) {
        console.log(error);
        failureToast(error?.response?.data)
        dispatch(requestFailure())
    }
}
