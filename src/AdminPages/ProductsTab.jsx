import { DeleteOutline } from '@mui/icons-material';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components'
import DataTable from '../AdminComponents/Tables/DataTable';
import { productRows, productColumns } from '../data';

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



const ProductsTab = () => {

  const navigate = useNavigate();

  const actionColumn = [
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
        <AddButton  variant='contained'> Add Product </AddButton>
      </Wrapper>
      <DataTable rows={productRows} columns={productColumns.concat(actionColumn)} />
    </Container>
  )
}

export default ProductsTab