import styled from "styled-components"
import CheckoutSteps from "./CheckoutSteps"
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px;
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

  const currentPage = useLocation().pathname;
  const [stepPercentage, setStepPercentage] = useState(10);

  useEffect(() => {
    if (currentPage.toLowerCase().includes("shipping")) {
      setStepPercentage(20);
      setPage("Shipping")
    }
    else if (currentPage.toLowerCase().includes("confirmation")) {
      setStepPercentage(70);
      setPage("Confirmation")
    }
    else if (currentPage.toLowerCase().includes("payment")) {
      setStepPercentage(100);
      setPage("Payment")
    }
  }, [currentPage])


  return (
    <Container>
       <Title> Checkout </Title>
      <CheckoutSteps step={stepPercentage} />
  </Container>
  )
}

export default CheckoutForm