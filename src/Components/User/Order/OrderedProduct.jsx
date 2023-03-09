import { useNavigate } from "react-router-dom"
import styled from "styled-components"

const Container = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 10px;
`
const Title = styled.h3`
    color: #aaaaaa;
    padding: 10px;
    border-radius: 12px;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
`

const Wrapper = styled.div`
    display: flex;
`

const ItemsList = styled.div`
    padding: 10px 0px;
    width: 100%;
`
const ProductImage = styled.img`
    max-width: 60px;
    cursor: pointer;
    max-height: 60px;
    &:hover{
        transform: scale(1.1, 1.1);
    }
`
const ItemHeadContainer = styled.div`
    display: flex;
    width: 100%;
    padding: 10px 0px;
    font-weight: 700;
    background-color: #f5f7f8;
`

const ItemContainer = styled.div`
    display: flex;
    width: 100%;
    padding: 10px 0px;
`

const ItemH = styled.span`
    flex: ${props => props.flex};
    display: flex;
    font-weight: 500;
    align-items: center;
    justify-content: center;
    gap: 30px;
`

const ItemC = styled.span`
    flex: ${props => props.flex};
    font-weight: ${props => props.fw ? props.fw : 400};
    font-size: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap:  50px;
`


const OrderedProduct = ({ data }) => {
    const navigate = useNavigate();

    return (
        <Container>
            <Title> Ordered Items </Title>
            <Wrapper>
                <ItemsList>

                    <ItemHeadContainer>
                        <ItemH flex={2}>  </ItemH>
                        <ItemH flex={2}> Product </ItemH>
                        <ItemH flex={1}> Quantity </ItemH>
                        <ItemH flex={1}> Price </ItemH>
                    </ItemHeadContainer>


                    {data && data.products &&
                        data.products.map((item) => (
                            <ItemContainer key={item.product._id}>
                                <ItemC flex={2}>
                                    <ProductImage onClick={() => navigate(`/product/${item.product._id}`)} src={item.product?.images[0]?.url} />
                                </ItemC>
                                <ItemC flex={2}>
                                    <ItemC>{item.product.title}</ItemC>
                                </ItemC>
                                <ItemC flex={1}>
                                    {item.quantity}
                                </ItemC>
                                <ItemC flex={1} fw={500}>
                                    {item.price}
                                </ItemC>
                            </ItemContainer>
                        ))
                    }
                </ItemsList>
            </Wrapper>
        </Container>
    )
}

export default OrderedProduct