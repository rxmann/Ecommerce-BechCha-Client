import { useEffect, useState } from "react"
import styled from "styled-components"
import CheckoutSteps from "./CheckoutSteps"
import ShippingForm from "./ShippingForm"

const Container = styled.div`
  background-color: #f5f7f8;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 50px;
`

const Wrapper = styled.div`
    margin: 50px;
    width: 50%;
`

const CheckoutForm = () => {
  const [page, setPage] = useState();

  const defaultElement = { name: "Shipping", element: <ShippingForm  setElement={setPage}/> };

 useEffect(() => {
  setPage(defaultElement);
 } , []);

  return (
    <Container>
       { page &&
       <>
      <CheckoutSteps  Element={page} setElement={setPage} />
        <Wrapper>
        {page?.element}
      </Wrapper>
       </>
      }
  </Container>
  )
}

export default CheckoutForm