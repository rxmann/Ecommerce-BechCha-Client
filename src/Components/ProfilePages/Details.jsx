import { useEffect } from "react"
import { useState } from "react"
import styled from "styled-components"
import Account from "./Account"
import Orders from "./Orders"
import ProfileDisplay from "./ProfileDisplay"



const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

const Details = ({active, setActive}) => {

  const components = {
    'profile': <ProfileDisplay />,
    'order': <Orders />,
    'account': <Account />
  }


  return (
    <Container>
      {components[active]}
    </Container>
  )
}

export default Details