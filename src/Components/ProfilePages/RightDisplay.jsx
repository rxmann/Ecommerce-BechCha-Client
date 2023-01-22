import styled from "styled-components"



const Container = styled.div`
  flex: 5;
  background-color: #aaaaaa;
  display: flex;
  align-items: center;
  justify-content: center;
`

const RightDisplay = ({Component}) => {
  return (
    <Container>
      <Component />
    </Container>
  )
}

export default RightDisplay