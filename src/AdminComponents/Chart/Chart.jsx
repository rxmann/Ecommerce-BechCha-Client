import styled from "styled-components"

const Container = styled.div`
    box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
    margin: 20px;
    padding: 20px;
`

const Title = styled.div`
   margin-bottom: 20px; 
`


const Chart = () => {
  return (
    <Container>
        <Title> Sales Analytics </Title>

    </Container>
  )
}

export default Chart