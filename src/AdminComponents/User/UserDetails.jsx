import styled from "styled-components"
import ProfileDisplay from "../../Components/ProfilePages/ProfileDisplay"
import OrderWidget from "../Widgets/OrderWidget"

const Container = styled.div`
    flex: 5;
    padding: 20px;
    background-color: #f5f7f8;
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 20px;
`

const Title = styled.h2`
     font-size: 24px;
    font-weight: 500;
    color: gray;
`

const User = styled.div`
    display: flex;
    align-items: center;
`


const UserDetails = () => {
  return (
    <Container> 
        <Title> User Profile </Title>
        <User>
           <ProfileDisplay />
        </User>
        <OrderWidget />
    </Container>
  )
}

export default UserDetails