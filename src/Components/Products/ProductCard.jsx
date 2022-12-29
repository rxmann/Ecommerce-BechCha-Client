import styled from "styled-components"
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  max-width: 230px;
  padding: 10px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  border-radius: 2px;
  margin: 20px 10px;

  &:hover {
    transform: translate(2);
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  }

`

const Image = styled.img`
  background-color: #f5f7f8;
  overflow: hidden;
  object-fit: contain;
  width: 100%;
  height: 100%;
  cursor: pointer;
  transition: transform .3s ease;
  transform: scale(0.8);
  border-radius: 2px;

  &:hover {
    transform: scale(1);
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

const AddBtn = styled(AddBoxOutlinedIcon)`
  transition: box-shadow 150ms ease-out;
  &:hover {
		box-shadow: 0 0 0 8px rgba($white, 0.5);
    transform: scale(1.1, 1.1);
	}
`


const ProductCard = ({ data }) => {

  const navigate = useNavigate();

  return (
    <Container >
        <Image onClick={() => navigate("/product/:id")} src={data.img} />
      <Wrapper>
        <Title> {data.title} </Title>
      </Wrapper>

      <Info>
        <Price> RS {data.price} </Price>
        <AddBtn
          sx= {{cursor: 'pointer'}}
        fontSize="medium"  color="primary"/>
      </Info>

    </Container>
  )
}

export default ProductCard