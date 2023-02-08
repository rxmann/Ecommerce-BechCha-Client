import { DeleteOutline } from '@mui/icons-material';
import { Button } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components'
import DataTable from '../AdminComponents/Tables/DataTable';
import { userColumns, userRows } from '../data';  


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

const Title = styled.h3`
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



const UsersTab = () => {

  const navigate = useNavigate();

  const actionColumn = [
    {
      field: "actions",
      headerName: "Actions",
      flex: 2,
      renderCell: () => {
        return (
          <ActionCell>
            <ViewButton onClick={() => navigate("/admin/user/" + 2123)}> View </ViewButton>
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
        <Title> Customers List </Title>
        <Link to="/admin/user/register">
          <AddButton variant='contained'> Add user </AddButton>
        </Link>
      </Wrapper>
      <DataTable rows={userRows} columns={userColumns.concat(actionColumn)} />
    </Container>
  )
}

export default UsersTab