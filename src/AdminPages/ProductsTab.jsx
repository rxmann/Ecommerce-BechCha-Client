import { Button } from '@mui/material';
import styled from 'styled-components'
import DataTable from '../AdminComponents/Tables/DataTable';


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
  color: gray;
  font-weight: 600;
  font-size: 16px;
`

const AddButton = styled(Button)`
    text-transform: unset !important;
`



const ProductsTab = () => {

  return (
    <Container>
      <Wrapper>
        <Title> Products List </Title>
        <AddButton size='small' variant='contained'> Add Product </AddButton>
      </Wrapper>
      <DataTable />
    </Container>
  )
}

export default ProductsTab