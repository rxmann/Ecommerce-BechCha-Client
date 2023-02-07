import styled from "styled-components"
import Chart from "../AdminComponents/Chart"
import NewUserWidget from "../AdminComponents/Widgets/NewUserWidget"
import OrderWidget from "../AdminComponents/Widgets/OrderWidget"
import Widget from "../AdminComponents/Widgets/Widget"
import { userData } from "../data"

const Container = styled.div`
    flex: 5;
    background-color: #f5f7f8;
    width: 100%;
    font-family: 'Nunito', sans-serif;
    padding: 20px;
`

const FeaturedInfo = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    margin-top: 10px;
`

const HomeWidgets = styled.div`
  display: flex;
  gap: 10px;
`


const AdminHome = () => {
  return (
    <Container>
      <FeaturedInfo >
        <Widget type="USERS" />
        <Widget type="ORDERS" />
        <Widget type="EARNINGS" />
        <Widget type="BALANCE" />
      </FeaturedInfo>

      <Chart title={"Sales Analytics"} data={userData} grid dataKey={"Active User"} />

      <HomeWidgets>
        <OrderWidget />
        <NewUserWidget />
      </HomeWidgets>
    </Container>
  )
}

export default AdminHome