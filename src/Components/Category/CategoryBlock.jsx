import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

const Container = styled.div`
  padding: 10px 20px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 10px 0px;
  padding: 20px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  border-radius: 10px;

  width: 200px;
  height: 120px;

  &:hover {
    transition: transform .2s ease-in-out;
    transform: scale(1.1, 1.1);
  }
`

const Button = styled.button`
  border: none;
  border-radius: 2px;
  background-color: #ffffff;
  padding: 10px;
  font-size: 16px;
  cursor: pointer;
  z-index: -1;

  position: absolute;
  top: calc(50%);
  left: calc(50% - 50px);

  &:hover {
    transform: scale(1.06, 1.06);
    background-color: #0171b6;
    color: white;
  }
`

const Wrapper = styled.div`
  position: relative;
  overflow: hidden;
  background: url(${props => props.img}) center;
  background-size: cover;

  width: 100%;
  height: 100%;


  &:hover ${Button} {
    transition: transform .2s ease;
    z-index: 1;
  }
`

const Name = styled.h3`
  flex: 1;
  display: table;
  font-weight: 800;
  padding: 10px;
`


const OneCategory = ( {category} ) => {

  const navigate = useNavigate();

  return (
    <Container >
        <Name> {category.title} </Name>
        <Wrapper img={category.img} >
          <Button onClick={()=>navigate("/products/1")}> Shop Now </Button>
        </Wrapper>
    </Container>
  )
}

export default OneCategory