import styled from "styled-components"
import LeftNav from "../Components/ProfilePages/LeftNav"
import ProfileDisplay from "../Components/ProfilePages/ProfileDisplay"
import RightDisplay from "../Components/ProfilePages/RightDisplay"



const Container = styled.div`
  margin: 50px;
  display: flex;
`

const ProfilePage = () => {
  return (
    <Container>
        <LeftNav />
        <RightDisplay Component={ProfileDisplay}/>
    </Container>
  )
}

export default ProfilePage