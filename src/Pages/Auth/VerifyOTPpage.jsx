import styled from "styled-components"
import Button from '@mui/material/Button';
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { publicRequest } from "../../requestMethods/requestMethods";
import {
    FormControl,
    InputLabel,
    OutlinedInput,
} from "@mui/material";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSelector } from "react-redux";




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
    font-weight: 500;
    display: flex;
    align-items: center;
    justify-content: center;
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

const Fade = styled.p`
    font-weight: 100;
    font-size: 14px;
`

const LinkItem = styled.a`
    cursor: pointer;
`

const VerifyOTP = () => {

    const navigate = useNavigate();    
    const { currentUser } = useSelector(state => state.user);
    const [otp, setOTP] = useState("")
    const [email, setEmail] = useState(currentUser.email);

    const handleVerifyOTP = async (e) => {
        e.preventDefault();
        try {
            const response = await publicRequest.post("/users/verifyOTP", { userId: currentUser._id, email, otp: otp.toString() })

            console.log(response.data);

            if (response?.data) {

                toast.success("User verification completed!", {
                    position: "top-center",
                    theme: "colored",
                })

                navigate("/login");
            }
            else {
                throw new Error("Verification failed. Try again!")
            }
        }
        catch (err) {
            console.log(err.response);
            toast.error(err.response.data, {
                position: "top-center",
                theme: "colored"
            })
        }
    }

    const handleResend = async () => {
        try {
            const response = await publicRequest.post("/users/resendOTP", { email, userId: currentUser._id  });
            console.log(response);
        }
        catch (err) {
            console.log(err.response.data);
        }
    }

    return (
        <Container>
            <Card>
                <Link to="/">
                    <Logo src='https://github.com/rxmxndai/rxmxndai-assets/blob/main/assets/Bech_Cha.png?raw=true' />
                </Link>

                <Fade color="green"> We are happy to connect with you! </Fade>

                <Wrappper>
                    <H1> Verify OTP </H1>

                    <Fade > Enter the 4 digit OTP sent to your email {email} </Fade>
                    <Form onSubmit={handleVerifyOTP}>
                        
                        <FormControl>
                            <InputLabel> Email </InputLabel>
                            <OutlinedInput
                                value={email}
                                onChange={(e) => { setEmail(e.target.value) }}
                                type="text"
                                label="Email"
                                required={true}
                            />
                        </FormControl>

                        <FormControl>
                            <InputLabel> OTP </InputLabel>
                            <OutlinedInput
                                inputProps={{ maxLength: 4 }}
                                value={otp}
                                onChange={(e) => { setOTP(e.target.value) }}
                                type="text"
                                label="OTP"
                                required={true}
                                sx={{ letterSpacing: "10px" }}
                            />
                        </FormControl>

                        <Button type="submit" size="large" variant="contained"> verify </Button>

                        <LinkItem onClick={handleResend} > Resend OTP </LinkItem>

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

export default VerifyOTP