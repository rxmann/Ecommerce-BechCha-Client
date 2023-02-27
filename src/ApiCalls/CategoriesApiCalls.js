import { publicRequest, userRequest } from "../requestMethods/requestMethods";
import { getFailure, getStart, getCategoriesSuccess } from "../Redux/productSlice";

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
    dispatch(getStart)
    try {
        await userRequest.post("/categories/add", formData, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        })
        
    }
    catch (err) {
        console.log(err.response.data);
    }
}



