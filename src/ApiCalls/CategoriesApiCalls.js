import { publicRequest, userRequest } from "../requestMethods/requestMethods";
import { getFailure, getStart, getCategoriesSuccess } from "../Redux/productSlice";
import { failureToast, successToast } from "../Redux/apiCalls";

export const getAllCategories = async (dispatch) => {
    dispatch(getStart)
    try {
        const response = await publicRequest.get("/categories");
        dispatch(getCategoriesSuccess(response.data.CategoryList));
    }
    catch (err) {
        console.log(err);
        dispatch(getFailure);
    }
}




export const AddCategory = async (dispatch, formData) => {
    dispatch(getStart())
    try {
        await userRequest.post("/categories/add", formData, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        })
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
        await userRequest.patch(`/categories/${catId}`, formData, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        })
        successToast("Category Updated!")
        
    }
    catch (err) {
        console.log(err.response.data);
        dispatch(getFailure);
        failureToast("Couldnot update category!")
    }
}


