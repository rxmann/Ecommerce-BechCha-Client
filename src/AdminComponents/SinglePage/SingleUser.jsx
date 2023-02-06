import styled from "styled-components"
import ProfileDisplay from "../../Components/ProfilePages/ProfileDisplay"

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
    font-weight: 600;
    font-size: 18px;
    color: gray;
`

const User = styled.div`
    display: flex;
    align-items: center;
`


const SingleUser = () => {
  return (
    <Container> 
        <Title> User Profile </Title>
        <User>
           <ProfileDisplay />
        </User>
    </Container>
  )
}

export default SingleUser