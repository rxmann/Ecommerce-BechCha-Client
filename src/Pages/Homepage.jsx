import Announcement from "../Components/Announcement"
import Navbar from "../Components/Navbar"
import FeaturedSlider from "../Components/FeaturedSlider"
import Categories from "../Components/Categories"
import styled from "styled-components"
import Newsletter from "../Components/Newsletter"
import Footer from "../Components/Footer"

const Container = styled.div`
  
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
        <Newsletter />
        <Footer />
      </Wrapper>
    </Container>
  )
}

export default Homepage