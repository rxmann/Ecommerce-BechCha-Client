import styled from "styled-components"
import Button from '@mui/material/Button';
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const moment = require("moment")


const Container = styled.div`
    flex: 2;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
    padding: 20px;
    background-color: #ffffff;
`

const Title = styled.span`
    font-size: 24px;
    font-weight: 500;
    color: gray;
`

const Table = styled.table`
  width: 100%;
  border-spacing: 20px;
`
const TableBody = styled.tbody`

`
const TableRow = styled.tr`

`
const TableHead = styled.th`
  text-align: start;
`
const User = styled.td`
  display: flex;
  align-items: center;
  font-weight: 500;
  gap: 10px;
`

const Date = styled.td`
  font-weight: 400;
`

const Amount = styled.td`
  font-weight: 400;
`
const Status = styled.td`

`


const Image = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    object-fit: cover;
`

const Name = styled.span`
    font-weight: 500;
`


const OrderWidget = ({ orders: allOrders}) => {

  const navigate = useNavigate();
  
  const StatusButton = ({ type }) => {
    let color, background;
    switch (type) {
      case "pending":
        color = "primary"
        background = "#ddd9ff"
        break;
      case "delivered":
        color = "success"
        background = "#e5faf2"
        break;
      case "processing":
        color = "secondary"
        background = "#fcebfe"
        break;
      case "shipping":
        color = "info"
        background = "#ebf1fe"
        break;
      case "cancelled":
        color = "error"
        background = "#fff0f1"
        break;
      default:
       break;
    }
    return <Button size={"small"} color={color} sx={{ background: background }} type={type}> {type} </Button>
  }



    // orders data
    const [orders, setOrders] = useState();


    useEffect(() => {
      const getOrders = async () => {
        setOrders(allOrders)
      }
      getOrders();
    }, [allOrders])

  return (
    <Container>
      <Title>Recent Transactions</Title>
      <Table>
        <TableBody>
          <TableRow>
            <TableHead> Customer </TableHead>
            <TableHead> Ordered Date </TableHead>
            <TableHead> Amount </TableHead>
            <TableHead> Status </TableHead>
            <TableHead> </TableHead>
          </TableRow>


          {orders && orders.map((order) => (
            <TableRow key={order?.updatedAt + Math.random()}>
              <User>
                <Image src={order.user?.image} />
                <Name> {order.user?.username} </Name>
              </User>
    
              <Date> { moment(order.createdAt).format('MMM D, YYYY') } </Date>
              <Amount> RS {order.payable} </Amount>
              <Status> <StatusButton type={order.status} /> </Status>
              <Status> <Button variant={"secondary"} onClick={() => navigate(`/admin/order/${order._id}`)}> Edit</Button> </Status>
          </TableRow>
          ))
        }
        </TableBody>
      </Table>
    </Container>
  )
}

export default OrderWidget