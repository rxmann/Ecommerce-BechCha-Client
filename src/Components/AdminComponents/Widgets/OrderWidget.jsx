import styled from "styled-components"
import Button from '@mui/material/Button';

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
    font: 40px;
    border-radius: 50%;
    object-fit: cover;
`

const Name = styled.span`
    font-weight: 500;
`


const OrderWidget = () => {

  const StatusButton = ({ type }) => {
    let color, background;
    switch (type) {
      case "Pending":
        color = "info"
        background = "#ebf1fe"
        break;
      case "Approved":
        color = "success"
        background = "#e5faf2"
        break;
      case "Declined":
        color = "error"
        background = "#fff0f1"
        break;
      default:
        color = "warning"
        background = ""
        break;
    }
    return <Button size={"small"} color={color} sx={{ background: background }} type={type}> {type} </Button>
  }


  return (
    <Container>
      <Title>Recent Transactions</Title>
      <Table>
        <TableBody>
          <TableRow>
            <TableHead> Customer </TableHead>
            <TableHead> Date </TableHead>
            <TableHead> Amount </TableHead>
            <TableHead> Status </TableHead>
          </TableRow>

          <TableRow>
            <User>
              <Image src={"https://zoro.to/images/zoro-min.png"} />
              <Name> Zoro Zuro </Name>
            </User>

            <Date> 2nd January 2023 </Date>
            <Amount> RS 1200 </Amount>
            <Status> <StatusButton type="Pending" /> </Status>
          </TableRow>

          <TableRow>
            <User>
              <Image src={"https://zoro.to/images/zoro-min.png"} />
              <Name> Zoro Zuro </Name>
            </User>

            <Date> 2nd January 2023 </Date>
            <Amount> RS 1200 </Amount>
            <Status> <StatusButton type="Approved" /> </Status>
          </TableRow>


          <TableRow>
            <User>
              <Image src={"https://zoro.to/images/zoro-min.png"} />
              <Name> Zoro Zuro </Name>
            </User>

            <Date> 2nd January 2023 </Date>
            <Amount> RS 1200 </Amount>
            <Status> <StatusButton type="Declined" /> </Status>
          </TableRow>
        </TableBody>
      </Table>
    </Container>
  )
}

export default OrderWidget