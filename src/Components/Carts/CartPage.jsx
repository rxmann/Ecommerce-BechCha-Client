import styled from "styled-components";
import { useState } from "react";
import Button from '@mui/material/Button';

const Container = styled.div`
    margin: 10px 30px;
`
const Wrapper = styled.div`
    display: flex;
    gap: 20px;
`

const CartWrapper = styled.div`
    flex: 4;
    background-color: white;
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
    width: 100%;
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
    gap: 20px;
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
`

const SummaryWrapper = styled.div`
    flex: 1;
    background-color: white;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 70px;
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
                            <ItemTitle flex={1}> Id </ItemTitle>
                            <ItemTitle flex={2}> Product  </ItemTitle>
                            <ItemTitle flex={1}> Quantity  </ItemTitle>
                            <ItemTitle flex={1}> Price  </ItemTitle>
                            <ItemTitle flex={1}> Sum  </ItemTitle>
                        </CartHeading>

                        <CartItems>
                            <Item flex={1}>
                                <Item > 123123123123213 </Item>
                            </Item>
                            <Item flex={2}>
                               <Item>
                                    <ProductImage src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoNS83B_1ORePE6SzH2BHGKZvgB6zIBIX0KNcdtXF0&s"} />
                                    <Item>Apple</Item>
                               </Item>
                            </Item>
                            <Item flex={1}>
                                <QuantityDiv>
                                    <ButtonQ onClick={() => handleQuantity("dec", 10)}> - </ButtonQ>
                                    {quantity}
                                    <ButtonQ onClick={() => handleQuantity("inc", 10)} > + </ButtonQ>
                                </QuantityDiv>
                            </Item>
                            <Item flex={1}> RS 1200 </Item>
                            <Item flex={1}> RS 1200 </Item>
                        </CartItems>



                        <CartItems>
                            <Item flex={1}>
                                <Item > 123123123123213 </Item>
                            </Item>
                            <Item flex={2}>
                               <Item>
                                    <ProductImage src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoNS83B_1ORePE6SzH2BHGKZvgB6zIBIX0KNcdtXF0&s"} />
                                    <Item>Apple</Item>
                               </Item>
                            </Item>
                            <Item flex={1}>
                                <QuantityDiv>
                                    <ButtonQ onClick={() => handleQuantity("dec", 10)}> - </ButtonQ>
                                    {quantity}
                                    <ButtonQ onClick={() => handleQuantity("inc", 10)} > + </ButtonQ>
                                </QuantityDiv>
                            </Item>
                            <Item flex={1}> RS 1200 </Item>
                            <Item flex={1}> RS 1200 </Item>
                        </CartItems>

                        <CartItems>
                            <Item flex={1}>
                                <Item > 123123123123213 </Item>
                            </Item>
                            <Item flex={2}>
                               <Item>
                                    <ProductImage src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoNS83B_1ORePE6SzH2BHGKZvgB6zIBIX0KNcdtXF0&s"} />
                                    <Item>Apple</Item>
                               </Item>
                            </Item>
                            <Item flex={1}>
                                <QuantityDiv>
                                    <ButtonQ onClick={() => handleQuantity("dec", 10)}> - </ButtonQ>
                                    {quantity}
                                    <ButtonQ onClick={() => handleQuantity("inc", 10)} > + </ButtonQ>
                                </QuantityDiv>
                            </Item>
                            <Item flex={1}> RS 1200 </Item>
                            <Item flex={1}> RS 1200 </Item>
                        </CartItems>
                        
                    </Cart>
                </CartWrapper>



                <SummaryWrapper>
                    <Cart>
                        <Title> Order Summary</Title>
                        <Item>
                            <TotalText> Sub Total </TotalText>
                            <Price > NPR 1200 </Price>
                        </Item>

                        <Item>
                            <TotalText> Delivery </TotalText>
                            <Price > NPR 120 </Price>
                        </Item>
                    </Cart>

                    <Cart>
                        <Item>
                            <Total> Total </Total>
                            <Total> NPR 1200 </Total>
                        </Item>
                        <Button variant="contained"> Checkout </Button>
                    </Cart>
                </SummaryWrapper>
            </Wrapper>
        </Container>
    );
};

export default CartPage;