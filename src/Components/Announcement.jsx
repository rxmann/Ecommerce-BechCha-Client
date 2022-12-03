import styled from "styled-components"

const Container = styled.div`
    width: 100%;
    background-color: #0171b6;
    height: 30px;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
`
const Title = styled.h1`
    font-size: 18px;
    font-weight: 400;
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