import styled from "styled-components"
import FeaturedInfo from "../AdminComponents/FeaturedInfo/FeaturedInfo"

const Container = styled.div`
    flex: 5;
`

const AdminHome = () => {
  return (
    <Container>
        <FeaturedInfo />
    </Container>
  )
}

export default AdminHome