import styled from "styled-components"
import ProfileNav from "../Components/ProfilePages/ProfileNavItem"
import ProfileDisplay from "../Components/ProfilePages/ProfileDisplay"
import Orders from "../Components/ProfilePages/Orders"
import Account from "../Components/ProfilePages/Account"
import RightDisplay from "../Components/ProfilePages/Details"
import { useState } from "react"
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
  const [component, setComponent] = useState(ProfileDisplay)

  useEffect(() => {
    switch(active) {
      case "profile":
        setComponent(ProfileDisplay)
      case "orders":
        setComponent(Orders)
      case "account":
        setComponent(Account)
    }
    console.log(active);
  }, [active])



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
      <RightDisplay Component={component}

        />
    </Container>
  )
}

export default ProfilePage