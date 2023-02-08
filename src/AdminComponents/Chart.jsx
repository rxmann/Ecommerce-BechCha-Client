import styled from "styled-components"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';



const Container = styled.div`
    padding: 20px;
    background-color: #ffffff;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

const Title = styled.span`
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 30px;
`


const Chart = ({data, title, grid, dataKey}) => {

  return (
    <Container>
        <Title> {title} </Title>
        <ResponsiveContainer width="95%" aspect={4 / 1}>
            <LineChart data={data} >
              <XAxis dataKey="name" stroke="#0171b6" />
              <Line type={"monotone"} dataKey={dataKey} stroke="#0171b6"/>
              <YAxis />
              <Tooltip />
              {grid && <CartesianGrid stroke="#e0dfdf" strokeDasharray="3 3"/>}
            </LineChart>
        </ResponsiveContainer>
    </Container>
  )
}

export default Chart