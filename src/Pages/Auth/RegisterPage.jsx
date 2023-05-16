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
import { useDispatch, useSelector } from "react-redux"
import { registerUser } from "../../ApiCalls/UserApiCalls";
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

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { isSignedIn, currentUser: userState, isFetching } = useSelector(state => state.user);


    useEffect(() => {
        const checkLogin = () => {
            if (isSignedIn) navigate("/");
        }
        checkLogin();
    }, [userState, isSignedIn, navigate])


    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
        dob: "",

    })
    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);


    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }



    const handleSubmitRegister = async (e) => {
        e.preventDefault();

        if (formData.password.length < 8 || !/\d/.test(formData.password)) return alert("Password should be 8 characters long and must include Numbers")

        const resP = await registerUser(dispatch, formData);
        if (resP) {
            setFormData({
                username: "",
                email: "",
                password: "",
                dob: "",
    
            })
            navigate("/verify-registration");
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