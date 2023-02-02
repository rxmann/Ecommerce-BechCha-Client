import styled from "styled-components"
import Chart from "../AdminComponents/Chart"
import FeaturedInfo from "../AdminComponents/FeaturedInfo"

const Container = styled.div`
    flex: 5;
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