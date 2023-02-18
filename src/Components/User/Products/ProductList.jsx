import { useEffect, useState } from "react";
import styled from "styled-components"
import { publicRequest } from "../../../requestMethods/requestMethods";
import ProductCard from "./ProductCard";


const Container = styled.div`
  display: flex;
`


const LoadingScreen = styled.div`
  height: 30vh;
  display: flex;
  align-items: center;
  justify-content: center;
`


const ProductList = ({id, sort, limitPrice, subIds }) => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getProductsOfCategory = async () => {
      try {
        setLoading(true)
        const response = await publicRequest.get(`/products?sort=${sort}&limitprice=${limitPrice}&subIds=${subIds}`)
        setData(response.data)
        setLoading(false)
      }
      catch (err) {
        console.log(err);
        setLoading(false);
      }
    }
    getProductsOfCategory();
  }, [id, sort, limitPrice, subIds])


  return (
    <Container>
    
    {loading ? <LoadingScreen> Refreshing products </LoadingScreen> : 
      data?.map((product) => (
        <ProductCard data={product} key={product._id} />
      ))
    
    }
      
    </Container>
  )
}

export default ProductList