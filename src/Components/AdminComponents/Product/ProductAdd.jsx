import { useState } from "react"
import styled from "styled-components"
import { userRequest } from "../../../requestMethods/requestMethods"
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
    
  return (
   <Container>
    <Title> Add product </Title>
        <ProductForm FormType={"add"}  />
   </Container>
  )
}

export default ProductAdd