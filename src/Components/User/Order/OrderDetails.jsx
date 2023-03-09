import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components"
import WestIcon from '@mui/icons-material/West';
import { useEffect, useState } from "react";
import { getOneOrderById } from "../../../ApiCalls/ordersApiCalls";
import Fetching from "../EmptyView/Fetching";
import moment from "moment"
import StepProgressBar from "./StepProgressBar";
import OrderedProduct from "./OrderedProduct";
import { Button } from "@mui/material";
import OrderSummary from "./OrderSummary";

const Container = styled.div`
  flex: 5;
  padding: 20px;
  background-color: #f5f7f8;
  display: flex;
  flex-direction: column;
  gap: 10px;
`

const Title = styled.h2`
  color: #aaaaaa;
  
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 20px;
  background-color: #ffffff;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
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
  font-weight: 600;
  font-size: 20px;
`


const OrderStatusWrapper = styled.div`
    display: flex;
    gap: 50px;
`



const OrderDetails = () => {

  const orderId = useParams().id;

  const [order, setOrder] = useState();
  const [Sum, setSum] = useState();

  useEffect(() => {
    const getOrderDetails = async () => {
      const orderDetails = await getOneOrderById(orderId);
      setSum(orderDetails?.products?.reduce((acc, val) => {
        return acc += val.price
      }, 0))    
      setOrder(orderDetails);
    }
    getOrderDetails();
  }, [orderId])





  return (
    <Container>
      {order && order.totalItems > 0 ?
        <>
        <OrderTitleWrapper>
          <Title>Order Details</Title>
          {order.status === "pending" && <Button color="error"> Cancel Order </Button>}
        </OrderTitleWrapper>
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

              <OrderSummary data={order} Sum={Sum}  />


            </OrderStatusWrapper>
          </Wrapper>
        </>

        : <Fetching type="Empty" Message="No orders with such ID" />
      }
    </Container>
  )
}

export default OrderDetails
