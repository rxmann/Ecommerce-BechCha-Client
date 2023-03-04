import { publicRequest, userRequest } from "../requestMethods/requestMethods";
import { getFailure, getStart, getCategoriesSuccess } from "../Redux/productSlice";
import { failureToast, successToast } from "./apiCalls";

export const getAllCategories = async (dispatch) => {
    dispatch(getStart())
    try {
        const response = await publicRequest.get("/categories");
        console.log("Cat updated!");
        dispatch(getCategoriesSuccess(response.data.CategoryList));
    }
    catch (err) {
        console.log(err);
        dispatch(getFailure());
    }
}


export const getOneCategoryDetails = async (paramId) => {
    try {
        const response = await publicRequest.get(`/categories/${paramId}`);
        return response.data;
    }
    catch (err) {
        console.log(err);
    }

}



export const AddCategory = async (dispatch, formData) => {
    dispatch(getStart())
    try {
        await userRequest.post("/categories/add", formData)
        getAllCategories(dispatch);
        successToast("Category Added!")
    }
    catch (err) {
        console.log(err.response.data);
        failureToast(err?.response?.data);
        dispatch(getFailure())
    }
}


export const UpdateCategory = async (dispatch, formData, catId) => {
    dispatch(getStart)
    try {
        await userRequest.patch(`/categories/${catId}`, formData)
        getAllCategories(dispatch);
        successToast("Category Updated!")
    }
    catch (err) {
        console.log(err.response.data);
        dispatch(getFailure);
        failureToast("Couldnot update category!")
    }
}


export const deleteCategory = async (dispatch, catId) => {
    dispatch(getStart)
    try {
        await userRequest.delete(`/categories/${catId}`)
        await getAllCategories(dispatch);
        successToast("Category Deleted!")
    }
    catch (err) {
        console.log(err.response);
        dispatch(getFailure);
        failureToast("Couldnot delete category!")
    }
}


