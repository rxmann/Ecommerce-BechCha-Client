import styled from "styled-components"
import Button from '@mui/material/Button';
import { useEffect, useState } from "react";
import Fetching from "../EmptyView/Fetching";
import { useNavigate } from 'react-router-dom';
import { getMyOrdersList } from "../../../ApiCalls/ordersApiCalls";
import { InputAdornment, OutlinedInput } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import { useSelector } from "react-redux"
const moment = require("moment");


const Container = styled.div`
    box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
    background-color: #ffffff;
    min-height: 40vh;
    padding: 20px;
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

const TableData = styled.td`

`

const ProductImage = styled.img`
    cursor: pointer;
    object-fit: contain;
    max-width: 40px;
    max-height: 40px;
    &:hover{
        transform: scale(1.1, 1.1);
    }
`

const Action = styled(Button)`

`

const SearchContainer = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-between;
    padding: 50px 0px;
`
const SearchBox = styled(OutlinedInput)`
    width: 25%;
`

const SearchButton = styled(Button)`
    margin-right: 20px;
`
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
     return
  }
  return <Button size={"small"} color={color} sx={{ background: background }} type={type}> {type} </Button>
}


const OrderPage = () => {


  const { currentUser } = useSelector(state => state.user);
  const navigate = useNavigate();

  // orders data
  const [orders, setOrders] = useState();
  const [search, setSearch] = useState("");


  useEffect(() => {
    const getMyOrder = async () => {
      const data = await getMyOrdersList(currentUser._id)
      setOrders(filterRows(data, search))
    }
    getMyOrder();
  }, [search])


  const filterRows = (data, searchQuery) => {
    return data?.filter(ord =>
        String(ord._id).toLowerCase().includes(searchQuery.toLowerCase())
      )
  }


  return (
    <Container>
      <Title>Recent Transactions</Title>

      <SearchContainer>
        <SearchBox
          size="small"
          maxLength={30}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search by order ID"
          sx={{ backgroundColor: "#ffffff" }}
          startAdornment={
            <InputAdornment position="start">
              <SearchIcon color="info" />
            </InputAdornment>
          }
          endAdornment={
            <InputAdornment position="end">
              <SearchButton >Search</SearchButton>
            </InputAdornment>
          }
        />
      </SearchContainer>


      {orders?.length > 0 ?
        <Table>
          <TableBody>
            <TableRow>
              <TableHead> Products </TableHead>
              <TableHead> User </TableHead>
              <TableHead> Ordered Date </TableHead>
              <TableHead> Quantity </TableHead>
              <TableHead> Amount </TableHead>
              <TableHead> Status </TableHead>
            </TableRow>

            {orders &&
              orders.map((order) => (
                <TableRow key={order?.updatedAt}>
                  <User>
                    {order.products.map((prod) => (
                      <ProductImage
                        key={prod?.product.images[0].url}
                        src={prod?.product.images[0].url}
                      />
                    ))}
                  </User>
                  <TableData> {order.user?.username} </TableData>
                  <TableData> {moment(order.createdAt).format('MMM D, YYYY')} </TableData>
                  <TableData> {order.totalItems}  </TableData>
                  <TableData> RS {order.payable} </TableData>
                  <TableData> <StatusButton type={order.status} /> </TableData>
                  <TableData > <Action
                    variant="text"
                    color={"secondary"}
                    onClick={() => navigate(`/profile/order/${order._id}`)}
                  >
                    Details
                  </Action> </TableData>
                </TableRow>
              ))
            }
          </TableBody>
        </Table>
        : <Fetching type={"Empty"} Message={"No orders"} />
      }
    </Container>
  )
}

export default OrderPage