import styled from "styled-components"
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';

const Container = styled.div`
  margin: 10px 5px;
  min-width: 220px;
  max-width: 220px;
  padding: 10px;
  border: 1px solid #ffffff;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;

  &:hover {
    border: 1px solid lightgray;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  }

`

const Image = styled.img`
  overflow: hidden;
  object-fit: contain;
  width: 100%;
  height: 100%;
  cursor: pointer;
  transition: transform .3s ease;

  &:hover {
    transform: scale(1.06);
  }
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`


const Title = styled.h2`
  font-size: 14px;
  font-weight: 500;
  margin: 10px;
`


const Info = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Price = styled.span`
  font-size: 18px;
  font-weight: 600;
  color:  #0171b6;
  margin: 10px;
`




const ProductCard = ({ data }) => {
  return (
    <Container >
        <Image src={data.img} />
      <Wrapper>
        <Title> {data.title} </Title>
      </Wrapper>
      <Info>
        <Price> RS {data.price} </Price>
        <AddBoxOutlinedIcon 
          sx= {{cursor: 'pointer'}}
        fontSize="medium"  color="primary"/>
      </Info>
    </Container>
  )
}

export default ProductCard