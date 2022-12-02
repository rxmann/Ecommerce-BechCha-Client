import styled from "styled-components"

const Container = styled.div`
    /* margin: 0px 50px; */
    background-color: #295b68;
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