import styled from "styled-components"

const Card = styled.div`
    box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
    border-radius: 10px;
    background-color: white;
    width: 100%;
    height: 600px;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Orders = () => {


    return (
        <Card>
            No orders recorded.
        </Card>
    )
}

export default Orders