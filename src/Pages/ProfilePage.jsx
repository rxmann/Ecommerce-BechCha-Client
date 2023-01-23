import styled from "styled-components"
import ProfileNav from "../Components/ProfilePages/ProfileNav"
import ProfileDisplay from "../Components/ProfilePages/ProfileDisplay"
import RightDisplay from "../Components/ProfilePages/Details"
import { useState } from "react"



const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f5f7f8;

`

const Wrapper = styled.div`
  display: flex;
`

const ProfilePage = () => {

  const titles = [{
    id: "profile",
    title: "Profile"
  }, {
    id: "order",
    title: "Order"
  }, {
    id: "account",
    title: "Account"
  }];

  const [active, setActive] = useState("profile")

  return (
    <Container>
      <Wrapper>

        {titles.map((each) => (
          <ProfileNav
            key={each.id}
            id={each.id}
            title={each.title}
            active={active === each.id}
            setActive={setActive}
          />
        ))}
      </Wrapper>
      <RightDisplay Component={ProfileDisplay} />
    </Container>
  )
}

export default ProfilePage