import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'


const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`


const Button = styled.button`
  flex: 1;
  border: none;
  border-radius: 2px;
  background-color: #ffffff;
  padding: 10px;
  font-size: 14px;
  cursor: pointer;
  opacity: 0;

  position: absolute;
  top: calc(20%);
  left: calc(50% - 50px);

  &:hover {
    transform: scale(1.06, 1.06);
    background-color: #0171b6;
    color: white;
  }
`
const Name = styled.h3`
  font-size: 14px;
  flex: 9;
  color: #0171b6;
  font-weight: 600;
`


const Container = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 20px;
  padding: 10px 20px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  border-radius: 10px;
  position: relative;
  background-color: #ffffff;

  width: 250px;
  height: 50px;

  &:hover {
    transition: transform .2s ease-in-out;
    transform: scale(1.1, 1.1);

  }

  &:hover ${Button} {
    opacity: 100;
    transition: transform .2s ease;
  }
  &:hover ${Name} {
    opacity: 0;
  }
`



const Image = styled.img`
  flex: 2;
  width: 100%;
  overflow: hidden;
  background-size: cover;
`


const OneCategory = ({ category }) => {

  const navigate = useNavigate();
  // const binaryString = Array.from(new Uint8Array(category.display), byte => String.fromCharCode(byte)).join("");
  // const theImage = btoa(binaryString);
  // console.log(category.display)

  

  return (
    <Container >
      <Wrapper >
        <Image src={`data:image/png;base64, ${btoa(category.display)}`} />
        <Name> {category.name} </Name>
      </Wrapper>
      <Button onClick={() => navigate(`/products/${category._id}`)}> SHOP NOW </Button>
    </Container>
  )
}

export default OneCategory