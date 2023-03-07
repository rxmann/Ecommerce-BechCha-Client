import { useParams } from "react-router-dom";
import styled from "styled-components"
import WestIcon from '@mui/icons-material/West';
import { useEffect, useState } from "react";
import { getOneOrderById } from "../../../ApiCalls/ordersApiCalls";

const Container = styled.div`
  background-color: #ffffff;
  width: 100%;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  gap: 10px;
`

const Back = styled(WestIcon)`
  border-radius: 50%; 
  background-color: "#f5f7f8"; 
  padding: 10px;
  cursor: pointer;
  &:hover {
    background-color: #0171b6;
    color: white;
  }
`

const Wrapper = styled.div`

`
const OrderDetails = () => {
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
      <Back onClick={() => window.history.back()}/>
      <Wrapper>
        <OrderTitleWrapper>
          <OrderTitle> </OrderTitle>
          <OrderQuantity>  </OrderQuantity>
        </OrderTitleWrapper>

        <OrderUserWrapper> 
          <UserProfile>  </UserProfile>
        </OrderUserWrapper>

        <OrderProductsList>
           <OrderItem>  </OrderItem>
           <OrderItem>  </OrderItem>
           <OrderItem>  </OrderItem>
        </OrderProductsList>


        <OrderStatusWrapper>
          <OrderStatus>  </OrderStatus>
          <CancelOrder>  </CancelOrder>
        </OrderStatusWrapper>
      </Wrapper>
    </Container>
  )
}

export default OrderDetails
