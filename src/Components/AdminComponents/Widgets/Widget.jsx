import styled from "styled-components"
import { AccountBalanceWallet, KeyboardArrowDown, KeyboardArrowUp, MonetizationOnOutlined, PersonOutline, ShoppingCart } from "@mui/icons-material"


const Container = styled.div`
    flex: 1;
    padding: 20px;
    border-radius: 10px;
    background-color: white;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
    height: 100px;
    display: flex;
    justify-content: space-between;
`

const Left = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

const Title = styled.span`
    font-weight: 500;
    font-size: 18px;
    color: gray;
`

const Counter = styled.span`
    font-size: 20px;
    font-weight: 400;
`

const Count = styled.span`
    font-size: 14px;
    font-weight: 400;
    margin-left: 10px;
`

const Link = styled.span`
    font-size: 12px;
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
    font-size: 16px;
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

const Widget = ({ type, data }) => {
    let widgetData;

    switch (type) {
        case "EARNINGS":
            widgetData = {
                title: "EARNINGS",
                isMoney: true,
                amount: data?.totalSalesThisMonth,
                prevData: data?.totalSalesLastMonth,
                percent: data?.result,
                icon: (<MonetizationOnOutlined />),
                theme: {
                    background: "rgba(0, 128, 0, 0.2)",
                    color: "green"
                }
            }
            break;
        case "ORDERS":
            widgetData = {
                 title: "ORDERS",
                isMoney: false,
                link: "View all orders",
                icon: (<ShoppingCart />),
                amount: data?.ThisMonthCount,
                prevData: data?.LastMonthCount,
                percent: data?.orderCountDifference,
                theme: {
                    background: "rgba(45, 34, 201, 0.2)",
                    color: "#0171b6",
                }
            }
            break;
        case "USERS":
            widgetData = {
                title: "USERS",
                isMoney: false,
                amount: data?.ThisMonthCount,
                prevData: data?.LastMonthCount,
                percent: data?.userCountDifference,
                link: "View all users",
                icon: (<PersonOutline />),
                theme: {
                    color: "crimson",
                    background: "rgba(255, 0, 0, 0.2)",
                }
            }
            break;
        case "BALANCE":
            widgetData = {
                title: "BALANCE",
                isMoney: true,
                amount: data?.orderAmountNow,
                prevData: data?.orderAmountPrev,
                percent: data?.orderAmountDifference,
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
                <Title> {widgetData.title} </Title>
                <Counter> {widgetData.isMoney ? "RS" : ""} {widgetData.amount} </Counter>
                <Link> Compared to last month's <Count> {widgetData.isMoney ? "RS" : ""} {widgetData.prevData} </Count> </Link>
            </Left>
            <Right>
                <Percentage positive={widgetData.percent > 0 && true}>
                    {widgetData.percent > 0 ? <KeyboardArrowUp /> : <KeyboardArrowDown />} {Math.round(widgetData.percent)}%
                </Percentage>
                <Icon color={widgetData.theme.color} background={widgetData.theme.background}>
                    {widgetData.icon}
                </Icon>
            </Right>
        </Container>
    )
}

export default Widget