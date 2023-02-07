import styled from 'styled-components'
import { DataGrid } from '@mui/x-data-grid';
import { userColumns, userRows } from '../../data';  
import { Button} from '@mui/material';
import { DeleteOutline } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';


const Container = styled.div`
    height: 100%;
    width: 100%;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
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

const DelBtn = styled(Button)`
  display: flex;
  justify-content: flex-end;
  height: 100%;
`

const DataTable = () => {
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
          <DelBtn  size="small" variant="text" color="error">
                      <DeleteOutline  />
          </DelBtn>
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
          pageSize={9}
          rowsPerPageOptions={[5]}
          checkboxSelection
          />
      </Wrapper>
    </Container>
  )
}

export default DataTable