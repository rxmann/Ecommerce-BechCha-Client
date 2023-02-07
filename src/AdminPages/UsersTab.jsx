import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import UsersList from '../AdminComponents/Tables/DataTable';


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



const UsersTab = () => {

  return (
    <Container>
      <Wrapper>
        <Title> Customers List </Title>
        <Link to="/admin/user/register">
          <AddButton variant='contained'> Add user </AddButton>
        </Link>
      </Wrapper>
      <UsersList />
    </Container>
  )
}

export default UsersTab