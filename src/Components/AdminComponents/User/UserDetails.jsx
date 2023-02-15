import { useEffect } from "react"
import { useState } from "react"
import { useParams } from "react-router-dom"
import styled from "styled-components"
import { userRequest } from "../../../requestMethods/requestMethods"
import ProfileDisplay from "../../User/ProfilePages/ProfileDisplay"
import OrderWidget from "../Widgets/OrderWidget"

const Container = styled.div`
    flex: 5;
    padding: 20px;
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 20px;
`

const Title = styled.h2`
     font-size: 24px;
    font-weight: 500;
    color: gray;
`

const User = styled.div`
    display: flex;
    align-items: center;
`


const UserDetails = () => {


  const id = useParams().id;
  const [ orders, setOrders ] = useState([]);

  useEffect(() => {
      const getOrders = async () => {
          const response = await userRequest.get(`/orders/${id}`);
          setOrders(response.data);
      }
      getOrders();
  }, [id])


  return (
    <Container> 
        <Title> User Profile </Title>
        <User>
           <ProfileDisplay />
        </User>
        <OrderWidget orders={orders}/>
    </Container>
  )
}

export default UserDetails