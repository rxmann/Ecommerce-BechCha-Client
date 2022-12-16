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
    display: flex;
    flex-wrap: wrap;
`

const TopSales = () => {

    const data = [
        {
          id: 0,
          img: "https://github.com/rxmxndai/rxmxndai-assets/blob/main/assets/G24F2.png?raw=true",
          title: "Dashain Sale",
          desc: "DON'T COMPROMISE ON TECH! GET FLAT 30% OFF FOR NEW MODELS",
        }
      ];


  return (
    <Container>
        <Title>
            Top Sold Products
        </Title>

        <Wrapper>
            { data.map(element => (
                <ProductCard data={element} />
            )) }
        </Wrapper>
    </Container>
  )
}

export default TopSales