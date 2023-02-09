import AddPhotoAlternate from "@mui/icons-material/AddPhotoAlternate"
import { Avatar, Button, FormControlLabel, IconButton, MenuItem, Radio, RadioGroup, Select, TextField } from "@mui/material"
import { useState } from "react"
import styled from "styled-components"

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

    const InputData = [
        {
            type: "text",
            label: "Username"
        }, {
            type: "email",
            label: "Email"
        },
        {
            type: "password",
            label: "Password"
        },
        {
            type: "text",
            label: "Address"
        },
        {
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
            type: "date",
            label: "Date of Birth"
        },
    ]

    const [userType, setUserType] = useState("customer");


    return (
        <Container>
            <Wrapper>
                <Title> New user registration </Title>
                <Form >
                    <FormItem>
                        <Avatar alt="Rxman" src={""} sx={{ width: 100, height: 100 }} />
                        <IconButton color="primary" aria-label="upload picture" component="label">
                            <input hidden accept="image/*" type="file" />
                            <AddPhotoAlternate />
                        </IconButton>
                    </FormItem>


                    <FormDiv>
                        {InputData.map((input) => (
                            <FormItem key={input.label}>
                                <Label> {input.label} </Label>
                                <TextInput
                                    required
                                    variant="standard"
                                    type={input.type}
                                    defaultValue={input.defaultValue}
                                    InputProps={input.pattern}
                                />
                            </FormItem>
                        ))}
                        <FormItem>
                            <Label> Gender </Label>
                            <div sx={{flex: "1", width: "100%"}}>
                                <RadioGroup row >
                                    <FormControlLabel value="male" control={<Radio  />} label="Male" />
                                    <FormControlLabel value="female" control={<Radio />} label="Female" />
                                    <FormControlLabel value="other" control={<Radio />} label="Other" />
                                </RadioGroup>
                            </div>
                        </FormItem>

                        <FormItem>
                            <Label> User Role </Label>
                            <Select sx={{width: "100%", flex: "1"} } autoWidth value={userType} onChange={(e) => setUserType(e.target.value)}>
                                <MenuItem  value="customer" > Customer </MenuItem>
                                <MenuItem value="admin" > Admin </MenuItem>
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