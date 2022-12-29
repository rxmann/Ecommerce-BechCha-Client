import styled from 'styled-components'
import { data } from '../data'
import ProductCard from './Products/ProductCard'

const Container = styled.div`
    padding: 10px 50px;
`

const Title = styled.h1`
    color: #0171b6;
    display: table;
    padding: 20px;
    font-weight: 700;
    font-size: 24px;
    border-bottom: 3px solid #0171b6;
`

const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
`

const TopSales = () => {
  return (
    <Container>
        <Title>
            Top Sold Products
        </Title>

        <Wrapper>
            { data.map(element => (
                <ProductCard data={element} key={element.id} />
            )) }
        </Wrapper>
    </Container>
  )
}

export default TopSales