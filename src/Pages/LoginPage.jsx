import styled from "styled-components"
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";

const Container = styled.div`
    height: 100vh;
    background-color: #4893c2;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Card = styled.div`
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

const LoginPage = () => {
  return (
    <Container>
            <Card>
                <Left>
                    <Title> Bech-cha </Title>
                    <Desc> 
                        Lorem ipsum dolor sit amet consectetur
                        Lorem ipsum dolor sit amet consectetur
                        Lorem ipsum dolor sit amet consectetur
                        Best ecommerce site in town with 100+ active users. </Desc>
                    <Span> Don't have an account yet? </Span>
                    
                    <Link to="/register" >
                        <SearchButton 
                            style={{
                                color: 'white'
                            }}
                            color='info' 
                            variant="outlined"
                            > 
                            Register 
                        </SearchButton>
                    </Link>
                </Left>


                <Right>
                    <H1> Login </H1>
                    <Form>
                        <TextField
                            id="outlined-password-input"
                            label="Email"
                            type="Email"
                            autoComplete="current-password"
                        />
                        <TextField
                            id="outlined-password-input"
                            label="Password"
                            type="password"
                            autoComplete="current-password"
                        />
                        <Button size="large" variant="contained"> Login </Button>

                    </Form>
                </Right>
            </Card>
    </Container>
  )
}

export default LoginPage