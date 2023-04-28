import { useEffect, useState } from 'react'
import styled from 'styled-components'
import ProductCard from '../Products/ProductCard'
import { getAllProducts } from '../../../ApiCalls/ProductApiCalls'
import Fetching from '../EmptyView/Fetching'

const Container = styled.div`
    padding: 10px 50px;
`

const Wrap = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 20px 0px;
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

const ForYou = () => {
    const [data, setData] = useState()

    useEffect(() => {
        const getTopSold = async () => {
            const prods = await getAllProducts({limit: 7, sort: "quantity"})
            const products = await prods.map((p) => {
                return { ...p, image: p.images[0] }
            })
           
            setData(products)
        }

        getTopSold();
    }, [])

  return (
    <Container>
       <Wrap>
       <Title>
           Only for you!
        </Title>
       </Wrap>

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

export default ForYou