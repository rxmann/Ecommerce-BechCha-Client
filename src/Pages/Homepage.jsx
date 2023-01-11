import Announcement from "../Components/SubComponents/Announcement"
import FeaturedSlider from "../Components/FeaturedSlider"
import Categories from "../Components/Category/Categories"
import styled from "styled-components"
import Newsletter from "../Components/SubComponents/Newsletter"
import TopSales from "../Components/TopSales"



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