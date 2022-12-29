import styled from "styled-components"
import { NavLink } from "react-router-dom";

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

  &:hover(NavLink) {
    color: white;
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
      <NavLink to="/" >
        <Button>
          GO BACK
        </Button>
      </NavLink>

    </Container>
  )
}

export default EmptyView