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

const Wrapper = styled.div`
    flex: 2;
    padding: 50px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    justify-content: center;
`
const H1 = styled.h1`
    font-weight: 400;
`
const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 20px;
`

const Btn = styled.button`
    padding: 10px;
    border: none; 
    font-size  : 14px;
    background-color: #f5f7f8;
    cursor: pointer;

    &:hover {
        background-color: #aaaaaa;
            color: white;
    }
`

const SpanMessage = styled.div`
    background-color: red;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px 0px;
`

const Logo = styled.img`
    width: 120px;
    cursor: pointer;
    text-decoration: none;
`



const RegisterPage = () => {

    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    const [error, setError] = useState("");

    const navigate = useNavigate();




    // for password box (visibility, toogle, functions)
    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);


    const handleSubmitRegister = async (e) => {
        e.preventDefault();
        try {
            await publicRequest.post("/users/register", {
                username,
                email,
                password
            })
            console.log("Log In successful");
            navigate("/login");
        }
        catch (err) {
            console.log(err.response.data);
            setError(err.response.data.Error[0].message)
        }

    }

    return (
        <Container>
            <Card>

            <Link to="/"> 
                <Logo src='https://github.com/rxmxndai/rxmxndai-assets/blob/main/assets/Bech_Cha.png?raw=true' />
            </Link>


                <Wrapper>
                    <H1> Register </H1>
                    <Form >
                        <TextField
                            value={username}
                            onChange={e => setUsername(e.target.value)}
                            required
                            label="Username"
                            type="text"
                        />
                        <TextField
                            value={email}
                            onChange={(e) => { setEmail(e.target.value) }}
                            required
                            label="Email"
                            type="email"
                        />
                        {/* ////////////////// */}
                        <FormControl>
                            <InputLabel> Password </InputLabel>
                            <OutlinedInput
                                value={password}
                                onChange={(e) => { setPassword(e.target.value) }}
                                type={showPassword ? 'text' : 'password'}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton onClick={handleClickShowPassword} >
                                            {showPassword ? <Visibility /> : <VisibilityOff />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                                label="Password"
                                required={true}
                            />
                        </FormControl>
                        {/* ////////////////// */}
                        <FormControl>
                            <InputLabel>Confirm Password </InputLabel>
                            <OutlinedInput
                                value={confirmPassword}
                                onChange={(e) => { setConfirmPassword(e.target.value) }}
                                type={showPassword ? 'text' : 'password'}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton onClick={handleClickShowPassword} >
                                            {showPassword ? <Visibility /> : <VisibilityOff />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                                label="Confirm Password"
                                required={true}
                            />
                        </FormControl>
                        {/* ///////////////// */}
                        {error ? <SpanMessage> {error} </SpanMessage> : ""}
                        <Button
                            size="large"
                            variant="contained"
                            onClick={handleSubmitRegister}
                        >
                            Register </Button>


                        <Span> Already have an account? </Span>
                        <Btn onClick={() => navigate("/login")} > Login </Btn>
                    </Form>
                </Wrapper>
            </Card>
        </Container>
    )
}

export default RegisterPage