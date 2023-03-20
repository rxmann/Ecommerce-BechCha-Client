import styled from "styled-components"
import ProductCard from "./ProductCard";


const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const ProductList = ({ data}) => {

  return (
    <Container>
        {data?.map((product) => (
          <ProductCard data={product} key={product._id} />
        ))}
      
    </Container>
  )
}

export default ProductList