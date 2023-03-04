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



export const makeAnOrder = async (orderData, totalPayable) => {
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
        const response = await userRequest.post("/orders", form);
        console.log(response.data);
    } catch (error) {
        console.log(error);
    }
}