import { useEffect, useState } from "react";
import styled from "styled-components"
import { getAllProducts } from "../../../ApiCalls/ProductApiCalls";
import ProductCard from "./ProductCard";


const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const ProductList = ({ id, sort, limitPrice, subIds }) => {
  const [data, setData] = useState();



  useEffect(() => {
    const getProductsOfCategory = async () => {
      setData(await getAllProducts({sort, limitPrice, subIds}))
    }
    getProductsOfCategory();
  }, [id, sort, limitPrice, subIds])


  return (
    <Container>
        {data?.map((product) => (
          <ProductCard data={product} key={product._id} />
        ))}
      
    </Container>
  )
}

export default ProductList