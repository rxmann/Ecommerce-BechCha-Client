import styled from "styled-components"
const data = require("../")

const Container = styled.div`

`

const Wrapper = styled.div`
  background-color: aliceblue;
  height: 40vh;
  margin: 10px 0px;
`
const ImageContainer = styled.div`

`

const Image = styled.img`

`
const Title = styled.h2`

`
const Price = styled.span`

`




const ProductCard = () => {

  const data = [
    {
      id: 0,
      img: "https://github.com/rxmxndai/rxmxndai-assets/blob/main/assets/G24F2.png?raw=true",
      title: "Dashain Sale",
      desc: "DON'T COMPROMISE ON TECH! GET FLAT 30% OFF FOR NEW MODELS",
    },
    {
      id: 1,
      img: "https://github.com/rxmxndai/rxmxndai-assets/blob/main/assets/keyboard.png?raw=true",
      title: "Dashain Sale",
      desc: "DON'T COMPROMISE ON TECH! GET FLAT 30% OFF FOR NEW MODELS",
    },
    {
      id: 2,
      img: "https://github.com/rxmxndai/rxmxndai-assets/blob/main/assets/G24F2.png?raw=true",
      title: "Dashain Sale",
      desc: "DON'T COMPROMISE ON TECH! GET FLAT 30% OFF FOR NEW MODELS",
    },
  ];



  return (
    <Container >
      <Wrapper>
        <ImageContainer> 
          <Image src={data.img}/>
        </ImageContainer>

        <Title>  </Title>
        <Price>  </Price>

      </Wrapper>
    </Container>
  )
}

export default ProductCard