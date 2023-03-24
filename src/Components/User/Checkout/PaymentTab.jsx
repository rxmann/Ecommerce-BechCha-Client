import { Button } from "@mui/material";
import styled from "styled-components"

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

const PaymentTab = ({setElement}) => {
  return (
    <Container>
       <Button
       fullWidth
       color="info"
        variant={"contained"}
        onClick={() => {
          setElement("Shipping");
        }}
      >
        Checkout
      </Button>
    </Container>
  )
}

export default PaymentTab