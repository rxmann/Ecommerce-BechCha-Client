import styled from "styled-components"
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
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
import { useDispatch} from "react-redux"
import { resetPassword } from "../../ApiCalls/UserApiCalls";


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
    display: flex;
    justify-content: center;
`
const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 20px;
`

const Logo = styled.img`
    width: 120px;
    cursor: pointer;
    text-decoration: none;
    margin-bottom: 30px;
`

const FormCtrl = styled(FormControl)`
`



const PasswordReset = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();


    const [formData, setFormData] = useState({
        email: "",
        password: "",
        confirmPassword: "",
        ptp: ""
    })

    const [otp, setOTP] = useState("")

    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);


    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }



    const handleSubmitReset = async (e) => {
        e.preventDefault();

        if (formData.password.length < 8 || !/\d/.test(formData.password)) return alert("Password should be 8 characters long and must include Numbers")
        formData.otp = otp;

        const resP = await resetPassword(dispatch, formData);
        if (resP) {
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
                    <H1> Reset password </H1>
                    <Form onSubmit={handleSubmitReset} >
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


                        <FormControl>
                            <InputLabel> OTP </InputLabel>
                            <OutlinedInput
                                inputProps={{ maxLength: 4 }}
                                value={otp}
                                onChange={(e) => setOTP(e.target.value)}
                                type="text"
                                label="OTP"
                                required={true}
                                sx={{ letterSpacing: "10px" }}
                            />
                        </FormControl>



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
                            <InputLabel> Confirm Password </InputLabel>
                            <OutlinedInput
                                name="confirmPassword"
                                value={formData.confirmPassword}
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
                       
                        <LoadingButton
                            type="submit"
                            size="large"
                            variant="contained"
                        >
                            Reset Password
                        </LoadingButton>
                    </Form>
                </Wrapper>
            </Card>
        </Container>
    )
}

export default PasswordReset