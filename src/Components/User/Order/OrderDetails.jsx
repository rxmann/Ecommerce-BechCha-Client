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

const Container = styled.div`
  background-color: #ffffff;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
  display: flex;
  flex-direction: column;
  padding: 10px 30px;
  gap: 10px;
`

const Title = styled.h2`
  color: #aaaaaa;
`

const Back = styled(WestIcon)`
  border-radius: 50%; 
  padding: 10px;
  cursor: pointer;
  background-color: #f5f7f8;
  &:hover {
    background-color: #0171b6;
    color: white;
  }
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 80px;
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
const SummaryWrapper = styled.div`
    flex: 1;
    padding: 10px;
    display: flex;
    flex-direction: column;
    gap: 30px;
`

const UserInfo = styled.div`

`

const BillingProfile = styled.div`

`

const Item = styled.div`
  display: flex;
`

const SummaryName = styled.span`
    flex: 1;
    color: gray;
    font-weight: 500;
`

const SummaryValue = styled.span`
    flex: 1;
    font-size:${props => props.size ? props.size : "16px"};
    color: ${props => props.color && props.color};
    font-weight: ${props => props.weight ? props.weight : 400};
`
const Titled = styled.h3`
  color: #aaaaaa;
`

const TotalPayableDiv = styled.div`
  margin: 20px 0px;
`


const OrderDetails = () => {

  const navigate = useNavigate();
  const orderId = useParams().id;

  const [order, setOrder] = useState();
  const [Sum, setSum] = useState();

  useEffect(() => {
    const getOrderDetails = async () => {
      const orderDetails = await getOneOrderById(orderId);
      setSum(orderDetails.products.reduce((acc, val) => {
        return acc += val.price
      }, 0))
      setOrder(orderDetails);
    }
    getOrderDetails();
  }, [orderId])





  return (
    <Container>
      <Back onClick={() => navigate("/profile/orders/me")} />
      {order ?
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



              <SummaryWrapper>
                <Titled> Order Summary</Titled>
               <UserInfo>
               <Item>
                  <SummaryName> Shipping Address  </SummaryName>
                  <SummaryValue > Mandikhatar, Kathmandu </SummaryValue>
                </Item>
                <Item>
                  <SummaryName> Blling Address  </SummaryName>
                  <SummaryValue > Mandikhatar, Kathmandu </SummaryValue>
                </Item>
                <Item>
                  <SummaryName> Recipient  </SummaryName>
                  <SummaryValue > {order.user.username} </SummaryValue>
                </Item>
                <Item>
                  <SummaryName> Contacts  </SummaryName>
                  <SummaryValue > {order.user.contacts} </SummaryValue>
                </Item>
               </UserInfo>


                <BillingProfile>
                <Item>
                  <SummaryName> Sub Total </SummaryName>
                  <SummaryValue > RS {Sum} </SummaryValue>
                </Item>
                <Item>
                  <SummaryName> Delivery  </SummaryName>
                  <SummaryValue > RS 200 </SummaryValue>
                </Item>
               <TotalPayableDiv>
               <Item>
                  <SummaryValue color={"#0171b6"} size={"20px"} weight={"800"} > Total Payable </SummaryValue>
                  <SummaryValue color={"#0171b6"} size={"20px"} weight={"800"}> NPR {order.payable} </SummaryValue>
                </Item>
               </TotalPayableDiv>
                </BillingProfile>
              </SummaryWrapper>
            </OrderStatusWrapper>
          </Wrapper>
        </>

        : <Fetching type="spokes" />
      }
    </Container>
  )
}

export default OrderDetails
