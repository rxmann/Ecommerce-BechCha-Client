import ReactLoading from 'react-loading';
import styled from "styled-components"

const Container = styled.div`
  width: 100%;
  min-height: 30vh;
  font-weight: 400;
  font-size: 20px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`


const LoadingScreen = styled.span`
  width: 100%;
  min-height: 30vh;
  font-weight: 500;
  font-size: 18px;
  background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Fetching = ({ type, Message }) => {
  return (
    <Container>
      {type === "Empty" ?
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