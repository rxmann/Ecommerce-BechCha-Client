import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components"
import { publicRequest } from "../../requestMethods/requestMethods";
import ProductCard from "./ProductCard";


const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const ProductList = () => {

  const id = useParams().id;
  const [data, setData] = useState();


  useEffect(() => {

    const getProductsOfCategory = async () => {
      try {
        const response = await publicRequest.get(`/products?category=${id}`)
        setData(response.data.products)
      }
      catch (err) {
        console.log(err);
      }
    }
    getProductsOfCategory();
  }, [id])


  return (
    <Container>
        {data.map((product) => (
          <ProductCard data={product} key={product._id} />
        ))}
    </Container>
  )
}

export default ProductList