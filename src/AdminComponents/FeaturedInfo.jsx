import styled from "styled-components"
import Widget from "./Widget"

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    margin-top: 10px;
    background-color: white;
    padding: 20px;
`



const FeaturedInfo = () => {
  return (
    <Container>
        <Widget type="USERS" />
        <Widget type="ORDERS" />
        <Widget type="EARNINGS" />
        <Widget type="BALANCE" />
    </Container>
  )
}

export default FeaturedInfo