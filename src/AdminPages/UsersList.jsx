import styled from 'styled-components'
import { DataGrid } from '@mui/x-data-grid';


const Container = styled.div`
    flex: 4;
    width: 100%;
`


const UsersList = () => {
  const columns = [
    { field: 'id', headerName: 'ID', width: 50 },
    { field: 'username', headerName: 'Username' },
    { field: 'email', headerName: 'Email' },
    { field: 'status', headerName: 'Status'},
    { field: 'transaction', headerName: 'Transaction' },
    // { field: 'avatar', headerName: 'Avatar', type: "image" },
  ];
  
  const rows = [
    { 
      id: 1, 
      username: 'Jon Snow',
      avatar: "https://zoro.to/images/zoro-min.png",
      email: "jonsnow@gmail.com", 
      status: "active",
      transaction: "RS 120"
    },
    { 
      id: 2, 
      username: 'Jon Snow',
      avatar: "https://zoro.to/images/zoro-min.png",
      email: "jonsnow@gmail.com", 
      status: "active",
      transaction: "RS 120"
    },
    { 
      id: 3, 
      username: 'Jon Snow',
      avatar: "https://zoro.to/images/zoro-min.png",
      email: "jonsnow@gmail.com", 
      status: "active",
      transaction: "RS 120"
    },
    { 
      id: 4, 
      username: 'Jon Snow',
      avatar: "https://zoro.to/images/zoro-min.png",
      email: "jonsnow@gmail.com", 
      status: "active",
      transaction: "RS 120"
    },
    { 
      id: 5, 
      username: 'Jon Snow',
      avatar: "https://zoro.to/images/zoro-min.png",
      email: "jonsnow@gmail.com", 
      status: "active",
      transaction: "RS 120"
    },
    

  ];
  

  return (
    <Container>
       <DataGrid
        rows={rows}
        columns={columns}
        pageSize={3}
        checkboxSelection
      />
    </Container>
  )
}

export default UsersList