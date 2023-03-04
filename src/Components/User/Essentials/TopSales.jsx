import { useEffect, useState } from 'react'
import styled from 'styled-components'
import ProductCard from '../Products/ProductCard'
import { getAllProducts } from '../../../ApiCalls/ProductApiCalls'

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
const LoadingScreen = styled.div`
  height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
`

const TopSales = () => {
    const [data, setData] = useState()

    useEffect(() => {
        const getTopSold = async () => {
            const prods = await getAllProducts({limit: 6})
            setData(prods)
        }

        getTopSold();
    }, [])

  return (
    <Container>
        <Title>
            Top Sold Products
        </Title>

        <Wrapper>
            {data?.length > 0 ?  
                data?.map(element => (
                    <ProductCard data={element} key={element._id} /> ))
            : <LoadingScreen> Retrieving products... </LoadingScreen>
            }
        </Wrapper>
    </Container>
  )
}

export default TopSales