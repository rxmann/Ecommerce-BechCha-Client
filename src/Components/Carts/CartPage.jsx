import styled from "styled-components";
import { useState } from "react";
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import { useSelector } from "react-redux";


const Container = styled.div`
    
`
const Wrapper = styled.div`
    display: flex;
    gap: 20px;
`

const CartWrapper = styled.div`
    flex: 4;
    background-color: white;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
`

const TitleWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
`

const Title = styled.h2`
    font-weight: 600;
    font-size: 20px;
    color: gray;
`

const Cart = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
`

const CartHeading = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    background-color: #0171b6;
    padding: 10px 20px;
`
const ItemTitle = styled.div`
    flex: ${props => props.flex};
    font-weight: 500;
    font-size: 16px;
    color: white;
`

const CartItems = styled.div`
    display: flex;
    align-items: center;
    padding: 20px;
`

const Item = styled.span`
    flex: ${props => props.flex};
    font-weight: 400;
    font-size: 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 30px;
`

const ProductImage = styled.img`
    width: 100px;
`

const QuantityDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`

const ButtonQ = styled.button`
  cursor: pointer;
  width: 50px;
  height: 50px;
  font-size: 24px;
  display : flex;
  justify-content: center;
  align-items: center;
  border: none;
  background-color: #f5f7f8;
`

const SummaryWrapper = styled.div`
    flex: 1;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 70px;
    background-color: white;
    box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px; 
`

const TotalText = styled.span`
    font-size: 16px;
    color: gray;
    font-weight: 500;
`

const Price = styled.span`
    font-size: 16px;
    font-weight: 500;
`

const Total = styled.h3`
    color: #0171b6;
`



const CartPage = () => {

    const cart = useSelector(state => state.cart);


    const [quantity, setQuantity] = useState(1);

    const handleQuantity = (option, maxQuantity) => {

        if (option === "dec") {
            if (quantity > 1) setQuantity(quantity - 1);
            
        }
        else if (option === "inc") {
            console.log("click")
            if (quantity < maxQuantity) setQuantity(quantity + 1)
        }
    }



    return (
        <Container>
            <Wrapper>
                <CartWrapper>
                    <TitleWrapper>
                        <Title> Shopping Cart </Title>
                        <Title> Items: 4 </Title>
                    </TitleWrapper>
                    <Cart>
                        <CartHeading>
                            <ItemTitle flex={2}> Product  </ItemTitle>
                            <ItemTitle flex={1}> Quantity  </ItemTitle>
                            <ItemTitle flex={1}> Price  </ItemTitle>
                            <ItemTitle flex={1}> Sum  </ItemTitle>
                            <ItemTitle flex={0.3}> Action </ItemTitle>
                        </CartHeading>

                        {cart.products.map((product) => (
                            <CartItems>
                            <Item flex={2}>
                               <Item>
                                    <ProductImage src={`data:image/png;base64, ${product.images[0]}`} />
                                    <Item>{product.title}</Item>
                               </Item>
                            </Item>
                            <Item flex={1}>
                                <QuantityDiv>
                                    <ButtonQ onClick={() => handleQuantity("dec", 10)}> - </ButtonQ>
                                    {product.quantity}
                                    <ButtonQ onClick={() => handleQuantity("inc", 10)} > + </ButtonQ>
                                </QuantityDiv>
                            </Item>
                            <Item flex={1}> {product.price} </Item>
                            <Item flex={1}> {product.quantity * product.price} </Item>
                            <Item flex={0.3}> <Button> <DeleteIcon color={"error"} /> </Button> </Item>
                        </CartItems>
                        ))}

                    </Cart>
                </CartWrapper>



                <SummaryWrapper>
                    <Cart>
                        <Title> Order Summary</Title>
                        <Item>
                            <TotalText> Sub Total </TotalText>
                            <Price > {cart.total} </Price>
                        </Item>

                        <Item>
                            <TotalText> Delivery </TotalText>
                            <Price > 100 </Price>
                        </Item>
                    </Cart>

                    <Cart>
                        <Item>
                            <Total> Total </Total>
                            <Total> NPR {cart.total + 100 }  </Total>
                        </Item>
                        <Button variant="contained"> Checkout </Button>
                    </Cart>
                </SummaryWrapper>
            </Wrapper>
        </Container>
    );
};

export default CartPage;