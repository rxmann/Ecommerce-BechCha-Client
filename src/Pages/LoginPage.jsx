import styled from "styled-components"
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { publicRequest } from "../requestMethods/requestMethods";
import { 
    FormControl, 
    InputLabel, 
    IconButton, 
    OutlinedInput, 
    InputAdornment
} from "@mui/material";

import {Visibility, VisibilityOff} from '@mui/icons-material';




const Container = styled.div`
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: antiquewhite;
`

const Card = styled.div`
    box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
    display: flex;
    width: 60%;
    min-height: 600px;
    border-radius: 10px;
    background-color: white;
    overflow: hidden;
`
    
const Left = styled.div`
    flex: 1;
    background: 
        linear-gradient(#0171b66c, #00000057),
        url("https://images.unsplash.com/photo-1552830779-966dc9e59b46?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nzd8fGNyZWRpdCUyMGNhcmR8ZW58MHwwfDB8YmxhY2t8&auto=format&fit=crop&w=500&q=60") center;
    background-size: cover;
    display: flex;
    padding: 50px;
    flex-direction: column;
    justify-content: space-around;
    gap: 30px;
    color: white;
`

const Title = styled.h1`
    font-size: 40px;
    line-height: 100px;
`

const Desc = styled.p`

`

const Span = styled.span`
    font-size: 14px;
`

const Right = styled.div`
    flex: 2;
    padding: 50px;
    display: flex;
    flex-direction: column;
    gap: 50px;
    justify-content: center;
`
const H1 = styled.h1`

`
const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 30px;
`

const SearchButton = styled(Button)`

`

const SpanMessage = styled.div`
    background-color: red;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px 0px;
`


const LoginPage = () => {
    const [error, setError] = useState("");
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")


    const navigate = useNavigate();


     // for password box (visibility, toogle, functions)
     const [showPassword, setShowPassword] = useState(false);

     const handleClickShowPassword = () => setShowPassword((show) => !show);

     
    const handleSubmitLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await publicRequest.post("/users/login", {
                email,
                password
            })
            console.log(response);
            navigate("/");
        }
        catch (err) {

            setError(err.response.data);
            console.log(err);
        }

    }

  return (
    <Container>
            <Card>
                <Left>
                    <Title> Bech-cha </Title>
                    <Desc> 
                        Lorem ipsum dolor sit amet consectetur
                        Lorem ipsum dolor sit amet consectetur
                        Lorem ipsum dolor sit amet consectetur
                        Best ecommerce site in town with 100+ active users. </Desc>
                    <Span> Don't have an account yet? </Span>
                    
                        <SearchButton 
                        onClick={() => navigate("/register")}
                            style={{
                                color: 'white'
                            }}
                            color='info' 
                            variant="outlined"
                            > 
                            Register 
                        </SearchButton>
                </Left>


                <Right>
                    <H1> Login </H1>
                    <Form >
                        <TextField
                            id="outlined-password-input"
                            label="Email"
                            type="Email"
                            value= {email}
                            onChange={(e) => {setEmail(e.target.value)}}
                            required
                        />
                       
                        
                       <FormControl >
                        <InputLabel> Password </InputLabel>
                            <OutlinedInput
                                value={password}
                                onChange={(e) => {setPassword(e.target.value)} }
                                type={showPassword ? 'text' : 'password'}
                                endAdornment={
                                <InputAdornment position="end">
                                    <IconButton onClick={handleClickShowPassword} >
                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>
                                        </InputAdornment>
                                }
                                label="Password"
                                required = {true}
                            />
                        </FormControl>




                        {error? <SpanMessage> {error} </SpanMessage> : ""}
                        <Button onClick={handleSubmitLogin} size="large" variant="contained"> Login </Button>

                    </Form>
                </Right>
            </Card>
    </Container>
  )
}

export default LoginPage