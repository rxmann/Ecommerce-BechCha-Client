import { ArrowDownward, ArrowUpward } from "@mui/icons-material"
import styled from "styled-components"

const Container = styled.div`

`

const Title = styled.span`

`
const FeaturedItem = styled.div`

`

const PriceWrapper = styled.div`

`
const Price = styled.span`

`

const Rate = styled.span`

`
const SubTitle = styled.span`

`


const FeaturedInfo = () => {
  return (
    <Container>
        <FeaturedItem>
            <Title> Revenue </Title>
            <PriceWrapper> 
                <Price> RS 20000 </Price>
                <Rate> + 17.7 <ArrowUpward />  </Rate>
            </PriceWrapper>
            <SubTitle> Compared to last month </SubTitle>
        </FeaturedItem>

        <FeaturedItem>
            <Title> Sales </Title>
            <PriceWrapper> 
                <Price> RS 200000 </Price>
                <Rate> + 20 <ArrowUpward/>  </Rate>
            </PriceWrapper>
            <SubTitle> Compared to last month </SubTitle>
        </FeaturedItem>


        <FeaturedItem>
            <Title> Cost </Title>
            <PriceWrapper> 
                <Price> RS 150000 </Price>
                <Rate> + 15 <ArrowUpward/>  </Rate>
            </PriceWrapper>
            <SubTitle> Compared to last month </SubTitle>
        </FeaturedItem>

    </Container>
  )
}

export default FeaturedInfo