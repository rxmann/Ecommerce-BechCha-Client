import { useEffect } from "react"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import Chart from "../../Components/AdminComponents/Chart"
import NewUserWidget from "../../Components/AdminComponents/Widgets/NewUserWidget"
import OrderWidget from "../../Components/AdminComponents/Widgets/OrderWidget"
import Widget from "../../Components/AdminComponents/Widgets/Widget"
import { userData } from "../../data"

const Container = styled.div`
    flex: 5;
    width: 100%;
    padding: 20px;
`


const FeaturedInfo = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    margin-top: 10px;
`

const ChartContainer = styled.div`
    margin: 20px 0px;
`

const HomeWidgets = styled.div`
  display: flex;
  gap: 10px;
`


const AdminHome = () => {
  const navigate = useNavigate();
  const { currentUser, isSignedIn } = useSelector(state => state.user)

  console.log(currentUser.isAdmin, isSignedIn);

  useEffect(() => {
    if (!currentUser.isAdmin || !isSignedIn) {
      navigate("/");
    }
  }, [currentUser, isSignedIn, navigate])


  return (
    <Container>
      <FeaturedInfo >
        <Widget type="USERS" />
        <Widget type="ORDERS" />
        <Widget type="EARNINGS" />
        <Widget type="BALANCE" />
      </FeaturedInfo>

      <ChartContainer>
        <Chart title={"Sales Analytics"} data={userData} grid dataKey={"Active User"} />
      </ChartContainer>

      <HomeWidgets>
        <OrderWidget />
        <NewUserWidget />
      </HomeWidgets>
    </Container>
  )
}

export default AdminHome