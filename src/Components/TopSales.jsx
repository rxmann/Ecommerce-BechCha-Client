import styled from 'styled-components'
import ProductCard from './ProductCard'

const Container = styled.div`
    padding: 0px 50px;
`

const Title = styled.h1`
    color: #0171b6;
    display: table;
    padding-bottom: 10px;
    font-weight: 700;
    font-size: 24px;
    border-bottom: 3px solid #0171b6;
`

const Wrapper = styled.div`
  
`

const TopSales = () => {
  return (
    <Container>
        <Title>
            Top Sold Products
        </Title>

        <Wrapper>
            <ProductCard />
        </Wrapper>
    </Container>
  )
}

export default TopSales