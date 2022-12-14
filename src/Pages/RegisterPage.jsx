import styled from "styled-components"
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { publicRequest } from "../requestMethods/requestMethods";

const Container = styled.div`
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: antiquewhite;
`

const Card = styled.div`
    box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
    display: flex;
    width: 60%;
    min-height: 600px;
    border-radius: 10px;
    background-color: white;
    overflow: hidden;
`
    
const Left = styled.div`
    flex: 1;
    background: 
        linear-gradient(#0171b66c, #00000057),
        url("https://images.unsplash.com/photo-1548372033-893f42a8c1f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTB8fGNyZWRpdCUyMGNhcmR8ZW58MHwwfDB8YmxhY2t8&auto=format&fit=crop&w=500&q=60") center;
    background-size: cover;
    display: flex;
    padding: 50px;
    flex-direction: column;
    justify-content: space-around;
    gap: 30px;
    color: white;
`

const Title = styled.div`
    font-size: 70px;
    font-weight: bolder;
    line-height: 100px;
`
const Desc = styled.p`

`

const Span = styled.span`
    font-size: 14px;
`

const Right = styled.div`
    flex: 1;
    padding: 50px;
    display: flex;
    flex-direction: column;
    gap: 50px;
    justify-content: center;
`
const H1 = styled.h1`

`
const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 30px;
`

const SearchButton = styled(Button)`
`

const RegisterPage = () => {

    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    
    const navigate = useNavigate();

    const handleSubmitRegister = async (e) => {
        e.preventDefault();
        try {
            const response = await publicRequest.post("/users/register", {
                username,
                email,
                password,
                confirmPassword
            })
            console.log(response);
            navigate("/login");
        }
        catch (err) {
            console.log(err);
        }

    }
  return (
    <Container>
            <Card>

            <Right>
                <H1> Register </H1>
                <Form >
                    <TextField
                        value={username}
                        onChange={ e => setUsername(e.target.value) }
                        required
                        label="Username"
                        type="text"
                    />
                    <TextField
                        value={email}
                        onChange={(e) => {setEmail(e.target.value)}}
                        required
                        label="Email"
                        type="email"
                    />
                    <TextField
                        value={password}
                        onChange={(e) => {setPassword(e.target.value)} }
                        required
                        label="Password"
                        type="password"
                    />
                    <TextField
                        value={confirmPassword}
                        onChange={(e) => {setConfirmPassword(e.target.value)} }
                        required
                        label="Confirm Password"
                        type="password"
                    />
                    
                    <Button 
                        onClick={handleSubmitRegister}
                        size="large" 
                        variant="contained"
                    > 
                        Register </Button>
                    
                </Form>
            </Right>


            <Left>
                <Title> Bech-cha </Title>
                <Desc> 
                    Lorem ipsum dolor sit amet consectetur
                    Lorem ipsum dolor sit amet consectetur
                    Lorem ipsum dolor sit amet consectetur
                    Best ecommerce site in town with 100+ active users. </Desc>
                <Span> Already have an account? </Span>

                    <SearchButton 
                        onClick={() => navigate("/login")}
                        style={{
                            color: 'white'
                        }}
                        color='info' 
                        variant="outlined"
                    > 
                        Login
                    </SearchButton>
            </Left>                
            </Card>
    </Container>
  )
}

export default RegisterPage