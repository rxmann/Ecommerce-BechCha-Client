import styled from "styled-components"
import ProfileDisplay from "../Components/ProfilePages/ProfileDisplay"
import Orders from "../Components/ProfilePages/Orders"
import Account from "../Components/ProfilePages/Account"
import Details from "../Components/ProfilePages/Details"
import { useState } from "react"
import ProfileNavItem from "../Components/ProfilePages/ProfileNavItem"
import { useEffect } from "react"



const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f5f7f8;

`

const Wrapper = styled.div`
  margin: 0px 50px;
  height: 60px;
  display: flex;
`

const ProfilePage = () => {

  const titles = [{
    id: "profile",
    title: "Profile",
    component: ProfileDisplay
  }, {
    id: "order",
    title: "Order",
    component: Orders
  }, {
    id: "account",
    title: "Account"
  }];

  const [active, setActive] = useState("profile")

  return (
    <Container>
      <Wrapper>

        {titles.map((each) => (
          <ProfileNavItem
            key={each.id}
            id={each.id}
            title={each.title}
            active={active === each.id}
            setActive={setActive}
          />
        ))}
      </Wrapper>
      <Details componentName={active}/>
    </Container>
  )
}

export default ProfilePage