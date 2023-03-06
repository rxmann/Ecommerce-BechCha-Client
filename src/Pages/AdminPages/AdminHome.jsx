import { useState } from "react"
import { useEffect } from "react"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import Chart from "../../Components/AdminComponents/Chart"
import NewUserWidget from "../../Components/AdminComponents/Widgets/NewUserWidget"
import OrderWidget from "../../Components/AdminComponents/Widgets/OrderWidget"
import Widget from "../../Components/AdminComponents/Widgets/Widget"
import { getOrdersStats, getSalesStats, getUserRateStats, getUserStats } from "../../ApiCalls/apiCalls"
import { getAllOrdersAsAdmin } from "../../ApiCalls/ordersApiCalls"

const Container = styled.div`
    flex: 5;
    width: 100%;
    padding: 20px;
    width: 100%;
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
  const { currentUser, isSignedIn, accessToken } = useSelector(state => state.user)

  useEffect(() => {
    if (!currentUser.isAdmin || !isSignedIn) {
      navigate("/");
    }
  }, [currentUser, isSignedIn, navigate, accessToken])


  // orders sales stats
  // orders stats
  const [ordersStats, setOrdersStats] = useState();
  const [salesStats, setSalesStats] = useState({});
  const [userStats, setUserStats] = useState({});

  useEffect(() => {

    const getAllStats = async () => {
      // sales stats past-now
      setSalesStats(await getSalesStats());

      setOrdersStats(await getOrdersStats());

      setUserStats(await getUserStats());
    }

    getAllStats();
  }, [currentUser, isSignedIn ])



  // users data for chart
  const [userData, setUserData] = useState([]);
  const [ordersData, setOrdersData] = useState([]);


  useEffect(() => {
    const getUsersData = async () => {
      const ordersResponse = await getAllOrdersAsAdmin({limit: 5});
      setOrdersData(ordersResponse)

      const userResponse = await getUserRateStats();
      setUserData(userResponse);

    }
    getUsersData();
  }, [currentUser, isSignedIn])


  return (
    <Container>
      <FeaturedInfo >
        <Widget type="EARNINGS" data={salesStats} />
        <Widget type="ORDERS" data={ordersStats} />
        <Widget type="USERS" data={userStats} />
        <Widget type="BALANCE" data={ordersStats} />
      </FeaturedInfo>

      <ChartContainer>
        <Chart title={"Users Analytics"} data={userData} grid dataKey={"users"} />
      </ChartContainer>

      <HomeWidgets>
        <OrderWidget orders={ordersData} />
        <NewUserWidget />
      </HomeWidgets>
    </Container>
  )
}

export default AdminHome