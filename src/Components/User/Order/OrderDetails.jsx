import { useParams } from "react-router-dom";
import styled from "styled-components"
import { useEffect, useState } from "react";
import { cancelThisOrder, getOneOrderById } from "../../../ApiCalls/ordersApiCalls";
import Fetching from "../EmptyView/Fetching";
import moment from "moment"
import StepProgressBar from "./StepProgressBar";
import OrderedProduct from "./OrderedProduct";
import { Button } from "@mui/material";
import OrderSummary from "./OrderSummary";
import AdminOrderControls from "./AdminOrderControls";

const Container = styled.div`
  flex: 5;
  display: flex;
  flex-direction: column;
  gap: 10px;
  background-color: #ffffff;
  padding: 20px;
`

const Title = styled.h2`
  color: #aaaaaa;
  
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
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
    gap: 10px;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
`



const OrderDetails = ({ type }) => {

  const orderId = useParams().id;

  const [order, setOrder] = useState();
  const [Sum, setSum] = useState();

  useEffect(() => {
    const getOrderDetails = async () => {
      const orderDetails = await getOneOrderById(orderId);
      setSum(orderDetails?.products?.reduce((acc, val) => {
        return acc += val.price * val.quantity
      }, 0))
      setOrder(orderDetails);
    }
    getOrderDetails();
  }, [orderId])



  return (
    <Container>
      {order ?
        <>
          <OrderTitleWrapper>
            <Title>Order Details</Title>
            {order.status === "pending" && <Button color="error" onClick={() => cancelThisOrder(order._id)}> Cancel Order </Button>}
          </OrderTitleWrapper>
          {type === "admin" && <AdminOrderControls data={order} />}
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
          </Wrapper>

          {/* { Order Items and Summary } */}
          <OrderStatusWrapper>


            <OrderedProduct data={order} />

            <OrderSummary data={order} Sum={Sum} />


          </OrderStatusWrapper>

        </>

        : <Fetching type="Empty" Message="No orders with such ID" />
      }
    </Container>
  )
}

export default OrderDetails
