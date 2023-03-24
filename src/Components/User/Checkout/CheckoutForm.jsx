import { useEffect, useState } from "react"
import styled from "styled-components"
import CheckoutSteps from "./CheckoutSteps"
import ConfirmationForm from "./ConfirmationForm"
import PaymentTab from "./PaymentTab"
import ShippingForm from "./ShippingForm"

const Container = styled.div`
  background-color: #f5f7f8;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px;
  height: 90vh;
  gap: 30px;
`
const Title = styled.h1`
  color: gray;
  padding: 20px;
`

const Wrapper = styled.div`
    margin: 50px;
    width: 40%;
`

const CheckoutForm = () => {
  const [page, setPage] = useState("Shipping");
  const [component, setComponent] = useState( );

 useEffect(() => {

  console.log(page)
  switch (page) {
    case "Shipping":
      setComponent(<ShippingForm  setElement={setPage} />);
      break;
    case "Confirmation":
      setComponent(<ConfirmationForm  setElement={setPage} />);
      break;
    case "Payment":
      setComponent(<PaymentTab setElement={setPage} />);
      break;
  }

  
 } , [page]);

  return (
    <Container>
       { page &&
       <>
       <Title> Checkout </Title>
      <CheckoutSteps  Element={page} setElement={setPage} />
        <Wrapper>
        {component}
      </Wrapper>
       </>
      }
  </Container>
  )
}

export default CheckoutForm