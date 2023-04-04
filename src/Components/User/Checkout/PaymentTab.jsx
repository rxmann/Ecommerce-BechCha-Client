import { Button } from "@mui/material";
import styled from "styled-components"
import { makeAnOrder } from "../../../ApiCalls/ordersApiCalls";
import { useDispatch, useSelector } from "react-redux"
import { reloadCart } from "../../../ApiCalls/apiCalls";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";




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
          await makeAnOrder(dispatch, userCart, totalAmount)
          // navigate("/profile/orders/me")
        }}
      >
        Checkout {totalAmount}
      </Button>
    </Container>
  )
}

export default PaymentTab