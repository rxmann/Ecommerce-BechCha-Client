import styled from "styled-components"
import {data} from "../../data"
import { DeleteOutline } from "@mui/icons-material"


const Container = styled.div`
    background-color: #f5f7f8;
    position: absolute;
    right: 120px;
    top: 50px;
`

const Cart = styled.div`
   padding: 30px;
`

const Title = styled.h1`

`
const Item = styled.div`

`
const Image = styled.img`
    width: 50px;
`
const Info = styled.div`

`

const Price = styled.div`

`
const Desc = styled.p`

`
const DeleteBtn = styled.div`
  color: red;
`

const Total = styled.div`

`
const Checkout = styled.button`

`

const Span = styled.span`

`



const CartBox = () => {

  return (
    <Container>
          <Cart>
            <Title>
                My Cart
            </Title>
            {data?.map( (item) => ( 
                <Item key={item.id}>
                    <Image src={item.img}/>
                    <Info>
                      <Title> {item.title} </Title>
                      <Desc> {item.desc?.substring(0, 100)} </Desc>
                      <Price> 1 x NPR {item.price} </Price>
                    </Info>

                    <DeleteBtn>
                      <DeleteOutline />
                    </DeleteBtn>
                </Item>
             ) )}

             <Total>
              <Span> SUBTOTAL </Span>
              <Span>NPR 500  </Span>
             </Total>

             <Checkout> CHECKOUT </Checkout>
             <Span>Empty Cart</Span>
          </Cart>
          
    </Container>
  )
}

export default CartBox