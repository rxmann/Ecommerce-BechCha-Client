import styled from "styled-components"

const Container = styled.div`
    flex: 5;
    padding: 20px;
`

const Title = styled.h2`
  color: gray;
`

const SettingsAdmin = () => {
  return (
    <Container>
        <Title> Featured </Title>
        
        <Title> For You </Title>
        <Title> New Arrivals </Title>
    </Container>
  )
}

export default SettingsAdmin