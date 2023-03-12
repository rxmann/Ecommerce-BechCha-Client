import { Avatar, Button, MenuItem, Select, TextField } from "@mui/material"
import { useState } from "react"
import styled from "styled-components"
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import { useDispatch } from "react-redux";
import { registerUser } from "../../../ApiCalls/UserApiCalls";



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
    const dispatch = useDispatch();



    // state management
    const handleChange = (e) => {
        setUserData({ ...userData, [e.target.name]: e.target.value })
    }


    // invoke registrations
    const handleRegister = async (e) => {
        e.preventDefault();

        // 2mb
        if (!userData["image"]) return alert("Requires a profile image.")

        if (userData["image"]?.size > 2000000) {
            alert("File too large");
            return;
        }

        if (userData.password.length < 8 || !/\d/.test(userData.password)) return alert("Password should be 8 characters long and must include Numbers")

        
        const formData = new FormData();
        formData.append("username", userData["username"]);
        formData.append("email", userData["email"]);
        formData.append("password", userData["password"]);
        formData.append("isAdmin", userData["isAdmin"]);
        formData.append("contacts", userData["contacts"]);
        formData.append("dob", userData["dob"]);


        Object.keys(formData).forEach(key => {
            console.log(key, formData[key]);
        });


        await registerUser(dispatch, formData);
    }



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

                        {/* // username */}
                        <FormItem >
                            <Label> Username </Label>
                            <TextInput
                                name={"username"}
                                type={"text"}
                                value={userData.username}
                                onChange={handleChange}
                                required
                                variant={"standard"}
                            />
                        </FormItem>


                        {/* // emails */}
                        <FormItem >
                            <Label> Email </Label>
                            <TextInput
                                name={"email"}
                                type={"email"}
                                value={userData.email}
                                onChange={handleChange}
                                required
                                variant={"standard"}
                            />
                        </FormItem>

                        {/* // Password */}
                        <FormItem >
                            <Label> Password </Label>
                            <TextInput
                                name={"password"}
                                type={"password"}
                                value={userData.password}
                                onChange={handleChange}
                                required
                                variant={"standard"}
                            />
                        </FormItem>


                        {/* // Address */}
                        <FormItem >
                            <Label> Address </Label>
                            <TextInput
                                name={"address"}
                                type={"text"}
                                value={userData.address}
                                onChange={handleChange}
                                required
                                variant={"standard"}
                            />
                        </FormItem>

                        {/* // Contacts */}
                        <FormItem >
                            <Label> Contacts </Label>
                            <TextInput
                                 placeholder="contacts"
                                 type="tel"
                                 value={userData.contacts}
                                 onChange={handleChange}
                                 inputProps={{
                                   pattern: '[0-9]{10}',
                                   maxLength: 10,
                                   inputMode: 'numeric',
                                 }} 
                                 variant={"standard"}
                            />
                        </FormItem>


                        {/* // Date of birth */}
                        <FormItem >
                            <Label> DOB </Label>
                            <TextInput
                                name={"dob"}
                                type={"date"}
                                onChange={handleChange}
                                required
                                variant={"standard"}
                            />
                        </FormItem>

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