import { useNavigate } from "react-router-dom"
import styled from "styled-components"

const Container = styled.div`
  padding: 10px;
  background-color: #ffffff;
  display: flex;
  align-items: center;
  border-radius: 8px;
  box-shadow: rgba(116, 153, 255, 0.548) 0px 5px 15px 0px;
  height: 100px;
  width: 350px;
  overflow: hidden;

`
const ImageContainer = styled.div`
  flex: 1;
  width: 100%;
  height: 90%;
  overflow: hidden;
  padding: 10px;
`

const Image = styled.img`
    width: 90%;
    height: 90%;
  object-fit: contain;
  cursor: pointer;
  transition: transform .3s ease;
  transform: scale(0.8);

  &:hover {
    transform: scale(1);
  }
`

const Wrapper = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`


const Title = styled.h3`
  font-weight: 400;
`

const Price = styled.span`
  font-size: 18px;
  font-weight: 600;
  color:  #0171b6;
`


const CompareCard = ({data}) => {

    const navigate = useNavigate();

  return (
    <Container >
    <ImageContainer>
    <Image onClick={() => navigate(`/product/${data._id}`)} src={data.images[0]?.url} />
    </ImageContainer>

    <Wrapper>
      <Title> {data.title} </Title>
      <Price>  RS {data.price} </Price>
    </Wrapper>
  </Container>
  )
}

export default CompareCard