import styled from "styled-components"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const Container = styled.div`
    box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
    margin: 20px 0px;
    padding: 20px;
    background-color: #ffffff;
    display: flex;
    flex-direction: column;
    gap: 20px;
`

const Title = styled.span`
    font-size: 20px;
    font-weight: 600;
`


const Chart = ({data, title, grid, dataKey}) => {

  return (
    <Container>
        <Title> {title} </Title>
      <ResponsiveContainer width="100%" aspect={4 / 1}>
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