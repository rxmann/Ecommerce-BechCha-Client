import styled from "styled-components"
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import { useState } from "react";
import { Avatar, Button, TextField } from "@mui/material";
import { useDispatch } from "react-redux"
import { useEffect } from "react";
import LoadingButton from "@mui/lab/LoadingButton";
import { useNavigate } from "react-router-dom";
import { updateUser, updateUserByAdmin } from "../../../ApiCalls/UserApiCalls";

const Form = styled.form`
    flex: 1.5;
    display: flex;
    flex-direction: column;
    gap: 30px;
    padding: 30px;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
    background-color: white;
`

const FormItem = styled.div`
    display: flex;
    align-items: center;
    gap: 40px;
`

const Label = styled.label`
    flex: 1;
    font-weight: 500;
    color: gray;
`

const TextInput = styled(TextField)`
    flex: 2;
    color: gray;
`


const UploadB = styled.label`
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 10px;
    border: 1px dashed gray;
    padding: 30px 20px;
`


const UserUpdateForm = ({user, isFetching, isAdmin, email}) => {

    const navigate = useNavigate(); 
    const dispatch = useDispatch();
    const [reset, setReset] = useState(true);
    const [profileImage, setProfileImage] = useState("")

    // handling changes in input fields
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    // image upload change handle
    const handleImage = (e) => {
        const imaged = e.target.files[0];
        setFormData({ ...formData, "image": imaged })
        setProfileImage(URL.createObjectURL(imaged))
    }


    // submit updates user
    const handleUpdate = async (e) => {
        e.preventDefault();
        const userData = new FormData();
        userData.append("username", formData.username);
        userData.append("address", formData.address);
        userData.append("contacts", parseInt(formData.contacts));
        if (profileImage) {
            if (formData.image.size > 2000000) {
                alert("File too large. Uplaod less than 2mb");
                setProfileImage("");
                return;
            }
            userData.append(`image`, formData.image);
        }
        if (!isAdmin) {
            await updateUser(dispatch, userData, user._id);
        }
        else if (isAdmin && user.email === email) {
            await updateUser(dispatch, userData, user._id);
        }
        else {
            await updateUserByAdmin(dispatch, userData, user._id);
        }
        setProfileImage("");
    }

    
    const [formData, setFormData] = useState(
        {
            username: user?.username,
            address: user?.address,
            contacts: user?.contacts,
            image: "",
        }
    )

    /// resetting default values
    useEffect(() => {
        const resetValues = () => {
            setFormData({
                username: user?.username,
                address: user?.address,
                contacts: user?.contacts,
                image: "",
            })
        }
        resetValues();
    }, [reset, navigate, user])


    const InputData = [{
        name: "username",
        type: "text",
        label: "Username",
        defaultValue: formData?.username
    }, {
        name: "address",
        type: "text",
        label: "Address",
        defaultValue: formData?.address
    }, {
        name: "contacts",
        type: "tel",
        label: "Phone Number",
        defaultValue: formData?.contacts,
        pattern: {
            inputProps: {
                inputMode: "numeric",
                pattern: "{10}"
            }
        }
    }]



    return (
        <Form onSubmit={handleUpdate}>
            <FormItem>
                <Avatar src={user?.image} sx={{ width: 100, height: 100 }} />
                <UploadB>
                    <AddPhotoAlternateIcon />
                    Upload
                    <input
                        name="image"
                        hidden
                        type="file"
                        onChange={handleImage}
                        accept='image/*' />
                </UploadB>

                {profileImage && <Avatar src={profileImage} sx={{ width: 100, height: 100 }} />}
            </FormItem>

            {InputData.map((input) => (

                <FormItem key={input.label}>
                    <Label> {input.label} </Label>
                    <TextInput
                        name={input.name}
                        required
                        variant="standard"
                        type={input.type}
                        value={input.defaultValue}
                        onChange={handleChange}
                        InputProps={input.pattern ? input.pattern.inputProps : null}
                    />
                </FormItem>
            ))}
            <Button color="error" onClick={() => setReset(!reset)} > Reset </Button>

            <LoadingButton
                loading={isFetching}
                type="submit"
                size="large"
                variant="contained"
            >
                Update
            </LoadingButton>
        </Form>
    )
}

export default UserUpdateForm