import Announcement from "../Components/Announcement"
import Navbar from "../Components/Navbar"
import FeaturedSlider from "../Components/FeaturedSlider"

import styled from "styled-components"

const Container = styled.div`
  
`

const Homepage = () => {
  return (
    <Container>
        <Announcement />
        <Navbar />
        <FeaturedSlider />
        
    </Container>
  )
}

export default Homepage