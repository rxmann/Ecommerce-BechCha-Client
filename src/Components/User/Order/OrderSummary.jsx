import { Button } from "@mui/material"
import styled from "styled-components"

const SummaryWrapper = styled.div`
    flex: 1;
    padding: 10px 20px;
    display: flex;
    flex-direction: column;
    gap: 30px;
`

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`

const BillingProfile = styled.div`
  display: flex;
  flex-direction: column;
  gap:5px;
`

const Item = styled.div`
  display: flex;
`

const SummaryName = styled.span`
    flex: 1;
    color: gray;
    font-weight: 500;
`

const SummaryValue = styled.span`
    flex: 1;
    font-size:${props => props.size ? props.size : "16px"};
    color: ${props => props.color && props.color};
    font-weight: ${props => props.weight ? props.weight : 400};
`
const Titled = styled.h3`
  color: #aaaaaa;
  padding: 10px;
  border-radius: 12px;
`

const TotalPayableDiv = styled.div`
  margin: 20px 0px;
`


const OrderSummary = ({data: order, Sum}) => {

    return (

        <SummaryWrapper>
            <Titled> Order Summary</Titled>
            <UserInfo>
                <Item>
                    <SummaryName> Shipping Address  </SummaryName>
                    <SummaryValue > Mandikhatar, Kathmandu </SummaryValue>
                </Item>
                <Item>
                    <SummaryName> Blling Address  </SummaryName>
                    <SummaryValue > Mandikhatar, Kathmandu </SummaryValue>
                </Item>
                <Item>
                    <SummaryName> Recipient  </SummaryName>
                    <SummaryValue > {order.user?.username} </SummaryValue>
                </Item>
                <Item>
                    <SummaryName> Contacts  </SummaryName>
                    <SummaryValue > {order.user?.contacts} </SummaryValue>
                </Item>
                <Item>
                    <SummaryName>Total Items </SummaryName>
                    <SummaryValue > {order.totalItems} </SummaryValue>
                </Item>
                <Item>
                    <SummaryName> Payment Type </SummaryName>
                    <SummaryValue > {order?.paymentType ? order?.paymentType : "Cash-on-delivery"}  </SummaryValue>
                </Item>
                <Item>
                    <SummaryName> Payment Status </SummaryName>
                    <SummaryValue > <Button variant="contained" color={order?.isPaid ? "success" : "error"} >{order?.isPaid ? "Paid" : "Not Paid"}</Button>  </SummaryValue>
                </Item>
            </UserInfo>


            <BillingProfile>
                <Item>
                    <SummaryName> Sub Total </SummaryName>
                    <SummaryValue > RS {Sum} </SummaryValue>
                </Item>
                <Item>
                    <SummaryName> Delivery  </SummaryName>
                    <SummaryValue > RS 200 </SummaryValue>
                </Item>
                <TotalPayableDiv>
                    <Item>
                        <SummaryValue color={"#0171b6"} size={"20px"} weight={"800"} > Total Payable </SummaryValue>
                        <SummaryValue color={"#0171b6"} size={"20px"} weight={"800"}> NPR {order.payable} </SummaryValue>
                    </Item>
                </TotalPayableDiv>
            </BillingProfile>
        </SummaryWrapper>
    )
}

export default OrderSummary