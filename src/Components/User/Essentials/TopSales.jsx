import { useEffect, useState } from 'react'
import styled from 'styled-components'
import ProductCard from '../Products/ProductCard'
import { getAllProducts } from '../../../ApiCalls/ProductApiCalls'
import Fetching from '../EmptyView/Fetching'

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
    const [data, setData] = useState()

    useEffect(() => {
        const getTopSold = async () => {
            const prods = await getAllProducts({limit: 5})
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
            : <Fetching type={"Empty"} />
            }
        </Wrapper>
    </Container>
  )
}

export default TopSales