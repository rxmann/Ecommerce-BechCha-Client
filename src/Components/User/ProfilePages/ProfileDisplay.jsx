import styled from "styled-components"
import { Avatar, Button, TextField } from "@mui/material";
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import UserProfile from "./UserProfile";
import { useDispatch, useSelector } from "react-redux"
import { useState } from "react";
import { useEffect } from "react";
import { updateUser } from "../../../Redux/apiCalls";
import { useNavigate } from "react-router-dom";

const Card = styled.div`
    display: flex;
    gap: 30px;
    width: 100%;
    background-color: white;
`


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



const ProfileDisplay = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { isSignedIn, currentUser } = useSelector(state => state.user)


    useEffect(() => {
        const redirect = () => {
            if (!isSignedIn) {
                navigate("/")
            }
        }
        redirect();
    }, [currentUser, isSignedIn, navigate])

    
    
    const [reset, setReset] = useState(true);
    const [profileImage, setProfileImage] = useState("")


    const {username, address, contacts, profile} = currentUser;

    const [formData, setFormData] = useState({
        username: username,
        address: address,
        contacts: contacts,
        profile: profile,
    })


    /// resetting default values
    useEffect(() => {
        const resetValues = () => {
            setFormData({
                username: username,
                address: address,
                contacts: contacts,
                profile: profile
            })
        }
        resetValues();
    }, [reset])




    // handling changes in input fields
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }


    // image upload change handle
    const handleImage = (e) => {
        const image = e.target.files[0];
        setFormData({ ...formData, "profile": image })
        setProfileImage(image)
    }


    // submit updates user
    const handleUpdate = async (e) => {
        e.preventDefault();
        const user = new FormData();
        user.append("username", formData.username);
        user.append("address", formData.address);
        user.append("contacts", parseInt(formData.contacts));
        user.append(`profile`, formData.profile);
        console.log(user.profile);
        await updateUser(dispatch, user, currentUser._id);

    }

    const InputData = [{
        name: "username",
        type: "text",
        label: "Username",
        defaultValue: formData.username
    }, {
        name: "address",
        type: "text",
        label: "Address",
        defaultValue: formData.address
    }, {
        name: "contacts",
        type: "tel",
        label: "Phone Number",
        defaultValue: formData.contacts,
        pattern: {
            inputProps: {
                inputMode: "numeric",
                pattern: '/\d{10}/'
            }
        }
    }]

    

    return (
        <Card>

            <UserProfile />

            <Form onSubmit={handleUpdate}>
                <FormItem>
                    <Avatar  src={`data:image/png;base64, ${profile}`} sx={{ width: 100, height: 100 }} />
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

                    {profileImage && <Avatar  src={URL.createObjectURL(profileImage)} sx={{ width: 100, height: 100 }} /> }
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

                <Button type="submit" variant="contained">Update</Button>
            </Form>
        </Card>
    )
}

export default ProfileDisplay