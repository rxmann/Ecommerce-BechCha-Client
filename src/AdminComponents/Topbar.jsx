import styled from "styled-components"
import {AccountCircle, ChatBubbleOutlineOutlined, DarkModeOutlined, NotificationsNone } from "@mui/icons-material"

const Container = styled.div`
    width: 100%;
    height: 70px;
    box-shadow: 0 2px 2px -2px rgba(0,0,0,.2);
    position: sticky;
    top: 0;
`

const Wrapper = styled.div`
    height: 100%;
    padding: 0px 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const Left = styled.div`

`


const Logo = styled.img`
    width: 100px;
    cursor: pointer;
`


const Right = styled.div`
    display: flex;
    align-items: center;
`

const IconContainer = styled.div`
    cursor: pointer;
    color: #0171b6;
    position: relative;
    margin-left: 20px;
`

const SpanBadge = styled.span`
    position: absolute;
    top: -5px;
    right: 0px;
    color: white;
    background-color: red;
    border-radius: 50%;
    width: 15px;
    height: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
`



const Topbar = () => {
  return (
    <Container>
        <Wrapper>
            <Left> 
                <Logo src='https://github.com/rxmxndai/rxmxndai-assets/blob/main/assets/Bech_Cha.png?raw=true'/>
            </Left>
            <Right>
                <IconContainer>
                    <DarkModeOutlined />
                </IconContainer>
                <IconContainer>
                    <ChatBubbleOutlineOutlined />
                    <SpanBadge>2</SpanBadge>
                </IconContainer>
                <IconContainer>
                    <NotificationsNone />
                    <SpanBadge> 2 </SpanBadge>
                </IconContainer>
                <IconContainer>
                    <AccountCircle />
                </IconContainer>
            </Right>
        </Wrapper>
    </Container>
  )
}

export default Topbar