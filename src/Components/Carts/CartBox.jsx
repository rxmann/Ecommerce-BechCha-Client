import styled from "styled-components"
import {data} from "../../data"
import { DeleteOutline } from "@mui/icons-material"
import Button from '@mui/material/Button';


const Container = styled.div`
    background-color: #f5f7f8;
    position: absolute;
    right: 120px;
    top: 50px;
    z-index: 999;
    -webkit-box-shadow: 1px 1px 7px -5px #0171b6;
   box-shadow: 1px 1px 7px -5px #0171b6;

   width: 460px;
`

const Cart = styled.div`
   padding: 20px;
`

const Title = styled.h1`
  margin-bottom: 30px;
  color: #0171b6;
  font-weight: 600;
  font-size: 20px;
`
const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 10px;
  height: 100px;
  width: 100%;
`
const ImageContainer = styled.div`
    height: 60px;
    width: 80px;
    cursor: pointer;
    overflow: hidden;
`

const Image = styled.img`
    height: 100%;
    width: 100%;
    object-fit: contain;
`
const Info = styled.div`
  padding: 10px;
  width: 100%;
`

const Name = styled.h1`
  font-size: 16px;
  font-weight: 400;
  margin-bottom: 10px;
  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`

const Price = styled.h1`
  font-size: 14px;
  font-weight: 500;
`

const Desc = styled.p`
  color: #aaaaaa;
  margin-bottom: 10px;
  font-size: 14px;
`

const DelBtn = styled(Button)`
  display: flex;
  justify-content: flex-end;
  height: 100%;
`

const Total = styled.div`
  display: flex;
  justify-content: center;
  font-weight: 400;
  font-size: 14px;
  padding: 10px 0px;
  gap: 20px;
`

const Span = styled.span`
  color: green;
  font-size: 14px;
`


const Actions = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 5px;
`



const CartBox = () => {
  const pata = [data[0], data[1]];
  return (
    <Container>
          <Cart>
            <Title>
                My Cart
            </Title>
            {pata?.map( (item) => ( 
                <Item key={item.id}>
                    <ImageContainer>
                      <Image src={item.img} />
                    </ImageContainer> 
                    <Info>
                      <Name> {item.title} </Name>
                      <Desc> {item.desc?.substring(0, 50)} </Desc>
                      <Price> 1 x NPR {item.price} </Price>
                    </Info>


                    <DelBtn  size="small" variant="text" color="error">
                      <DeleteOutline  />
                    </DelBtn>
                </Item>
             ) )}

             <Total>
              <Span> SUBTOTAL </Span>
              <Span>NPR 500  </Span>
             </Total>

              <Actions>
                <Button  color="error" size="small" variant="text"> Empty Cart </Button>
                 <Button size="small" variant="contained"> Checkout </Button>
              </Actions>
          </Cart>
          
    </Container>
  )
}

export default CartBox