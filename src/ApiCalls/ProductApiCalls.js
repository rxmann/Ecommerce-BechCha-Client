import { publicRequest, userRequest } from "../requestMethods/requestMethods";
import { failureToast, successToast } from "./apiCalls";

export const getAllProducts = async () => {
    try {
        const response = await publicRequest.get("/products");
        return response.data;
    }
    catch (err) {
        console.log(err);
    }
}



export const getOneProduct = async (id) => {
    try {
        const response = await publicRequest.get(`/products/${id}`);
        return response.data;
    }
    catch (err) {
        console.log(err);
    }
}





export const addProductAdmin = async (values) => {
    const formData = new FormData();
    formData.append("title", values.title);
    formData.append("category", values.category);
    formData.append("price", values.price);
    formData.append("quantity", values.quantity);
    formData.append("description", values.description);
    values.images.forEach((image) => {
        formData.append(`images`, image);
    });

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
    formData.append("title", values.title);
    formData.append("category", values.category);
    formData.append("price", values.price);
    formData.append("quantity", values.quantity);
    formData.append("description", values.description);
    values.images.forEach((image) => {
        formData.append(`images`, image);
    });

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


