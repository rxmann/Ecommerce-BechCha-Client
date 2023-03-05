import ReactLoading from 'react-loading';
import styled from "styled-components"

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`


const LoadingScreen = styled.div`
  height: 100%;
`

const Fetching = ({ type, Message }) => {
  return (
    <Container>
      { type === "Empty" ?
      <LoadingScreen>
          {Message}
      </LoadingScreen>
      :
      <ReactLoading type={type} color={"#0171b6"} />  
    }
    </Container>
  )
}

export default Fetching