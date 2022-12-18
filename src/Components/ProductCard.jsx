import styled from "styled-components"

const Container = styled.div`
  margin: 10px 5px;
`

const Wrapper = styled.div`
  background-color: aliceblue;
  max-width: 280px;
  padding: 20px 0px;
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
  margin: 10px;
`
const Price = styled.span`
  font-size: 24px;
  font-weight: 700;
  margin: 10px;
`




const ProductCard = ({ data }) => {
  return (
    <Container >
      <Wrapper>
        <Image src={data.img} />

        <Title> {data.title} </Title>
        <Price> RS {data.price} </Price>

      </Wrapper>
    </Container>
  )
}

export default ProductCard