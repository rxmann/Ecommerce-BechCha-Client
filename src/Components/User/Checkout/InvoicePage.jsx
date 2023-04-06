import styled from "styled-components"
import { DataGrid } from '@mui/x-data-grid';
import { useSelector } from "react-redux"
import { Box } from "@mui/material";


const Container = styled.div`
  padding: 30px;
  width: 60%;
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


const Info = styled.span`
  font-weight: 400;
  font-size: 14px;
  color: black;
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

`


const InvoicePage = () => {


  const { cart } = useSelector(state => state.usercart);
  console.log(cart);


  const columns = [
    { headerName: "Product", field: "product",  headerClassName: "header-datatable", flex: 2, 
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
      <Wrapper>
        <TopWrapper>
          <Title color={"white"}> Invoice </Title>
        </TopWrapper>

        <OrderInfoWrapper>
          <SubWrapA>
            <Info> Roman Karki </Info>
            <Info> Mandikhatar, Kathmandu </Info>
            <Info> Date: 12/02/2023 </Info>
          </SubWrapA>
          <SubWrapB>
            <Info> OrderID: #0123123123123123123 </Info>
          </SubWrapB>
        </OrderInfoWrapper>

        <HR />

        <Title color={"gray"} > Order List </Title>

        <OrderList>
          <BOX>
          <DataGrid
            rows={cart}
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

        <HR/>

        <Total>
             NPR 100000
        </Total>

        <Footer>
          
        </Footer>
      </Wrapper>
    </Container>
  )
}

export default InvoicePage