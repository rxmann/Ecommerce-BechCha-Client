import styled from "styled-components"

const Container = styled.div`
    background-color: #508888;
    height: 30px;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
`
const Title = styled.h1`
    font-size: 24px;
`


const Announcement = () => {
  return (
    <Container>
        <Title>
            Offer ! Offer !! Offer !!
        </Title>
    </Container>
  )
}

export default Announcement