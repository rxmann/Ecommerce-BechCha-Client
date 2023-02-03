import styled from "styled-components"
import Chart from "../AdminComponents/Chart"
import Featured from "../AdminComponents/Featured"
import Widget from "../AdminComponents/Widget"

const Container = styled.div`
    flex: 5;
    background-color: #f5f7f8;
`

const FeaturedInfo = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    margin-top: 10px;
    padding: 20px;
`

const Charts = styled.div`
  display: flex;
  gap: 20px;
  padding: 5px 20px;
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
        <Featured />
        <Chart />
      </Charts>

    </Container>
  )
}

export default AdminHome