import styled from "styled-components"


const Container = styled.div`
    flex: 5;
    padding: 20px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
`

const Title = styled.h1`
    font-size: 24px;
    font-weight: 500;
    color: gray;
`

const TopWrapper = styled.div`
    background-color: #ffffff;
    display: flex;
    gap: 30px;
`

const Left = styled.div`
    flex: 1;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
`

const Right = styled.div`
    flex: 1;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
`


const BottomWrapper = styled.div`
    background-color: #ffffff;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
`
const ProductDetails = () => {
  return (
    <Container>
      <Title> Product Details </Title>
      <TopWrapper>
        <Left>
          l
        </Left>
        <Right>
          r
        </Right>
      </TopWrapper>


      <BottomWrapper>
            B
      </BottomWrapper>
    </Container>
  )
}

export default ProductDetails