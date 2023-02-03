import { KeyboardArrowDown, KeyboardArrowUp, PersonOutline } from "@mui/icons-material"
import styled from "styled-components"

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    margin-top: 10px;
    background-color: white;
    padding: 20px;
`

const Widget = styled.div`
    flex: 1;
    padding: 20px;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
    height: 100px;
    max-width: 320px;
    display: flex;
    justify-content: space-between;
`

const Left = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

const Title = styled.span`
    font-weight: bold;
    font-size: 14px;
    color: gray;
`

const Counter = styled.span`
    font-size: 24px;
    font-weight: 400;
`

const Link = styled.span`
    font-size: 12px;
    border-bottom: 1px solid gray;
    width: max-content;
`


const Right = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`
const Percentage = styled.div`
    display: flex;
    align-items: center;
    font-size: 14px;
    color: ${props => props.positive ? "green" : "red"};
`



const FeaturedInfo = () => {
  return (
    <Container>
        <Widget >
                <Left>
                    <Title> USERS </Title>
                    <Counter> 128 </Counter>
                    <Link> View all users </Link>
                </Left>

                <Right>
                    <Percentage positive> 
                        <KeyboardArrowUp /> 20% 
                    </Percentage>
                    <PersonOutline />
                </Right>
        </Widget>


        <Widget >
                <Left>
                    <Title> Sales </Title>
                    <Counter> 8 </Counter>
                    <Link> View all sales</Link>
                </Left>

                <Right>
                    <Percentage negative> 
                        <KeyboardArrowDown /> 20% 
                    </Percentage>
                    <PersonOutline />
                </Right>
        </Widget>


        <Widget >
      
        </Widget>
    </Container>
  )
}

export default FeaturedInfo