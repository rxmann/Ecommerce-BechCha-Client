import styled from "styled-components"
import ProfileNav from "../Components/ProfilePages/ProfileNav"
import ProfileDisplay from "../Components/ProfilePages/ProfileDisplay"
import RightDisplay from "../Components/ProfilePages/Details"



const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f5f7f8;

`

const ProfilePage = () => {
  return (
    <Container>
        <ProfileNav />
        <RightDisplay Component={ProfileDisplay}/>
    </Container>
  )
}

export default ProfilePage