import styled from "styled-components"
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import PersonIcon from '@mui/icons-material/Person';
import MailIcon from '@mui/icons-material/Mail';
import LockIcon from '@mui/icons-material/Lock';
import LoadingButton from '@mui/lab/LoadingButton';
import {
    FormControl,
    InputLabel,
    IconButton,
    OutlinedInput,
    InputAdornment,
} from "@mui/material";
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux"
import { register } from "../Redux/apiCalls";
import { useEffect } from "react";


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

    const dispatch = useDispatch();
    const { isFetching, error, errorMessage } = useSelector(state => state.user);

    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
        dob: "",
    })

    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);


    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmitRegister = async (e) => {
        e.preventDefault();
        const user = {
            username: formData.username,
            email: formData.email,
            password: formData.password,
            dob: formData.dob
        }

        await register(dispatch, user);
    }

    useEffect(() => {
        if (!error && !isFetching && errorMessage !== "") {
            toast.success("Registration successful!", {
                position: "top-center",
                theme: "colored"
            })
            navigate("/login");
        }
        else if (error && !isFetching && errorMessage.length > 0) {
            toast.error(`${errorMessage}`, {
                position: "top-center",
                theme: "colored"
            })
            navigate("/register");
        }
    }, [error, isFetching])

    return (
        <Container>
            <Card>

                <Link to="/">
                    <Logo src='https://github.com/rxmxndai/rxmxndai-assets/blob/main/assets/Bech_Cha.png?raw=true' />
                </Link>
                <Wrapper>
                    <H1> Register </H1>
                    <Form onSubmit={handleSubmitRegister} >
                        <FormCtrl>
                            <InputLabel> Username </InputLabel>
                            <OutlinedInput
                                name="username"
                                value={formData.username}
                                onChange={handleChange}
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
                        </FormCtrl>

                        {/* ////////////////// */}
                        <FormCtrl>
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
                        </FormCtrl>
                        <FormCtrl>
                            <InputLabel> Date of Birth </InputLabel>
                            <OutlinedInput
                                name="dob"
                                onChange={handleChange}
                                type="date"
                                label="DATE OF BIRTH"
                                startAdornment={
                                    <InputAdornment position="start">
                                        <LockIcon />
                                    </InputAdornment>
                                }
                            />
                        </FormCtrl>
                            
                            <LoadingButton
                                loading={isFetching}
                                type="submit"
                                size="large"
                                variant="contained"
                            >
                                Register
                            </LoadingButton> 


                        <Span> Already have an account? </Span>
                        <Btn onClick={() => navigate("/login")} > Login </Btn>
                    </Form>
                </Wrapper>
            </Card>
        </Container>
    )
}

export default RegisterPage