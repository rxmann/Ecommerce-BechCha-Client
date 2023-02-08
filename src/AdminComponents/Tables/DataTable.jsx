import styled from 'styled-components'
import { DataGrid } from '@mui/x-data-grid';
import { Button} from '@mui/material';


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



const DataTable = ({rows, columns}) => {

  return (
    <Container>
      <Wrapper>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={9}
          rowsPerPageOptions={[5]}
          checkboxSelection
          />
      </Wrapper>
    </Container>
  )
}

export default DataTable