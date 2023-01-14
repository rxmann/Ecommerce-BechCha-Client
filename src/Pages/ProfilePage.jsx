import styled from "styled-components"
import LeftNav from "../Components/ProfilePages/LeftNav"
import RightDisplay from "../Components/ProfilePages/RightDisplay"



const Container = styled.div`
  margin: 50px;
  background-color: #aaaaaa;
  display: flex;
`

const ProfilePage = () => {
  return (
    <Container>
        <LeftNav />
        <RightDisplay />
    </Container>
  )
}

export default ProfilePage