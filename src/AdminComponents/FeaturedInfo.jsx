import { ArrowDownward, ArrowUpward } from "@mui/icons-material"
import styled from "styled-components"

const Container = styled.div`
    width: 100%;
    display: flex;
    margin-top: 10px;
    /* justify-content: space-between; */
`

const FeaturedItem = styled.div`
    flex: 1;
    margin: 0px 20px;
    padding: 30px;
    border-radius: 10px;
    cursor: pointer;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
`

const Title = styled.span`
    font-size: 20px;
    font-weight: 400;
`

const PriceWrapper = styled.div`
    margin: 10px 0px;
    display: flex;
    align-items: center;
`
const Price = styled.span`
    font-size: 24px;
    font-weight: 600;
`

const Rate = styled.span`
    display: flex;
    align-items: center;
    margin-left: 20px;
`
const SubTitle = styled.span`
    font-size: 15px;
    color: #aaaaaa;
`

const Icon = styled.div`
    font-size: 14px;
    margin-left: 5px;
    color: ${props => props.negative ? "red" : "green"};
`



const FeaturedInfo = () => {
  return (
    <Container>
        <FeaturedItem>
            <Title> Revenue </Title>
            <PriceWrapper> 
                <Price> RS 2,000 </Price>
                <Rate> + 17.7 <Icon > <ArrowUpward /> </Icon>  </Rate>
            </PriceWrapper>
            <SubTitle> Compared to last month </SubTitle>
        </FeaturedItem>

        <FeaturedItem>
            <Title> Sales </Title>
            <PriceWrapper> 
                <Price> RS 20,000 </Price>
                <Rate> + 20 <Icon> <ArrowUpward /> </Icon>  </Rate>
            </PriceWrapper>
            <SubTitle> Compared to last month </SubTitle>
        </FeaturedItem>


        <FeaturedItem>
            <Title> Cost </Title>
            <PriceWrapper> 
                <Price> RS 15,000 </Price>
                <Rate> + 15 <Icon negative> <ArrowDownward /> </Icon> </Rate>
            </PriceWrapper>
            <SubTitle> Compared to last month </SubTitle>
        </FeaturedItem>

    </Container>
  )
}

export default FeaturedInfo