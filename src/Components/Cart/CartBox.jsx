import styled from "styled-components"
import {data} from "../../data"
import { DeleteOutline } from "@mui/icons-material"


const Container = styled.div`
    margin: 10px 50px;
`

const Cart = styled.div`

`

const Title = styled.h1`

`
const Item = styled.div`

`
const Image = styled.img`

`
const Info = styled.div`

`

const Price = styled.div`

`
const Desc = styled.p`

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
                      <Desc> {item.desc.substring(0, 100)} </Desc>
                      <Price> 1 x NPR {item.price} </Price>
                    </Info>
                </Item>
             ) )}
          </Cart>
          <DeleteOutline />
    </Container>
  )
}

export default CartBox