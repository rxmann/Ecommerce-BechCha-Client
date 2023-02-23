import styled from "styled-components"
import NewProductForm from "./NewProductForm"


const Container = styled.div`
    flex: 5;
    width: 100%;
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 30px;
`

const Title = styled.h1`
    font-size: 24px;
    font-weight: 500;
    color: gray;
`


const ProductAdd = () => {
    
  return (
   <Container>
        <Title> Add product </Title>
        <NewProductForm FormType={"add"}  />
   </Container>
  )
}

export default ProductAdd