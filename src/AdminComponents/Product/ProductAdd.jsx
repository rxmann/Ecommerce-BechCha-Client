import { useState } from "react"
import styled from "styled-components"
import ProductForm from "./ProductForm"


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

    const [Data, setData] = useState(null);

  return (
   <Container>
    <Title> Add product </Title>
        <ProductForm FormType={"add"} setData={setData}/>
   </Container>
  )
}

export default ProductAdd