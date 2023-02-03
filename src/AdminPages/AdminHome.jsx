import styled from "styled-components"
import Chart from "../AdminComponents/Chart"
import FeaturedInfo from "../AdminComponents/FeaturedInfo"

const Container = styled.div`
    flex: 5;
    background-color: #f5f7f8;
`

const AdminHome = () => {
  return (
    <Container>
        <FeaturedInfo />
        <Chart />
    </Container>
  )
}

export default AdminHome