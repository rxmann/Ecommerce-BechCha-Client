import styled from "styled-components"
import Chart from "../AdminComponents/Chart"
import NewUserWidget from "../AdminComponents/Widgets/NewUserWidget"
import OrderWidget from "../AdminComponents/Widgets/OrderWidget"
import Widget from "../AdminComponents/Widgets/Widget"
import { userData } from "../data"

const Container = styled.div`
    flex: 4;
    background-color: #f5f7f8;
    padding: 10px;
    width: 100%;
    font-family: 'Nunito', sans-serif;
`

const FeaturedInfo = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    margin-top: 10px;
    padding: 20px;
`

const HomeWidgets = styled.div`
  display: flex;
  gap: 10px;
  padding: 20px;
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
        <NewUserWidget />
        <OrderWidget />
      </HomeWidgets>
    </Container>
  )
}

export default AdminHome