import styled from "styled-components"
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import {
    FormControl,
    InputLabel,
    IconButton,
    OutlinedInput,
    InputAdornment
} from "@mui/material";
import MailIcon from '@mui/icons-material/Mail';
import 'react-toastify/dist/ReactToastify.css';
import LoadingButton from "@mui/lab/LoadingButton";
import { useDispatch } from "react-redux";
import { resendUserOTP } from "../../ApiCalls/UserApiCalls";




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
    width: 100%;
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
    gap: 40px;
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



const VerifyAccountEmail = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [email, setEmail] = useState("")

    const handleSubmit = async (e) => {
       e.preventDefault();
       console.log(email);
       const ress = await resendUserOTP(dispatch, email);

       ress === true && navigate("/password-reset-form")
    }


    useEffect(() => {
       
    }, [])

    return (
        <Container>
            <Card>
                <Link to="/">
                    <Logo src='https://github.com/rxmxndai/rxmxndai-assets/blob/main/assets/Bech_Cha.png?raw=true' />
                </Link>
                <Wrappper>
                    <H1> Password Reset  </H1>
                    <Form onSubmit={handleSubmit}>
                        <FormControl>
                            <InputLabel> Email </InputLabel>
                            <OutlinedInput
                                name="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
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


                        <LoadingButton
                            type="submit"
                            size="large"
                            variant="contained"
                        >
                           REQUEST OTP
                        </LoadingButton>

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

export default VerifyAccountEmail