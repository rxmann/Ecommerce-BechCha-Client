import styled from "styled-components"
import LockIcon from '@mui/icons-material/Lock';
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import {
    FormControl,
    InputLabel,
    IconButton,
    OutlinedInput,
    InputAdornment
} from "@mui/material";
import { Visibility, VisibilityOff } from '@mui/icons-material';
import MailIcon from '@mui/icons-material/Mail';

import 'react-toastify/dist/ReactToastify.css';
import LoadingButton from "@mui/lab/LoadingButton";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../Redux/apiCalls";



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
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { isFetching, currentUser, isSignedIn } = useSelector(state => state.user);
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    })


    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);


    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmitLogin = async (e) => {
        e.preventDefault();
        await loginUser(dispatch, formData);
    }


    useEffect(() => {
        const checkLogin = () => {
            if (currentUser?.isAdmin && isSignedIn) {
                navigate("/admin/dash");
            }
            else if (isSignedIn) {
                navigate("/")
            }
        }
        checkLogin();
    }, [currentUser, navigate, isSignedIn])

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
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
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
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
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


                        <LoadingButton
                            loading={isFetching}
                            type="submit"
                            size="large"
                            variant="contained"
                        >
                            Login
                        </LoadingButton>


                        <LinkItem href={`/verify-registration`} > Verify account </LinkItem>

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