import { addToCompare } from "../Redux/compareProductSlice";
import { publicRequest, userRequest } from "../requestMethods/requestMethods";
import { failureToast, successToast } from "./apiCalls";


export const handleReviewPost = async (rating, comment, id) => {
    try {
        const response = await userRequest.post("/reviews", { rating, comment, product: id });
        console.log(response);
        successToast(response.data.msg)
    }
    catch (err) {
        failureToast(err.response.data.msg);
        console.log(err);
    }
}



export const updateFeatured = async ( products ) => {
    try {
        const response = await userRequest.patch("/products/update/featured", {products});
        console.log(response.data);
        successToast("Featured products updated!")
    }
    catch (err) {

    }
}


export const getFeatured = async (  ) => {
    try {
        const response = await publicRequest.get("/products/find/featured");
        return response.data;
    }
    catch (err) {
        console.log(err);
    }
}


export const addToCompareP = async ( dispatch, product) => {
    try {
        const res = dispatch(addToCompare(product));
        if (res === "unmatched") {
            successToast("Product's Category do not match with items in Compare List!")
        }
    }
    catch (err) {
        console.log(err);
    }
}



export const getAllProducts = async ({ssort, sort, limitPrice, subIds, limit, search}) => {
    try {
        let endpoint = "/products?"
        if (sort)  endpoint += `sort=${sort}&`
        if (limitPrice) endpoint += `limitprice=${limitPrice}&`
        if (subIds) endpoint += `subIds=${subIds}&`
        if (limit) endpoint += `limit=${limit}&`
        if (search) endpoint += `search=${search}&`

        // console.log(endpoint);   
        const response = await publicRequest.get(endpoint);
        return response.data;
    }
    catch (err) {
        console.log(err);
    }
}



export const getOneProduct = async (id) => {
    try {
        console.log("getOne Product");
        const response = await publicRequest.get(`/products/${id}`);
        return response.data;
    }
    catch (err) {
        console.log(err);
    }
}





export const addProductAdmin = async (values) => {
    const formData = new FormData();

    for (let key in values) {
        if (key === "images" ) {
            values.images.forEach((image) => {
                formData.append(`images`, image);
            });
        }
        else {
            formData.append(key, values[key]);
        }
    }

    try {
        await userRequest.post("/products", formData)
        successToast("Product added in the system")
    }
    catch (err) {
        console.log(err.response.data);
        failureToast(err.response?.data)
    }
}




export const editProductAdmin = async (values, id) => {
    const formData = new FormData();
    for (let key in values) {
        if (key === "images" ) {
            values.images.forEach((image) => {
                formData.append(`images`, image);
            });
        }
        else {
            formData.append(key, values[key]);
        }
    }

    

    try {
        await userRequest.patch(`/products/${id}`, formData)
        successToast("Product updated")
    }
    catch (err) {
        console.log(err.response.data);
        failureToast("Problem updating the product info.")
    }
}



export const deleteProductAdmin = async (id) => {
    try {
        await userRequest.delete(`/products/${id}`)
        successToast("Product deleted")
    }
    catch (err) {
        console.log(err.response.data);
        failureToast("Problem deleting product")
    }
}




export const getCategoryProductsCount = async (  ) => {
    try {
        const response = await userRequest.get("/products/categorical-distribution")
        return response.data;
    }
    catch (err) {
        console.log(err);
    }
}

