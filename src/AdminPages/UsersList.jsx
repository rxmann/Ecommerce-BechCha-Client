import styled from 'styled-components'
import { DataGrid } from '@mui/x-data-grid';
import { userColumns, userRows } from '../data';  
import { Button} from '@mui/material';
import { DeleteOutline } from '@mui/icons-material';


const Container = styled.div`
    flex: 5;
    padding: 20px;
    background-color: #f5f7f8;
    width: 100%;
`

const Wrapper = styled.div`
  background-color: white;
  height: 100%;
  width: 100%;
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

const UsersList = () => {

  const actionColumn = [
    {
      field: "actions",
      headerName: "Actions",
      width: 200,
      renderCell: () => {
        return (
          <ActionCell>
          <ViewButton> View </ViewButton>
          <Button size="small" variant="text" color="error">
            <DeleteOutline />
          </Button>
        </ActionCell>   
        )
      }
    }
  ]

  return (
    <Container>
      <Wrapper>
        <DataGrid
          rows={userRows}
          columns={userColumns.concat(actionColumn)}
          checkboxSelection
          rowsPerPageOptions={[10]}
          />
      </Wrapper>
    </Container>
  )
}

export default UsersList