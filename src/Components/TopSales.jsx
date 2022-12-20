import styled from 'styled-components'
import ProductCard from './ProductCard'

const Container = styled.div`
    padding: 10px 50px;
`

const Title = styled.h1`
    color: #0171b6;
    display: table;
    padding: 10px;
    font-weight: 700;
    font-size: 24px;
    border-bottom: 3px solid #0171b6;
`

const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
`

const TopSales = () => {

    const data = [
        {
          id: 0,
          img: "https://github.com/rxmxndai/rxmxndai-assets/blob/main/assets/G24F2.png?raw=true",
          title: "Gigabyte G24F-2 180hz (OC)",
          price: 36000
        }
      ];


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