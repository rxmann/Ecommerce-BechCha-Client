import styled from "styled-components"
import CheckoutSteps from "./CheckoutSteps"
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

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

const Logo = styled.img`
    width: 100px;
    cursor: pointer;
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
      <Link to="/">
        <Logo src='https://github.com/rxmxndai/rxmxndai-assets/blob/main/assets/Bech_Cha.png?raw=true' />
      </Link>
      <Title> Checkout </Title>
      <CheckoutSteps step={stepPercentage} />
    </Container>
  )
}

export default CheckoutForm