import styled from "styled-components"
import { AccountBalanceWallet, KeyboardArrowDown, KeyboardArrowUp, MonetizationOnOutlined, PersonOutline, ShoppingCart } from "@mui/icons-material"


const Container = styled.div`
    flex: 1;
    padding: 20px;
    border-radius: 10px;
    background-color: white;
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
    cursor: pointer;
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
const Icon = styled.button`
    font-size: 18px;
    padding: 5px;
    align-self: flex-end;
    border-radius: 5px;
    cursor: pointer;
    border: none;
    color: ${props => props.color && props.color};
    background-color: ${props => props.background && props.background};
`

const Widget = ({ type }) => {

    let data;

    const amount = 100;
    const percent = 10;

    switch (type) {
        case "USERS":
            data = {
                title: "USERS",
                isMoney: false,
                link: "View all users",
                icon: (<PersonOutline />),
                theme: {
                    color: "crimson",
                    background: "rgba(255, 0, 0, 0.2)",
                }
            }
            break;
        case "ORDERS":
            data = {
                title: "ORDERS",
                isMoney: true,
                link: "View all orders",
                icon: (<ShoppingCart />),
                theme: {
                    background: "rgba(45, 34, 201, 0.2)",
                    color: "#0171b6",
                }
            }
            break;
        case "EARNINGS":
            data = {
                title: "EARNINGS",
                isMoney: true,
                link: "View net earning",
                icon: (<MonetizationOnOutlined />),
                theme: {
                    background: "rgba(0, 128, 0, 0.2)",
                    color: "green"
                }
            }
            break;
        case "BALANCE":
            data = {
                title: "BALANCE",
                isMoney: true,
                link: "View details",
                icon: (<AccountBalanceWallet />),
                theme: {
                    background: "rgba(218, 165, 32, 0.2)",
                    color: "goldenrod",
                }
            }
            break;
        default:
            break;
    }


    return (
        <Container >
            <Left>
                <Title> {data.title} </Title>
                <Counter> {data.isMoney && "$"} {amount} </Counter>
                <Link> {data.link} </Link>
            </Left>

            <Right>
                <Percentage positive={percent > 0 && true}>
                    {percent > 0 ? <KeyboardArrowUp /> : <KeyboardArrowDown />} {percent}
                </Percentage>
                <Icon color={data.theme.color} background={data.theme.background}>
                    {data.icon}
                </Icon>
            </Right>
        </Container>
    )
}

export default Widget