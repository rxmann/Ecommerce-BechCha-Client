import Announcement from "../Components/Announcement"
import Navbar from "../Components/Navbar"
import FeaturedSlider from "../Components/FeaturedSlider"
import Categories from "../Components/Category/Categories"
import styled from "styled-components"
import Newsletter from "../Components/Newsletter"
import Footer from "../Components/Footer"
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
        <Navbar />
        <FeaturedSlider />
        <Categories />
        <TopSales />
        <Newsletter />
        <Footer />
      </Wrapper>
    </Container>
  )
}

export default Homepage