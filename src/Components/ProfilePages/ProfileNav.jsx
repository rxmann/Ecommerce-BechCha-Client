import styled from "styled-components"



const Container = styled.div`
  background-color: #ffffff;
  display: flex;
  width: 100%;
  margin-bottom: 30px;
`

const OptionItem = styled.div`
  cursor: pointer;
  padding: 20px 50px;
`

const Item = styled.h3`
  color: #0171b6;
  font-weight: 300;
`

const ProfileNav = () => {
  return (
    <Container>
      <OptionItem> <Item> Profile </Item> </OptionItem>
      <OptionItem> <Item> Order </Item></OptionItem>
      <OptionItem>  <Item> Account  </Item></OptionItem>
    </Container>
  )
}

export default ProfileNav