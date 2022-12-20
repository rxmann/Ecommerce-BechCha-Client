import styled from "styled-components"
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';

const Container = styled.div`
  margin: 10px 5px;
  max-width: 220px;
  padding: 10px;
  border: 1px solid #ffffff;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;
`

const Image = styled.img`
  overflow: hidden;
  object-fit: center;
  width: 100%;
  height: 100%;
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
      <Wrapper>
        <Image src={data.img} />
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