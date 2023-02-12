import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"

const Container = styled.div`
  margin: 20px 50px;
`

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
  height: 70px;
`

const Item = styled.div`
    cursor: pointer;
    padding: 20px 50px;
    font-size: 16px;
    font-weight: 600;
    color: #aaaaaa;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 60px;
    display: table;
    transition: all 0.3s ease-in;
`
const ItemSelected = styled.div`
    cursor: pointer;
    padding: 20px 50px;
    font-size: 16px;
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 60px;
    display: table;
    transition: all 0.3s ease-in;
    border-bottom: 3px solid #0171b6;
    color: #0171b6;
`

const ProfilePage = () => {

  const navigate = useNavigate();
  const [selected, setSelected] = useState("/profile/me");

  const navItems = [
    {
      title: "Profile",
      goto: "/profile/me"
    },
    {
      title: "Cart",
      goto: "/profile/cart/me"
    },
    {
      title: "Orders",
      goto: "/profile/orders/me"
    },
    {
      title: "Account",
      goto: "/profile/account/me"
    }
  ]


  const handleNavigate = (item) => {
    setSelected(item.goto)
  }

  useEffect(() => {
    const changeLayout = () => {
      navigate(selected);
    }
    changeLayout();
  }, [selected])


  return (
    <Container>
      <Wrapper>
          {navItems.map((item) => (
            item.goto !== selected ?
            <Item key={item.title} onClick={() => handleNavigate(item)} > {item.title} </Item>
            : <ItemSelected key={item.title} onClick={ () => handleNavigate(item)} >  {item.title} </ItemSelected>
          ))}
      </Wrapper>
    </Container>
  )
}

export default ProfilePage