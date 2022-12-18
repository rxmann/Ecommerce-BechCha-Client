import styled from "styled-components"

const Container = styled.div`
  margin: 10px 5px;
`

const Wrapper = styled.div`
  background-color: aliceblue;
  max-width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Image = styled.img`
  overflow: hidden;
  object-fit: center;
  width: 100%;
  height: 100%;
`
const Title = styled.h2`
  font-size: 18px;
  font-weight: 500;
`
const Price = styled.span`
  font-size: 16px;
  font-weight: 400;
`




const ProductCard = ({ data }) => {
  return (
    <Container >
      <Wrapper>
        <Image src={data.img} />

        <Title> {data.title} </Title>
        <Price> {data.price} </Price>

      </Wrapper>
    </Container>
  )
}

export default ProductCard