import Announcement from "../Components/Announcement"
import Navbar from "../Components/Navbar"
import FeaturedSlider from "../Components/FeaturedSlider"
import Categories from "../Components/Categories"
import styled from "styled-components"
import Newsletter from "../Components/Newsletter"

const Container = styled.div`
  
`

const Homepage = () => {
  return (
    <Container>
        <Announcement />
        <Navbar />
        <FeaturedSlider />
        <Categories />
        <Newsletter />
    </Container>
  )
}

export default Homepage