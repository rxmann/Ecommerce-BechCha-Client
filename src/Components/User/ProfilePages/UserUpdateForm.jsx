import styled from "styled-components"
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import { useState } from "react";
import { updateUser } from "../../../Redux/apiCalls";
import { Avatar, Button, TextField } from "@mui/material";
import { useDispatch } from "react-redux"
import { useEffect } from "react";
import LoadingButton from "@mui/lab/LoadingButton";
import { useNavigate } from "react-router-dom";

const Form = styled.form`
    flex: 2;
    display: flex;
    flex-direction: column;
    gap: 30px;
    padding: 30px;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
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


const UserUpdateForm = ({currentUser, isFetching}) => {

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
        const user = new FormData();
        user.append("username", formData.username);
        user.append("address", formData.address);
        user.append("contacts", parseInt(formData.contacts));
        if (profileImage) {
            user.append(`image`, formData.image);
        }

        await updateUser(dispatch, user, currentUser._id);
        setProfileImage("");
    }



    const [formData, setFormData] = useState(
        {
            username: currentUser?.username,
            address: currentUser?.address,
            contacts: currentUser?.contacts,
            image: "",
        }
    )

    /// resetting default values
    useEffect(() => {
        const resetValues = () => {
            setFormData({
                username: currentUser?.username,
                address: currentUser?.address,
                contacts: currentUser?.contacts,
                image: "",
            })
        }
        resetValues();
    }, [reset, navigate, currentUser])


    const InputData = [{
        name: "username",
        type: "text",
        label: "Username",
        value: formData?.username
    }, {
        name: "address",
        type: "text",
        label: "Address",
        value: formData?.address
    }, {
        name: "contacts",
        type: "tel",
        label: "Phone Number",
        value: formData?.contacts,
        pattern: {
            inputProps: {
                inputMode: "numeric",
                pattern: '/\d{10}/'
            }
        }
    }]



    return (
        <Form onSubmit={handleUpdate}>
            <FormItem>
                <Avatar src={currentUser?.image} sx={{ width: 100, height: 100 }} />
                <UploadB>
                    <AddPhotoAlternateIcon />
                    Add Profile
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
                        value={input.value && input.value}
                        onChange={() => handleChange}
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