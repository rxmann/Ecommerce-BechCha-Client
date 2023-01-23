import styled from "styled-components"



const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

const Details = ({Component}) => {
  return (
    <Container>
      <Component />
    </Container>
  )
}

export default Details