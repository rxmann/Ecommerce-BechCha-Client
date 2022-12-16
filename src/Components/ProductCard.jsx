import styled from "styled-components"
const data = require("../")

const Container = styled.div`
  margin: 10px 5px;
`

const Wrapper = styled.div`
  background-color: aliceblue;
  height: 40vh;
  max-width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const ImageContainer = styled.div`
  overflow: hidden;
  height: 80%;
  width: 90%;
`

const Image = styled.img`
  object-fit: contain;
`
const Title = styled.h2`

`
const Price = styled.span`

`




const ProductCard = ({data}) => {
  return (
    <Container >
      <Wrapper>
        <ImageContainer> 
          <Image src={data.img}/>
        </ImageContainer>

        <Title> {data.title} </Title>
        <Price>  </Price>

      </Wrapper>
    </Container>
  )
}

export default ProductCard