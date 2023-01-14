import styled from "styled-components"



const Container = styled.div`
    flex: 1;
    background-color: #f5f7f8;
    height: 400px;

`

const OptionItem = styled.div`
  height: 50px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  margin-right: 50px;
  cursor: pointer;
`

const Item = styled.h1`
  color: #0171b6;
  font-weight: 400;
`

const LeftNav = () => {
  return (
    <Container>
      <OptionItem> <Item> Profile </Item> </OptionItem>
      <OptionItem> <Item> Order Details </Item></OptionItem>
      <OptionItem>  <Item> Account Settings </Item></OptionItem>
    </Container>
  )
}

export default LeftNav