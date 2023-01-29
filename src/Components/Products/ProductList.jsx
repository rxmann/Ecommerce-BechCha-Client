import { useEffect, useState } from "react";
import styled from "styled-components"
import { publicRequest } from "../../requestMethods/requestMethods";
import ProductCard from "./ProductCard";


const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const ProductList = ({id, sort, limitPrice}) => {
  const [data, setData] = useState();
  useEffect(() => {
    const getProductsOfCategory = async () => {
      try {
        const response = await publicRequest.get(`/products?category=${id}&sort=${sort}&limitprice=${limitPrice}`)
        setData(response.data.products)
        console.log(response.data.products);
      }
      catch (err) {
        console.log(err);
      }
    }
    getProductsOfCategory();
  }, [id, sort, limitPrice])


  return (
    <Container>
        {data?.map((product) => (
          <ProductCard data={product} key={product._id} />
        ))}
    </Container>
  )
}

export default ProductList