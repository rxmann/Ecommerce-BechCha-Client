import { userRequest } from "../requestMethods/requestMethods";
import { toast } from 'react-toastify';
import { cartStart, cartFail, deleteProductSuccess, decreaseProductFromCart, increaseProductFromCart, updateCartSuccess } from "../Redux/cartSlice"

export const successToast = (message) => {
    toast.success(message, {
        position: "bottom-center",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
    })
}

export const failureToast = (message) => {
    toast.error(message, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
    })
}


// add to cart
export const addProductToCart = async (dispatch, product, quantity, maxQuantity) => {

    const form = new FormData()
    form.append("product", product._id)
    form.append("quantity", quantity)
    form.append("price", product.price)
    form.append("max", maxQuantity)

    dispatch(cartStart());
    try {
        await userRequest.post("/cart", form)
        const cart = await getMyCart();
        console.log(cart);
        dispatch(updateCartSuccess(cart))
        successToast("Product added to cart!")
    }
    catch (err) {
        console.log(err.response?.data || err);
        failureToast( err.response.data || "Could not add to cart!")
        dispatch(cartFail())
    }

}


export const getMyCart = async () => {
    try {
        const response = await userRequest.get("/cart");
        const myCart = response.data.cart;

        // get total Amount and get Total quantity in cart
        const cartDetails = myCart?.reduce((details, cartObj) => {
            details.totalAmount += cartObj.price * cartObj.quantity
            details.totalQuantity++;
            return details;
        }, { totalAmount: 0, totalQuantity: 0 } );

        const cart = {
            cart: myCart,
            totalAmount: cartDetails.totalAmount, 
            totalQuantity: cartDetails.totalQuantity,
        }

        return cart;
    }
    catch (err) {
        console.log(err);
    }
}




export const deleteProductFromCart = (dispatch, prodId) => {
    dispatch(cartStart());
    try {
        dispatch(deleteProductSuccess(prodId))
        successToast("Product deleted from cart!")
    }
    catch (err) {
        console.log(err);
        failureToast("Could not delete from cart!")
        dispatch(cartFail())
    }

}



export const decreaseItemFromCart = (dispatch, prodId) => {
    dispatch(cartStart())
    try {
        dispatch(decreaseProductFromCart(prodId));
    }
    catch (err) {
        console.log(err);
        dispatch(cartFail())
    }
}




export const increaseItemFromCart = (dispatch, prodId) => {
    dispatch(cartStart())
    try {
        dispatch(increaseProductFromCart(prodId));
    }
    catch (err) {
        console.log(err);
        dispatch(cartFail())
    }
}




export const getSalesStats = async () => {
    try {
        const response = await userRequest.get("/orders/sales/analytics");
        return response.data;
    }
    catch (err) {
        console.log(err.response?.data);
    }
}

export const getOrdersStats = async () => {
    try {
        const response = await userRequest.get("/orders/orders/analytics");
        return response.data
    }
    catch (err) {
        console.log(err.response?.data);
    }
}

export const getUserStats = async () => {
    try {
        const response = await userRequest.get("/orders/users/analytics");
        return response.data;
    }
    catch (err) {
        console.log(err.response?.data);
    }
}