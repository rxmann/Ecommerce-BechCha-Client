import styled from "styled-components"



const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

const Details = ({componentName}) => {

  switch(componentName) {
    case "profile":
      setComponent(ProfileDisplay)
    case "order":
      setComponent(Orders)
    case "account":
      setComponent(Account)
  }

  return (
    <Container>
      
    </Container>
  )
}

export default Details