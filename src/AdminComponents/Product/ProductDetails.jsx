import styled from "styled-components"
import Chart from "../Chart"
import { productData } from "../../data"
import { Avatar } from "@mui/material"

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
    display: flex;
    align-items: center;
    gap: 20px;
`
const Left = styled.div`
  flex: 1;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
   height: 100%;
   background-color: white;
`

const Right = styled.div`
   flex: 1;
   width: 100%;
   box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
   height: 100%;
   background-color: white;
`

const ProductCard = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px 30px;
    gap: 10px;
`

const ProductNameWrap = styled.h1`
    display: flex;
    gap: 50px;
    font-weight: 500;
    align-items: center;
`

const ProductInfo = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`

const ItemTitle = styled.span`
    font-size: 20px;
    font-weight: 600;
    margin: 10px 0px;
`

const Item = styled.span`
    margin: 5px 0px;
    display: flex;
`
const Label = styled.span`
  flex: 1;
  width: 100px;
  display: flex;
  justify-content: space-between;
  color: gray;
`

const Data = styled.span`
    flex: 1;
    font-weight: 300;
`


const ProductChart = styled.div`
    height: 100%;
`



const BottomWrapper = styled.div`
  box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
`
const ProductDetails = () => {
  return (
    <Container>
      <Title> Product Profile </Title>
      <TopWrapper>
      <Left>
        <ProductChart>
          <Chart title={"Sale Analytics"} data={productData} dataKey={"Sales"} />
        </ProductChart>
        </Left>

        <Right>

        <ProductCard>
          <ItemTitle> Product Info </ItemTitle>
          <ProductNameWrap>
            <Avatar alt="Rxman" src={""} sx={{ width: 60, height: 60 }} />
            <Data> Apple  </Data>
          </ProductNameWrap>
          <ProductInfo>
            
            <Item>
              <Label>Id</Label>
              <Data> 0971231123213123 </Data>
            </Item>
            <Item>
              <Label>Sales</Label>
              <Data> 1500 </Data>
            </Item>
            <Item>
              <Label> InStock</Label>
              <Data>30 </Data>
            </Item>
            <Item>
              <Label> Current Price</Label>
              <Data>200 </Data>
            </Item>
          </ProductInfo>
        </ProductCard>
        </Right>
        
      </TopWrapper>


      <BottomWrapper>
        
      </BottomWrapper>
    </Container>
  )
}

export default ProductDetails