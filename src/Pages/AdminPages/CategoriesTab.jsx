import { DeleteOutline } from '@mui/icons-material';
import { Button } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components'
import DataTable from '../../Components/AdminComponents/Tables/DataTable';
import { useDispatch, useSelector } from "react-redux"
import { getAllCategories, getAllProducts } from '../../Redux/apiCalls';
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
  return <Button size={"small"} > {type} </Button>  
}

const CategoriesTab = () => {
    const navigate = useNavigate();
    const {categories} = useSelector(state => state.product)

    console.log(categories);

    const actionColumn = [
        { headerName: "Category ID", field: "_id", flex: 1 },
        { 
            headerName: "Category", 
            field: "image", 
            flex: 1,
            renderCell: (params) => {
                return (
                  <StatusCell >
                    <Profile  src={params.row.image?.url} />
                    {params.row.slug}
                  </StatusCell>
                )
            },
        },
        {
            field: "actions",
            headerName: "Actions",
            flex: 1,
            renderCell: (params) => {
              return (
                <ActionCell>
                  <ViewButton onClick={() => navigate(`/admin/category/${params.row._id}`)}> View </ViewButton>
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
      <Title> Categories List </Title>
      <Link to={"/admin/category/add"} >
        <AddButton  variant='contained'> Add Product </AddButton>
      </Link>
    </Wrapper>
    <DataTable 
        rows={categories} 
        columns={actionColumn} 
    />
  </Container>
  ) 
}

export default CategoriesTab