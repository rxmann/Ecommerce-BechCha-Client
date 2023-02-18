import { Avatar, Button, MenuItem, Select, TextField } from "@mui/material"
import { useState } from "react"
import styled from "styled-components"
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import { publicRequest } from "../../../requestMethods/requestMethods";




const UploadB = styled.label`
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 10px;
    border: 1px dashed gray;
    padding: 30px 20px;
    margin: 0px 20px;
`


const Container = styled.div`
    flex: 5;    
    width: 100%;
    padding: 20px;
`

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
`
const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 30px;
    padding: 50px;
    box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
    background-color: white;
`

const FormDiv = styled.div`
    display: flex;
    flex-wrap: wrap;
`

const FormItem = styled.div`
    width: 40%;
    display: flex;
    margin: 30px 50px 0px 0px; 
    align-items: center;
    font-size: 14px;
    font-weight: 500;
    color: gray;
`

const Label = styled.label`
    flex: 1;
    
`

const TextInput = styled(TextField)`
    flex: 1;
    color: gray;
`


const Title = styled.h2`
     font-size: 24px;
    font-weight: 500;
    color: gray;
`


const UserRegister = () => {
    
    const data = {
        username: "",
        email: "",
        password: "",
        address: "",
        contacts: "",
        dob: "",
        isAdmin: false,
    };
    const [profileImage, setProfileImage] = useState("");
    const [userData, setUserData] = useState(data);

    const handleChange = (e) => {
        setUserData({ ...userData, [e.target.name]: e.target.value })
    }

    const handleRegister = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        Object.keys(userData).forEach(key => {
            formData.append(key, userData[key]);
        });

        try {
            const response = await publicRequest.post("/users/register", formData, { headers: { "Content-type": "multipart/form-data" } });
            console.log(response.data);
            setUserData(data);
        }
        catch (err) {
            console.log(err);
        }
    }

    const InputData = [
        {
            name: "username",
            type: "text",
            label: "Username",
            value: userData.username,
        }, {
            name: "email",
            type: "email",
            label: "Email",
            value: userData.email,
        },
        {
            name: "password",
            type: "password",
            label: "Password",
            value: userData.password,
        },
        {
            name: "address",
            type: "text",
            label: "Address",
            value: userData.address,
        },
        {
            name: "contacts",
            type: "tel",
            label: "Phone Number",
            pattern: {
                inputProps: {
                    inputMode: "numeric",
                    pattern: `[0-9]{10}`
                }
            },
        },
        {
            name: "dob",
            type: "date",
            label: "Date of Birth"
        },
    ]


    // image upload change handle
    const handleImage = (e) => {
        const imaged = e.target.files[0];
        setUserData({ ...userData, "image": imaged })
        setProfileImage(URL.createObjectURL(imaged))
    }


    return (
        <Container>
            <Wrapper>
                <Title> New user registration </Title>
                <Form onSubmit={handleRegister}>
                    <FormItem>
                        <Avatar alt="Rxman" src={""} sx={{ width: 100, height: 100 }} />

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


                    <FormDiv>
                        {InputData.map((input) => (
                            <FormItem key={input.label}>
                                <Label> {input.label} </Label>
                                <TextInput
                                    name={input.name}
                                    type={input.type}
                                    value={input.value && input.value}
                                    onChange={handleChange}
                                    InputProps={input.pattern}
                                    required
                                    variant={"standard"}
                                />
                            </FormItem>
                        ))}

                        <FormItem>
                            <Label> User Role </Label>
                            <Select sx={{ width: "100%", flex: "1" }}
                                autoWidth
                                name={"isAdmin"}
                                value={userData.isAdmin}
                                onChange={handleChange}
                            >
                                <MenuItem value={false}> Customer </MenuItem>
                                <MenuItem value={true} > Admin </MenuItem>
                            </Select>
                        </FormItem>

                    </FormDiv>




                    <Button sx={{ maxWidth: "200px", padding: "10px 20px" }} type="submit" variant="contained">Register</Button>

                </Form>
            </Wrapper>
        </Container>
    )
}

export default UserRegister