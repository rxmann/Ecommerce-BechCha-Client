import { Button } from "@mui/material"
import styled from "styled-components"

const Container = styled.div`
    flex: 4;
    display: flex;
    flex-direction: column;
    padding: 10px;
`
const Title = styled.h3`
    color: #aaaaaa;
`

const Wrapper = styled.div`
    display: flex;
`

const ItemsList = styled.div`
    padding: 10px;
    width: 100%;
`
const ProductImage = styled.img`
    width: 100px;
    cursor: pointer;
`


const ItemContainer = styled.div`
    display: flex;
    width: 100%;
`

const ItemH = styled.span`
    flex: ${props => props.flex};
    font-size: 16px;
    font-weight: 500;
    display: flex;
    align-items: center;
    gap: 30px;
`

const ItemC = styled.span`
    flex: ${props => props.flex};
    font-weight: ${props => props.fw ? props.fw : 400};
    font-size: 16px;
    display: flex;
    align-items: center;
    gap:  50px;
`





const OrderedProduct = ({ data }) => {


    return (
        <Container>
            <Title> Ordered Items </Title>
            <Wrapper>
                <ItemsList>

                    <ItemContainer>
                        <ItemH flex={2}> Product </ItemH>
                        <ItemH flex={2}> Quantity </ItemH>
                        <ItemH flex={2}> Price </ItemH>
                    </ItemContainer>


                    {data && data.products &&
                        data.products.map((item) => (
                            <ItemContainer>
                                <ItemC flex={2}>
                                    <ProductImage src={item.product?.images[0]?.url} />
                                    <ItemC>{item.product.title}</ItemC>
                                </ItemC>
                                <ItemC flex={2}>
                                    {item.quantity}
                                </ItemC>
                                <ItemC flex={2}> {item.price} </ItemC>
                            </ItemContainer>
                        ))
                    }
                </ItemsList>
            </Wrapper>
        </Container>
    )
}

export default OrderedProduct