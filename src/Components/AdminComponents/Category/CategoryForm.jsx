import { Avatar, Button, MenuItem, Select, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components"
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import CategoryIcon from '@mui/icons-material/Category';
import {  UpdateCategory } from "../../../ApiCalls/CategoriesApiCalls";
import { AddCategory } from "../../../ApiCalls/CategoriesApiCalls";
import LoadingButton from "@mui/lab/LoadingButton/LoadingButton";
import { useNavigate } from "react-router-dom";

const UploadB = styled.label`
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 10px;
    border: 1px dashed gray;
    padding: 30px 20px;
    margin: 0px 20px;
`
const Form = styled.form`
    display: flex;
    justify-content: start;
    padding: 20px;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
    background-color: white;
`

const FormWrapper = styled.div`
    flex: 2;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    gap: 30px;
`

const FormItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    gap: 20px;
`


const Label = styled.span`
  flex: 1;
  color: gray;
`
const TextInput = styled(TextField)`
    flex: 2;
    color: gray;
`




const CategoryForm = ({ FormType, Data }) => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [values, setValues] = useState({
        name: "",
        parentId: "",
        image: "",
    });

    const [Image, setImage] = useState("")

    // set categories for drop down
    const [categories, setCategories] = useState([]);
    const { categories: cat } = useSelector(state => state.product)

    const { isFetching } = useSelector(state => state.user)


    useEffect(() => {
        setCategories(cat);
        if (Data) {
            setValues({
                name: Data?.name,
                parentId: Data?.parentId
            })
        }

    }, [FormType, Data, cat, dispatch])


    const handleImage = (e) => {
        const file = e.target.files[0];
        setValues({ ...values, 'image': file })
        setImage(URL.createObjectURL(file))
    }



    // on submit for new category
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (FormType === "add" && !values.image) {
            return alert("Requires at least one image!")
        }

        const formData = new FormData();
        Object.keys(values).forEach(key => {
            if (values[key]) {
                formData.append(key, values[key]);
            }
        });

        console.log(FormType);
        if (FormType !== "update") {
            await AddCategory(dispatch, formData);
        }
        else {
            await UpdateCategory(dispatch, formData, Data?._id);
            setValues({
                name: "",
                parentId: "",
                image: "",
            })
        }
        navigate(`/admin/categories`)

    }


    // input values for categories
    const handleChange = (e) => {
        e.preventDefault();
        setValues({ ...values, [e.target.name]: e.target.value });
    }

    return (
        <Form onSubmit={handleSubmit}>
            <FormWrapper>

                <FormItem>
                    <Avatar
                        src={Data?.image?.url}
                        variant="square"
                        sx={{ width: 100, height: 100 }} >
                        <CategoryIcon />
                    </Avatar>

                    <UploadB>
                        <AddPhotoAlternateIcon />
                        Add Picture
                        <input
                            name="image"
                            hidden
                            type="file"
                            onChange={handleImage}
                            accept='image/*' />
                    </UploadB>

                    {Image && <Avatar variant="square" src={Image} sx={{ width: 100, height: 100 }} />}
                </FormItem>


                <FormItem >
                    <Label> Name </Label>
                    <TextInput
                        name="name"
                        value={values["name"]}
                        onChange={handleChange}
                        required variant="outlined" type="text" />
                </FormItem>

                <FormItem>
                    <Label> Parent Category </Label>
                    <Select
                        name="parentId"
                        sx={{ flex: "2" }}
                        value={values["parentId"]}
                        onChange={handleChange}>
                        {categories?.map((category) => (
                            <MenuItem value={category._id} key={category._id}> {category.name} </MenuItem>
                        ))}
                    </Select>
                </FormItem>

                <LoadingButton
                            loading={isFetching}
                            type="submit"
                            size="large"
                            variant="contained"
                        >
                         {FormType}
                        </LoadingButton>
            </FormWrapper>
        </Form>
    )
}

export default CategoryForm