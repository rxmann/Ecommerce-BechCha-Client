import { DeleteOutline } from '@mui/icons-material';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components'
import DataTable from '../../Components/AdminComponents/Tables/DataTable';
import { useDispatch, useSelector } from "react-redux"
import { deleteCategory, getAllCategories } from '../../ApiCalls/CategoriesApiCalls';
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
const StatusCell = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`
const Profile = styled.img`
  width: 35px;
  height: 35px;
  object-fit: cover;
  border-radius: 50%;
`

export const StatusButton = ({ type }) => {
  return <Button size={"small"} > {type} </Button>
}

const CategoriesTab = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    getAllCategories(dispatch)
  }, [dispatch])
  
  const { categories } = useSelector(state => state.product)

  const getCatName = (id) => {
    for (let i = 0; i < categories?.length; i++) {
      if (categories[i]._id === id) {
        return categories[i].slug;
      }
    }
    return id;
  }



  const deleteThisCat = async (id) => {
      await deleteCategory(dispatch, id);
  }


  const actionColumn = [
    { headerName: "Category ID", headerClassName: "header-datatable", field: "_id", flex: 1 },
    {
      headerName: "Category",
      headerClassName: "header-datatable",
      field: "image",
      flex: 1,
      renderCell: (params) => {
        return (
          <StatusCell >
            <Profile src={params.row.image?.url} />
            {params.row.slug}
          </StatusCell>
        )
      },
    },
    {
      headerName: "Parent",
      headerClassName: "header-datatable",
      field: "parentId",
      flex: 1,
      renderCell: (params) => {
        return (
          getCatName(params.row.parentId) || "No parent"
        )
      } 
    },
    {
      field: "actions",
      headerName: "Actions",
      headerClassName: "header-datatable",
      flex: 1,
      renderCell: (params) => {
        return (
          <ActionCell>
            <ViewButton onClick={() => navigate(`/admin/category/${params.row._id}`)}> View </ViewButton>
            <DelBtn 
              size="small" 
              variant="text" 
              color="error"
              onClick={() => {deleteThisCat(params.row._id)}}
              >
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
      </Wrapper>
      <DataTable
        rows={categories}
        columns={actionColumn}
        type={'Add Categories'}
        link="/admin/category/add"
      />
    </Container>
  )
}

export default CategoriesTab