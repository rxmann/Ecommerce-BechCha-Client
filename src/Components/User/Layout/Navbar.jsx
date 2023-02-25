import styled from 'styled-components'
import Badge from '@mui/material/Badge';
import SearchIcon from '@mui/icons-material/Search';
import { ShoppingCartOutlined } from '@mui/icons-material';
import CompareIcon from '@mui/icons-material/Compare';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ClearIcon from '@mui/icons-material/Clear';
import { useState } from 'react';
import Button from '@mui/material/Button';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import DashboardIcon from '@mui/icons-material/Dashboard';
import { InputAdornment, OutlinedInput } from '@mui/material';
import { publicRequest } from '../../../requestMethods/requestMethods';
import { setToken } from '../../../Redux/apiCalls';


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

const Middle = styled.div`
    flex: 2;
    display: flex;
    align-items: center;
    justify-content: center;
`

const SearchContainer = styled.div`
    width: 70%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    gap: 5px;
`
const SearchBox = styled(OutlinedInput)`
    width: 100%;
`

const SearchButton = styled(Button)`
    margin-right: 20px;
`
const Clear = styled(ClearIcon)`
    cursor: pointer;
    color: #0171b6;
`

const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: end;
`
const Span = styled.span`
    cursor: pointer;
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



const Navbar = () => {

    const { currentUser, isSignedIn } = useSelector(state => state.user);
    const quantity = useSelector(state => state.cart.quantity)
    const navigate = useNavigate();
    const [search, setSearch] = useState("");
    const dispatch = useDispatch();

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

                <Middle>
                    <SearchContainer>
                        <SearchBox
                            size="small"
                            maxLength={30}
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            endAdornment={
                                <InputAdornment position="end">
                                    {search && <Clear onClick={() => setSearch('')} />}
                                </InputAdornment>
                            }
                            startAdornment={
                                <InputAdornment position="start">
                                    <SearchIcon color="info" />
                                </InputAdornment>
                            }
                        />
                        <SearchButton variant='contained'>Search</SearchButton>
                        <Button onClick={async () => {
                            const access = await publicRequest.get("/users/refresh");
                            setToken(dispatch, access.data.accessToken)

                        }}> REFRESH </Button>
                    </SearchContainer>
                </Middle>


                <Right>
                    <Mbtn>
                        {currentUser?.isAdmin && <DashboardIcon onClick={() => navigate("/admin/dashboard")} />}
                    </Mbtn>
                    <Mbtn>
                        <Span>NP</Span>
                    </Mbtn>
                    <Mbtn onClick={handleProfile} >
                        {currentUser === null ? <AccountCircleIcon /> : <ProfilePic src={currentUser.image} />}
                    </Mbtn>
                    <Mbtn onClick={() => navigate(`/profile/cart/${currentUser._id}`)}>
                        <Badge badgeContent={quantity}  >
                            <ShoppingCartOutlined />
                        </Badge>
                    </Mbtn>
                    <Mbtn>
                        <CompareIcon />
                    </Mbtn>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar