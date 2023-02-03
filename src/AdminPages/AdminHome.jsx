import styled from "styled-components"
import Chart from "../AdminComponents/Chart"
import Widget from "../AdminComponents/Widget"
import { userData } from "../data"

const Container = styled.div`
    flex: 4;
    background-color: #f5f7f8;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`

const FeaturedInfo = styled.div`
    width: 96%;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    margin-top: 10px;
`
const Charts = styled.div`
  width: 100%;
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

      <Charts>
        <Chart title={"Sales Analytics"} data={userData} grid  dataKey={"Active User"}/>
      </Charts>

    </Container>
  )
}

export default AdminHome