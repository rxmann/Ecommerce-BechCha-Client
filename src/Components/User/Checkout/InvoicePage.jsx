import styled from "styled-components"

const Container = styled.div`

`
const Wrapper= styled.div`
  padding: 50px;
`

const TopWrapper= styled.div`
  padding: 50px;
  background-color: #0171b6;
  color: white;
`
const Title = styled.h1`

`


const OrderInfoWrapper = styled.div`
  padding: 50px;
`
const Info = styled.span`

`

const OrderList = styled.div`

`

const Total = styled.div`

`
const Footer = styled.div`

`

const InvoicePage = () => {
  return (
    <Container>
      <Wrapper>
      <TopWrapper>
            <Title> Invoice </Title>
        </TopWrapper>

        <OrderInfoWrapper>
            <Info> Roman Karki </Info>
            <Info> Mandikhatar, Kathmandu </Info>
        </OrderInfoWrapper>

        <OrderList>

        </OrderList>

        <Total>

        </Total>

        <Footer> www.bechcha.com.np </Footer>
      </Wrapper>
    </Container>
  )
}

export default InvoicePage