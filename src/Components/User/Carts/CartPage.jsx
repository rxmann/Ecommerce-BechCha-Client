import styled from "styled-components";
import Button from '@mui/material/Button';
import { useDispatch, useSelector } from "react-redux";
import CartItem from "./CartItem";
import { useEffect } from "react";
import { emptyMyCart, reloadCart } from "../../../ApiCalls/apiCalls";
import Fetching from "../EmptyView/Fetching";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
    display: flex;
    gap: 20px;
    min-height: 400px;
    display: flex;
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

const Item = styled.span`
    flex: ${props => props.flex};
    font-weight: 400;
    font-size: 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;
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
    display: flex;
    align-items: center;
    justify-content: center;
`

const SummaryWrapper = styled.div`
    flex: 1;
    padding: 20px;
    max-height: 500px;
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

    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        reloadCart(dispatch);
    }, [dispatch])

    const { isLoading, cart: userCart, totalQuantity = 0, totalAmount } = useSelector(state => state.usercart);

    useEffect(() => {
        const getCartIfNotInState = async () => {
            if (userCart?.cart?.length === 0) {
                reloadCart(dispatch);
            }
        }
        getCartIfNotInState()
    }, [userCart, dispatch])


    const TOTALPAYABLE = totalAmount + (totalQuantity > 0 && 200);


    return (
        <Container>
            {!isLoading ?
                    (<CartWrapper>
                        <TitleWrapper>
                            <Title> Shopping Cart </Title>
                            <Title> Items: {totalQuantity} </Title>
                        </TitleWrapper>

                        {userCart && userCart.length > 0 ?
                        <Cart>
                            <CartHeading>
                                <ItemTitle flex={2}> Product  </ItemTitle>
                                <ItemTitle flex={2}> Quantity  </ItemTitle>
                                <ItemTitle flex={1}> Price  </ItemTitle>
                                <ItemTitle flex={1}> Sum  </ItemTitle>
                                <ItemTitle flex={0.3}> Action </ItemTitle>
                            </CartHeading>

                            {userCart?.map((item) => (
                                <CartItem product={item.product} key={item.product._id} maxQuantity={item.maxQuantity} quantity={item.quantity} />
                            ))

                            }
                        </Cart>
                    :  <Fetching type="Empty" Message={"No items in cart! Please browse for products"} />   
                    }
                    </CartWrapper>
                    ) :
                    <Fetching type="spokes" />
            }
            {userCart && totalQuantity >= 1 &&

                <SummaryWrapper>
                    <Cart>
                        <Title> Order Summary</Title>
                        <Item>
                            <TotalText> Sub Total </TotalText>
                            <Price > {totalAmount} </Price>
                        </Item>

                        {userCart?.totalQuantity > 0 &&
                            <Item>
                                <TotalText> Delivery  </TotalText>
                                <Price > {totalQuantity > 0 && 200} </Price>
                            </Item>
                        }

                    </Cart>

                    <Cart>
                        <Item>
                            <Total> Total </Total>
                            <Total> NPR {TOTALPAYABLE}  </Total>
                        </Item>

                        <Button color={"error"} onClick={() => emptyMyCart(dispatch)} >
                            Empty Cart
                        </Button>
                        <Button
                            // onClick={() => makeAnOrder(dispatch, userCart, TOTALPAYABLE)}
                            onClick={() => navigate("/checkout-form/shipping")}
                            variant="contained"> Checkout </Button>
                    </Cart>
                </SummaryWrapper>
            }
        </Container>
    );
};

export default CartPage;