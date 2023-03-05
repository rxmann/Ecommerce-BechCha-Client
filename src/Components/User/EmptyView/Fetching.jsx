import ReactLoading from 'react-loading';
import styled from "styled-components"

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`

const Fetching = ({ type, color }) => {
  return (
    <Container>
      <ReactLoading type={type} color={color} />
    </Container>
  )
}

export default Fetching