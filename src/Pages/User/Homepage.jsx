import Announcement from "../../Components/User/Layout/Announcement"
import FeaturedSlider from "../../Components/User/Essentials/FeaturedSlider"
import Categories from "../../Components/User/Category/Categories"
import styled from "styled-components"
import Newsletter from "../../Components/User/Layout/Newsletter"
import TopSales from "../../Components/User/Essentials/TopSales"



// #9cb2e0
// #0171b6


const Container = styled.div`
  background-color: #F5F7F8;
`

const Wrapper = styled.div`

`

const Homepage = () => {
  return (
    <Container>
      <Wrapper>
        <Announcement />
        <FeaturedSlider />
        <Categories />
        <TopSales />
        <Newsletter />
      </Wrapper>
    </Container>
  )
}

export default Homepage