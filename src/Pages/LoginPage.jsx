import styled from "styled-components"
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { publicRequest } from "../requestMethods/requestMethods";
import {
    FormControl,
    InputLabel,
    IconButton,
    OutlinedInput,
    InputAdornment
} from "@mui/material";

import { Visibility, VisibilityOff } from '@mui/icons-material';




const Container = styled.div`
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f5f7f8;
`

const Card = styled.div`
    box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 10px;
    background-color: white;
    overflow: hidden;
    padding: 20px;
`

const Span = styled.span`
    font-size: 14px;
    color: #0171b6;
`

const Wrappper = styled.div`
    flex: 2;
    padding: 50px;
    display: flex;
    flex-direction: column;
    gap: 50px;
    justify-content: center;
`
const H1 = styled.h1`
    font-weight: 500;
`
const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 30px;
`

const Btn = styled.button`
    padding: 10px;
    border: none; 
    font-size  : 14px;
    background-color: #aaaaaa;
    color: white;
    cursor: pointer;
    width: 100%;

    &:hover {
        color: black;
        background-color: #f5f7f8;
    }
`

const SpanMessage = styled.div`
    background-color: red;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
`

const Logo = styled.img`
    width: 120px;
    cursor: pointer;
    text-decoration: none;
    border-bottom: 1px solid #aaaaaa;
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
            navigate("/");
        }
        catch (err) {
            setError("Unable to Login. Please Try again");
            console.log(err);
        }

    }

    return (
        <Container>
            <Card>

                <Link to="/">
                    <Logo src='https://github.com/rxmxndai/rxmxndai-assets/blob/main/assets/Bech_Cha.png?raw=true' />
                </Link>


                <Wrappper>
                    <H1> Login </H1>
                    <Form >
                        <TextField
                            id="outlined-password-input"
                            label="Email"
                            type="Email"
                            value={email}
                            onChange={(e) => { setEmail(e.target.value) }}
                            required
                        />

                        <FormControl >
                            <InputLabel> Password </InputLabel>
                            <OutlinedInput
                                value={password}
                                onChange={(e) => { setPassword(e.target.value) }}
                                type={showPassword ? 'text' : 'password'}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton onClick={handleClickShowPassword} >
                                            {showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                                label="Password"
                                required={true}
                            />
                        </FormControl>

                        {error ? <SpanMessage> {error} </SpanMessage> : ""}
                        <Button onClick={handleSubmitLogin} size="large" variant="contained"> Login </Button>

                        <Span> Don't have an account yet? </Span>

                        <Btn
                            onClick={() => navigate("/register")}>
                            Register
                        </Btn>
                   </Form>
                </Wrappper>

            </Card>
        </Container>
    )
}

export default LoginPage