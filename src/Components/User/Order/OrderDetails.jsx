import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components"
import WestIcon from '@mui/icons-material/West';
import { useEffect, useState } from "react";
import { getOneOrderById } from "../../../ApiCalls/ordersApiCalls";
import Fetching from "../EmptyView/Fetching";
import moment from "moment"
import StepProgressBar from "./StepProgressBar";
import OrderedProduct from "./OrderedProduct";

const Container = styled.div`
  background-color: #ffffff;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
  display: flex;
  flex-direction: column;
  padding: 50px;
  gap: 10px;
  min-height: 40vh;
`

const Title = styled.h3`
  color: #aaaaaa;
`

const Back = styled(WestIcon)`
  border-radius: 50%; 
  padding: 10px;
  cursor: pointer;
  &:hover {
    background-color: #0171b6;
    color: white;
  }
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`

const OrderTitleWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
`

const OrderTitles = styled.span`
  display: flex;
  flex-direction: column;
`

const OrderTitle = styled.span`
  font-size: 12px;
`


const OrderTotalAmount = styled.span`
  font-weight: 500;
`


const OrderUserWrapper = styled.div`

`


const UserProfile = styled.div`

`



const OrderProductsList = styled.div`

`

const OrderItem = styled.div`

`

const OrderStatusWrapper = styled.div`
    display: flex;
`

const OrderStatus = styled.div`

`

const CancelOrder = styled.div`

`



const SummaryWrapper = styled.div`
    flex: 1;
    padding: 10px;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
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

const Item = styled.div`

`


const OrderDetails = () => {

  const navigate = useNavigate();
  const orderId = useParams().id;

  const [order, setOrder] = useState();
  let Sum;

  useEffect(() => {
    const getOrderDetails = async () => {
      const orderDetails = await getOneOrderById(orderId);
      Sum = orderDetails.products.reduce((acc, val) => {
        return acc += val.price
      }, 0)
      setOrder(orderDetails);
    }
    getOrderDetails();
  }, [orderId])





  return (
    <Container>
      <Back onClick={() => navigate("/profile/orders/me")} />
      {order ?
        <>
          <Title>Order Details</Title>
          <Wrapper>
            <OrderTitleWrapper>
              <OrderTitles>
                <OrderTitle> Order Id: #{order._id} </OrderTitle>
                <OrderTitle> Placed on: {moment(order.createdAt).format("MMM DD, YYYY")} </OrderTitle>
              </OrderTitles>
              <OrderTotalAmount> Total: NPR {order.payable} </OrderTotalAmount>
            </OrderTitleWrapper>


            {/* progress bar */}
            <StepProgressBar status={order.status} />


            {/* { Order Items and Summary } */}
            <OrderStatusWrapper>
              
              <OrderedProduct data={order} />

              <SummaryWrapper>
                <Title> Order Summary</Title>
                <Item>
                  <TotalText> Sub Total </TotalText>
                  <Price > {Sum} </Price>
                </Item>
                <Item>
                  <TotalText> Delivery  </TotalText>
                  <Price > 200 </Price>
                </Item>
                <Item>
                  <Total> Total </Total>
                  <Total> NPR {order.payable}  </Total>
                </Item>
              </SummaryWrapper>
            </OrderStatusWrapper>





            <OrderUserWrapper>
              <UserProfile>  </UserProfile>
            </OrderUserWrapper>

            <OrderProductsList>
              <OrderItem>  </OrderItem>
              <OrderItem>  </OrderItem>
              <OrderItem>  </OrderItem>
            </OrderProductsList>



          </Wrapper>
        </>

        : <Fetching type="spokes" />
      }
    </Container>
  )
}

export default OrderDetails
