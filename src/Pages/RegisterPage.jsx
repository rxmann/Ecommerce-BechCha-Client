import styled from "styled-components"
import Button from '@mui/material/Button';
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { publicRequest } from "../requestMethods/requestMethods";
import PersonIcon from '@mui/icons-material/Person';
import MailIcon from '@mui/icons-material/Mail';
import LockIcon from '@mui/icons-material/Lock';

import {
    FormControl,
    InputLabel,
    IconButton,
    OutlinedInput,
    InputAdornment
} from "@mui/material";

import { Visibility, VisibilityOff } from '@mui/icons-material';
import { toast } from "react-toastify";




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
    background-color: #f5f7f8;
    cursor: pointer;

    &:hover {
        background-color: #aaaaaa;
            color: white;
    }
`

const Logo = styled.img`
    width: 120px;
    cursor: pointer;
    text-decoration: none;
    margin-bottom: 30px;
`

const FormCtrl = styled(FormControl)`
`



const RegisterPage = () => {

    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    const navigate = useNavigate();




    // for password box (visibility, toogle, functions)
    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);


    const handleSubmitRegister = async (e) => {
        e.preventDefault();
        try {
            const response = await publicRequest.post("/users/register", {
                username,
                email,
                password
            })
            toast.success("Please verify through Email for complete registration!",{
                position: "top-center",
                theme: "colored"
            } )
            navigate("/login",  { state: { userId: response.data.user._id } } );
        }
        catch (err) {
            toast.error(err?.response?.data, {
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


                <Wrapper>
                    <H1> Register </H1>
                    <Form  onSubmit={handleSubmitRegister} >
                        <FormCtrl>
                            <InputLabel> Username </InputLabel>
                            <OutlinedInput
                                value={username}
                                onChange={e => setUsername(e.target.value)}
                                required
                                label="Username"
                                type="text"
                                startAdornment={
                                    <InputAdornment position="start">
                                        <IconButton  >
                                            <PersonIcon />
                                        </IconButton>
                                    </InputAdornment>
                                }
                            />
                        </FormCtrl>

                        <FormCtrl>
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
                        </FormCtrl>

                        {/* ////////////////// */}
                        <FormCtrl>
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
                        </FormCtrl>
                        {/* ////////////////// */}
                        <FormCtrl>
                            <InputLabel>Confirm Password </InputLabel>
                            <OutlinedInput
                                value={confirmPassword}
                                onChange={(e) => { setConfirmPassword(e.target.value) }}
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
                                label="Confirm Password"
                                required={true}
                            />
                        </FormCtrl>

                        <Button
                            type="submit"
                            size="large"
                            variant="contained">
                                    Register 
                        </Button>


                        <Span> Already have an account? </Span>
                        <Btn onClick={() => navigate("/login")} > Login </Btn>
                    </Form>
                </Wrapper>
            </Card>
        </Container>
    )
}

export default RegisterPage