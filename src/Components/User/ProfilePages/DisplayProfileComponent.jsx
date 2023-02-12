import styled from "styled-components"
import Account from "./Account"
import Orders from "./Orders"
import ProfileDisplay from "./ProfileDisplay"



const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px 50px;
`

const Details = ({active}) => {

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