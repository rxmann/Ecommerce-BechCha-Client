import { DeleteOutline } from '@mui/icons-material';
import { Button } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components'
import DataTable from '../../Components/AdminComponents/Tables/DataTable';
import { productRows, productColumns } from "../../data";
import { useDispatch } from "react-redux"
import { getAllProducts } from '../../Redux/apiCalls';
import { useEffect } from 'react';


const Container = styled.div`
    flex: 5;
    padding: 20px;
    background-color: #f5f7f8;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
`

const Title = styled.h1`
  font-size: 24px;
    font-weight: 500;
    color: gray;
`

const AddButton = styled(Button)`
    text-transform: unset !important;
`

const ActionCell = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`
const ViewButton = styled(Button)`
  padding: 2px 5px;
  border-radius: 5px;
  cursor: pointer;
  color: #0171b6;
  border: 1px solid #0171b6;
`

const DelBtn = styled(Button)`
  display: flex;
  justify-content: flex-end;
  height: 100%;
`
export const StatusCell = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`
export const Profile = styled.img`
  width: 35px;
  height: 35px;
  object-fit: cover;
  border-radius: 50%;
`

export const StatusButton = ({type}) => {
  let color, background;
  switch (type) {
    case "pending":
      color = "info"
      background = "#ebf1fe"
      break;
    case "active":
      color = "success"
      background = "#e5faf2"
      break;
    case "passive":
      color = "error"
      background = "#fff0f1"
      break;
    default: 
      color = "warning"
      background = ""
      break;
  }
  return <Button size={"small"} color={color} sx={{background: background}} type={type}> {type} </Button>  
}


const ProductsTab = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    getAllProducts(dispatch)
  }, [dispatch])

  const actionColumn =  [
    { field: "_id", headerName: "ID", width: 70 },
    {
      field: "user",
      headerName: "User",
      flex: 2,
      renderCell: (params) => {
        return (
          <StatusCell >
            <Profile  src={params.row.img} alt="avatar" />
            {params.row.username}
          </StatusCell>
        )
      },
    },
    {
      field: "email",
      headerName: "Email",
      flex: 2,
    },
    {
      field: "age",
      headerName: "Age",
      flex: 1,
    },
    {
      field: "status",
      headerName: "Status",
      flex: 2,
      renderCell: (params) => {
        return (
          <StatusButton type={params.row.status} />
        );
      },
    },
    {
      field: "actions",
      headerName: "Actions",
      flex: 2,
      renderCell: () => {
        return (
          <ActionCell>
            <ViewButton onClick={() => navigate("/admin/product/" + 2123)}> View </ViewButton>
            <DelBtn size="small" variant="text" color="error">
              <DeleteOutline />
            </DelBtn>
          </ActionCell>
        )
      }
    }
  ]

  return (
    <Container>
      <Wrapper>
        <Title> Products List </Title>
        <Link to={"/admin/product/add"} >
          <AddButton  variant='contained'> Add Product </AddButton>
        </Link>
      </Wrapper>
      <DataTable rows={productRows} columns={actionColumn} />
    </Container>
  )
}

export default ProductsTab