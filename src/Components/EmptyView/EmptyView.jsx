import styled from "styled-components"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 100px;
`
const Wrapper = styled.h1`

`
const Image = styled.img`
  height: 30vh;
`

const Button = styled.button`
  padding: 10px 20px;
  border: none;
  font-size: 24px;
  background: transparent;
  &:hover {
    background-color: #0171b6;
    color: white;
    cursor: pointer;
  }
`

const EmptyView = () => {
  

  const img = "https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-5529.jpg?w=2000";

  return (
    <Container>
      <Wrapper>
        Error ! This page does not exist
      </Wrapper>
      <Image src={img} />
        <Button onClick={ () => window.history.back() }>
          GO BACK
        </Button>
    </Container>
  )
}

export default EmptyView