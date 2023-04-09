import { useEffect } from "react"
import { useState } from "react"
import { useParams } from "react-router-dom"
import styled from "styled-components"
import ProfileDisplay from "../../User/ProfilePages/ProfileDisplay"
import OrderWidget from "../Widgets/OrderWidget"
import { getOneOrderById } from "../../../ApiCalls/ordersApiCalls"

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
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const getOrders = async () => {
            const data = await getOneOrderById(id)
            setOrders(data);
            
        }
        getOrders();
    }, [id])


    console.log(id, orders);

    return (
        <Container>
            <Title> User Profile </Title>
            <User>
                <ProfileDisplay />
            </User>
            {<OrderWidget orders={orders} /> }
        </Container>
    )
}

export default UserDetails