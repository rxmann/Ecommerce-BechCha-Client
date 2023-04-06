import styled from "styled-components"
import { DataGrid } from '@mui/x-data-grid';
import moment from 'moment';
import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { getOneOrderById } from "../../../ApiCalls/ordersApiCalls";
import { useState } from "react";


const Container = styled.div`
  padding: 30px;
  width: 800px;
  margin: auto;
`
const Wrapper = styled.div`
  border: 1px solid gray;
`

const TopWrapper = styled.div`
  padding: 30px 0px;
  background-color: #0171b6;
  color: white;
`
const Title = styled.h1`
  padding: 20px;
  color: ${props => props.color && props.color};
`

const OrderInfoWrapper = styled.div`
  padding: 20px;
  display: flex;
  justify-content: space-between;
`


const SubWrapA = styled.div`
  flex:1;
  display: flex;
  flex-direction: column;
  justify-content: end;
  gap: 10px;
`

const SubWrapB = styled.div`
  flex:1;
  display: flex;
  align-items: end;
  justify-content: end;
`


const Info = styled.div`
  font-weight: 500;
  font-size: 16px;
  color: black;
  display: flex;
`
const InfoName = styled.span`
  flex: 1;
`

const InfoValue = styled.span`
  flex: 2;
`

const HR = styled.hr`
  border: none;
  height: 1px;
  margin: 5px;
  background-color: #0171b6;
`



const OrderList = styled.div`
    padding: 20px;
`

const BOX = styled(Box)`
  width: 100%;
  height: 100%;

  & .header-datatable {
    background-color: #f0f8ff !important;
  }
`

const Total = styled.h3`
  color: #0171b6;
  display: flex;
  align-items: center;
  justify-content: end;
  padding: 20px;
`

const Footer = styled.div`
    padding: 20px;
`

const Logo = styled.img`
    width: 100px;
    cursor: pointer;
`


const InvoicePage = ({ order }) => {

  const [data, setData] = useState()

  useEffect(() => {
    const getOrderDetails = async () => {
      const details = await getOneOrderById(order);
      setData(details);
    }
    getOrderDetails();
  }, [order])
  
  
  const columns = [
    {
      headerName: "Product", field: "product", headerClassName: "header-datatable", flex: 3,
      renderCell: (params) => {
        return (
          <>
            {params.row.product.title}
          </>
        )
      }
    },
    {
      headerName: "Quantity",
      headerClassName: "header-datatable",
      field: "quantity",
      flex: 1,
      renderCell: (params) => {
        return (
          <>
            {params.row.quantity}
          </>
        )
      },
    },
    {
      headerName: "Price",
      headerClassName: "header-datatable",
      field: "price",
      flex: 1,
      renderCell: (params) => {
        return (
          <>
            {params.row.price}
          </>
        )
      }
    },
    {
      headerName: "SubTotal",
      headerClassName: "header-datatable",
      field: "total",
      flex: 1,
      renderCell: (params) => {
        return (
          <>
            NPR {params.row.price * params.row.quantity}
          </>
        )
      }
    },
  ]


  return (
    <Container>
      {data && data.products &&
        <Wrapper>
          <TopWrapper>
            <Title color={"white"}> Invoice </Title>
          </TopWrapper>

          <OrderInfoWrapper>
            <SubWrapA>
              <Info>
                <InfoName> Recepient </InfoName>
                <InfoValue> {data.recipient} </InfoValue>
              </Info>
              <Info> 
                <InfoName> Ship to </InfoName>
                <InfoValue>  {data.shipping} </InfoValue>
              </Info>
              <Info> <InfoName> Date </InfoName>  <InfoValue> {moment(data.createdAt).format('MMMM Do YYYY')} </InfoValue> </Info>
            </SubWrapA>
            <SubWrapB>
              <Info> 
                <InfoName> OrderID </InfoName>
                <InfoValue> {data._id} </InfoValue>
              </Info>
            </SubWrapB>
          </OrderInfoWrapper>

          <HR />

          <Title color={"gray"} > Order List </Title>

          <OrderList>
            <BOX>
              <DataGrid
                rows={data.products}
                columns={columns}
                getRowId={row => row._id}
                getRowClassName={() => `rows-datatable`}

                autoHeight
                autoWidth
                disableSelectionOnClick
                disableColumnFilter
                disableColumnMenu
                disableColumnSelector
                disableDensitySelector
                disableExtendRowFullWidth
                disableReorderColumns
                disableSort
                hideFooterPagination
                hideFooterRowCount
                hideFooterSelectedRowCount
              />
            </BOX>
          </OrderList>

          <HR />

          <Total>
          {`TOTAL - NPR ${data.payable} `}
          </Total>

          <Footer>
            <Link to="/">
              <Logo src='https://github.com/rxmxndai/rxmxndai-assets/blob/main/assets/Bech_Cha.png?raw=true' />
            </Link>
          </Footer>
        </Wrapper>
      }
    </Container>


  )
}

export default InvoicePage