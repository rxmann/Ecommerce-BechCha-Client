import styled from "styled-components"
import LockIcon from '@mui/icons-material/Lock';
import Button from '@mui/material/Button';
import { Link, useLocation, useNavigate } from "react-router-dom";
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
import MailIcon from '@mui/icons-material/Mail';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




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
    width: 90%;
    padding: 20px;
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
    background-color: #aaaaaa;
    color: white;
    cursor: pointer;
    width: 100%;

    &:hover {
        color: black;
        background-color: #f5f7f8;
    }
`

const Logo = styled.img`
    width: 120px;
    cursor: pointer;
    text-decoration: none;
    margin-bottom: 30px;
`

const LinkItem = styled.a`
    cursor: pointer;
`




const LoginPage = () => {

    const location = useLocation();
    const userId = location.state?.userId;

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
            toast.success(`Welcome to BechCha ${response.data.username.toUpperCase()}`, {
                position: "top-center",
                theme: "colored"
            })
            navigate("/");
        }
        catch (err) {
            console.log(err.response);
            toast.error(err.response.data, {
                position: "top-right",
                theme: "colored"
            })
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
                    <Form onSubmit={handleSubmitLogin}>
                        <FormControl>
                            <InputLabel> Email </InputLabel>
                            <OutlinedInput
                                value={email}
                                onChange={(e) => { setEmail(e.target.value) }}
                                required
                                label="Email"
                                type="email"
                                startAdornment={
                                    <InputAdornment position="start">
                                        <IconButton  >
                                            <MailIcon />
                                        </IconButton>
                                    </InputAdornment>
                                }
                            />
                        </FormControl>

                        {/* ////////////////// */}
                        <FormControl>
                            <InputLabel> Password </InputLabel>
                            <OutlinedInput
                                value={password}
                                onChange={(e) => { setPassword(e.target.value) }}
                                type={showPassword ? 'text' : 'password'}
                                startAdornment={
                                    <InputAdornment position="start">
                                        <IconButton  >
                                            <LockIcon />
                                        </IconButton>
                                    </InputAdornment>
                                }
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

                        <LinkItem> forgot password? </LinkItem>
                        <Button type="submit" size="large" variant="contained"> Login </Button>
                        <LinkItem href={`/verify-registration/${userId}`} > Verify account </LinkItem>

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