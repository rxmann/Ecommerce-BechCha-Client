import styled from "styled-components"

const Card = styled.div`
    box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
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