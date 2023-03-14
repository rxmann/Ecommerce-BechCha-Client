import { userRequest } from "../requestMethods/requestMethods";
import { toast } from 'react-toastify';
import { cartStart, cartFail, updateCartSuccess, emptyCart } from "../Redux/cartSlice"
import months from 'months';
 
export const successToast = (message) => {
    toast.success(message, {
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





export const reloadCart = async (dispatch) => {
    dispatch(cartStart());
    try {
        const cart = await getMyCart(dispatch);
        dispatch(updateCartSuccess(cart))
    }
    catch (err) {
        dispatch(cartFail())
    }
}


// add to cart
export const addProductToCart = async (dispatch, product, quantity, maxQuantity, id) => {

    const form = new FormData()
    form.append("product", product._id)
    form.append("quantity", quantity)
    form.append("price", product.price)
    form.append("max", maxQuantity)

    dispatch(cartStart());
    try {
        await userRequest.post(`/cart`, form)
        reloadCart(dispatch);
    }
    catch (err) {
        console.log(err);
        failureToast( err?.response?.data || "Could not add to cart!")
        dispatch(cartFail())
    }

}



export const emptyMyCart = async (dispatch) => {
    dispatch(cartStart())
    try {
        await userRequest.delete("/cart");
        dispatch(emptyCart())
    }
    catch (error) {
        console.log(error);
        dispatch(cartFail())
        failureToast("Cart is empty!")
    }
}




export const getMyCart = async (dispatch) => {
    dispatch(cartStart())
    try {
        const response = await userRequest.get("/cart");
        const myCart = response.data.cart;
        if (!myCart) return [];

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
        dispatch(cartFail())
    }
}



export const deleteProductFromCart = async (dispatch, prodId) => {
    dispatch(cartStart());
    try {
        await userRequest.delete(`/cart/${prodId}`);
        await reloadCart(dispatch);
        successToast(`Product deleted from cart!`)
    }
    catch (err) {
        console.log(err);
        failureToast("Could not delete from cart!")
        dispatch(cartFail())
    }

}



export const updateItemFromCart = async (dispatch, product, type) => {
    dispatch(cartStart())
    try {
        console.log(product, type);
        await userRequest.patch("/cart", { 
            product: product._id, 
            type, 
            max: product.quantity,
            currentPrice: product.price
        })
        await reloadCart(dispatch);
    }
    catch (err) {
        console.log(err.response.data);
        dispatch(cartFail())
        failureToast(err.response.data);
    }
}



// ALL STATS FOR ADMIN DASHBOARD
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



export const getUserRateStats = async () => {
    try {
        const response = await userRequest.get("/users/stats");
        response.data.sort( (a, b) => a._id - b._id )
        const userD = response?.data?.map((each) => {
            const name = months[each._id - 1];
            const users = each.total;
            return {
              name, users
            }
          })
        return userD;
    }
    catch (err) {
        console.log(err.response?.data);
    }
}