import styled from "styled-components"
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const Container = styled.div`
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
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
        linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
        url("https://images.pexels.com/photos/50987/money-card-business-credit-card-50987.jpeg?auto=compress&cs=tinysrgb&w=400") center;
    background-size: cover;
    display: flex;
    padding: 50px;
    flex-direction: column;
    justify-content: space-around;
    gap: 30px;
    color: white;
`

const Title = styled.div`
    font-size: 60px;
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

    const handleSubmitRegister = () => {
        
    }
  return (
    <Container>
            <Card>

            <Right>
                <H1> Register </H1>
                <Form onSubmit={handleSubmitRegister}>
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