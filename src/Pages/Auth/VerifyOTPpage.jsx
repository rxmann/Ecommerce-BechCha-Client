import styled from "styled-components"
import Button from '@mui/material/Button';
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import {
    FormControl,
    InputLabel,
    OutlinedInput,
} from "@mui/material";
import { resendUserOTP, verifyUserOTP } from "../../ApiCalls/UserApiCalls";
import { useDispatch, useSelector } from "react-redux";
import LoadingButton from "@mui/lab/LoadingButton/LoadingButton";




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
    max-width: 300px;
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


    const {currentUser, isFetching } = useSelector(state => state.user);
    const navigate = useNavigate();   
    const dispatch = useDispatch(); 
    const [otp, setOTP] = useState("")
    const [email, setEmail] = useState(currentUser?.email ? currentUser?.email : "");

   

    const handleVerifyOTP = async (e) => {
        e.preventDefault();
        const payload = {
            email, otp
        }
        const respp = await verifyUserOTP(dispatch, payload);
         if (respp ) {
            navigate("/login"); 
         }
    }

    const handleResend = async (e) => {
        e.preventDefault();
        await resendUserOTP(dispatch, email);
        
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

                    <Fade > Enter Email and 4 digit OTP sent to your email</Fade>
                    <Form onSubmit={handleVerifyOTP}>
                        
                        <FormControl>
                            <InputLabel> Email </InputLabel>
                            <OutlinedInput
                                value={email}
                                defaultValue={email}
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

                        <LoadingButton
                            loading={isFetching}
                            type="submit"
                            size="large"
                            variant="contained"
                        >
                            verify
                        </LoadingButton>

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