import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components"
import WestIcon from '@mui/icons-material/West';
import { useEffect, useState } from "react";
import { getOneOrderById } from "../../../ApiCalls/ordersApiCalls";
import Fetching from "../EmptyView/Fetching";
import moment from "moment"
import StepProgressBar from "./StepProgressBar";
import CartItem from "../Carts/CartItem";

const Container = styled.div`
  background-color: #ffffff;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
  display: flex;
  flex-direction: column;
  padding: 50px;
  gap: 10px;
  min-height: 40vh;
`

const Title = styled.h2`
  margin-top: 20px;
  color: gray;
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
  gap: 20px;
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
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

const OrderStatus = styled.div`

`

const CancelOrder = styled.div`

`


const OrderDetails = () => {
  
  const navigate = useNavigate();
  const orderId = useParams().id;

  const [order, setOrder] = useState();

  useEffect(() => {
    const getOrderDetails = async () => {
      const orderDetails = await getOneOrderById(orderId);
      setOrder(orderDetails);
    }
    getOrderDetails();
  }, [orderId])

  return (
    <Container>
      <Back onClick={()=> navigate("/profile/orders/me")} />
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

            
            <OrderStatusWrapper>
              <StepProgressBar status={order.status} />
            </OrderStatusWrapper>

            <CartItem />


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
