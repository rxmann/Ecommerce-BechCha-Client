import styled from "styled-components"
import {AccountCircle  } from "@mui/icons-material"
import { Link, useNavigate} from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { Button } from "@mui/material"
import { publicRequest } from "../../../requestMethods/requestMethods"
import { setToken } from "../../../Redux/apiCalls"
 

const Container = styled.div`
    width: 100%;
    height: 70px;
    box-shadow: 0 2px 2px -2px rgba(0,0,0,.2);
    position: sticky;
    top: 0;
    z-index: 3;
    background-color: white;
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


const Topbar = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();


    const { currentUser, isSignedIn } = useSelector(state => state.user);

    const handleProfile = () => {
        if (!isSignedIn || !currentUser) {
            navigate("/login");
          }
        else {
            navigate(`/profile/${currentUser._id}`);
        }
    }


  return (
    <Container>
        <Wrapper>
            <Left > 
                <Link to={"/admin/dashboard"}>
                <Logo 
                    src='https://github.com/rxmxndai/rxmxndai-assets/blob/main/assets/Bech_Cha.png?raw=true'/>
                </Link>
            </Left>
            <Right>
                {/* <IconContainer>
                    <DarkModeOutlined />
                </IconContainer>
                <IconContainer>
                    <ChatBubbleOutlineOutlined />
                    <SpanBadge>2</SpanBadge>
                </IconContainer>
                <IconContainer>
                    <NotificationsNone />
                    <SpanBadge> 2 </SpanBadge>
                </IconContainer> */}

                    <Button onClick={async () => {
                            const access = await publicRequest.get("/users/refresh");
                            console.log(access.data.accessToken);
                            setToken(dispatch, access.data.accessToken)

                        }}> REFRESH </Button>
                <IconContainer onClick={handleProfile}>
                    <AccountCircle />
                </IconContainer>
            </Right>
        </Wrapper>
    </Container>
  )
}

export default Topbar