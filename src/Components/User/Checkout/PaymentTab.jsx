import { Button } from "@mui/material";
import styled from "styled-components"
import { makeAnOrder, sendInvoice } from "../../../ApiCalls/ordersApiCalls";
import { useDispatch, useSelector } from "react-redux"
import ReactDOMServer from 'react-dom/server';
import { useNavigate } from "react-router-dom";
import InvoicePage from "./InvoicePage";




const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

const PaymentTab = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { cart: userCart, totalAmount } = useSelector(state => state.usercart);

  return (
    <Container>
      <Button
        fullWidth
        color="info"
        variant={"contained"}
        onClick={async() => {
          const order = await makeAnOrder(dispatch, userCart, totalAmount)
          const invoice = ReactDOMServer.renderToString(<InvoicePage order={order._id} />)
          await sendInvoice(invoice)
          navigate("/profile/orders/me")
        }}
      >
        Checkout {totalAmount}
      </Button>
    </Container>
  )
}

export default PaymentTab