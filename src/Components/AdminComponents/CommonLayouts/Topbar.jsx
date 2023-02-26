import styled from "styled-components"
import { Link, useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';



const Container = styled.div`
    position: sticky;
    top: 0;
    padding: 0px 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #ffffff;
    z-index: 999;
    box-shadow: 0 2px 2px -2px rgba(0,0,0,.2);
    height: 60px;
`
const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    color: #0171b6;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;  
`

const Logo = styled.img`
    width: 100px;
    cursor: pointer;
    text-decoration: none;
`

const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: end;
`


const Mbtn = styled.div`
    cursor: pointer;
    color: #0171b6;
    margin-left: 30px;
    overflow: hidden;
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
`
const ProfilePic = styled.img`
    object-fit: cover;
    width: 100%;
    height: 100%;
    border-radius: 50%;
`



const Topbar = () => {

    const { currentUser, isSignedIn } = useSelector(state => state.user);
    const navigate = useNavigate();

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
            <Wrapper >
                <Left>
                    <Link to="/">
                        <Logo src='https://github.com/rxmxndai/rxmxndai-assets/blob/main/assets/Bech_Cha.png?raw=true' />
                    </Link>
                </Left>


                <Right>
                   
                    <Mbtn onClick={handleProfile} >
                        {currentUser === null ? <AccountCircleIcon /> : <ProfilePic src={currentUser.image} />}
                    </Mbtn>
                  
                </Right>
            </Wrapper>
        </Container>
    )
}

export default Topbar