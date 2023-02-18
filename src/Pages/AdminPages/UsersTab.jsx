import { AccountCircle, DeleteOutline } from '@mui/icons-material';
import { Button } from '@mui/material';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components'
import DataTable from '../../Components/AdminComponents/Tables/DataTable';
import { userRequest } from '../../requestMethods/requestMethods';


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
  gap: 20px;
`
export const Profile = styled.img`
  width: 40px;
  height: 40px;
  object-fit: cover;
  border-radius: 50%;
`

const StatusButton = ({ type }) => {
  let color, background;
  switch (type) {
    case "pending":
      color = "error"
      background = "#fff0f1"
      break;
    case "verified":
      color = "success"
      background = "#e5faf2"
      break;
  }
  return <Button size={"small"} color={color} sx={{ background: background }} type={type}> {type} </Button>
}


const UsersTab = () => {

  const navigate = useNavigate();

  const [ users, setUsers ] = useState([]);
  const [ref, setRef] = useState(false);

  useEffect(() => {
    const getAllUsers = async () => {
        try {
            const res = await userRequest.get("/users/find");
            setUsers(res.data)
        }
        catch (err) {
            console.log(err);
        }
    }

    getAllUsers();
  }, [ref]);



  const handleDeleteOne = async (id) => {
    console.log(id);
    try {
      const response = await userRequest.delete(`/users/${id}`);
      console.log(response.data);
    }
    catch (err) {
      console.log(err.response.data);
    }
    setRef(!ref);
  }

  const actionColumn = [
    { field: "_id", headerName: "ID", flex: 2 },
    {
      field: "user",
      headerName: "User",
      flex: 1,
      renderCell: (params) => {
        return (
          <StatusCell >
            { params.row.image ? <Profile  src={params.row.image} /> :  <AccountCircle sx={{width: '40px',
                        height: '40px'}} />}
            {params.row.username}
          </StatusCell>
        );
      },
    },
    { field: "email", headerName: "Email", flex: 2 },
    {
      field: "contacts",
      headerName: "Contacts",
      flex: 1,
    },
    {
      field: "isVerified",
      headerName: "Status",
      flex: 1,
      renderCell: (params) => {
        return (
          params.row.isVerified ? <StatusButton type={"verified"} /> : <StatusButton type={"pending"} />
        )
      }
    },
    {
      field: "actions",
      headerName: "Actions",
      flex: 2,
      renderCell: (params) => {
        return (
          <ActionCell>
            <ViewButton onClick={() => navigate("/admin/user/" + params.row._id)}> View </ViewButton>
            <DelBtn size="small" variant="text" color="error" onClick={() => handleDeleteOne(params.row._id)}>
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
      <DataTable rows={users} columns={actionColumn} />
    </Container>
  )
}

export default UsersTab