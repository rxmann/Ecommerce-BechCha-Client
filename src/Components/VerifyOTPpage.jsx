import styled from "styled-components"
import Button from '@mui/material/Button';
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { publicRequest } from "../requestMethods/requestMethods";
import {
    FormControl,
    InputLabel,
    OutlinedInput,
} from "@mui/material";
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
    margin-top: 40px;
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

const VerifyOTP = () => {

    const userId = useParams().id;

    const [otp, setOTP] = useState("")
    const navigate = useNavigate();



    const handleVerifyOTP = async (e) => {
        e.preventDefault();

        try {

            const response = await publicRequest.post("/users/verifyOTP", { userId, otp: otp.toString() })

            if (response.data.status === "VERIFIED") {

                toast.success("User registration completed!", {
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

    return (
        <Container>
            <Card>
                <Link to="/">
                    <Logo src='https://github.com/rxmxndai/rxmxndai-assets/blob/main/assets/Bech_Cha.png?raw=true' />
                </Link>

                <Fade color="green"> We are happy to connect with you! </Fade>

                <Wrappper>
                    <H1> Verify OTP </H1>

                    <Fade > Enter the 4 digit OTP sent to your email address </Fade>
                    <Form onSubmit={handleVerifyOTP}>
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

                        <Span> Resend otp mail? </Span>

                        <Btn
                            onClick={() => navigate("/register")}>
                            Resend
                        </Btn>
                    </Form>
                </Wrappper>

            </Card>
        </Container>
    )
}

export default VerifyOTP