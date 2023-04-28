import styled from 'styled-components'
import Badge from '@mui/material/Badge';
import { ShoppingCartOutlined } from '@mui/icons-material';
import CompareIcon from '@mui/icons-material/Compare';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import DashboardIcon from '@mui/icons-material/Dashboard';
import {  OutlinedInput } from '@mui/material';
import { useEffect } from 'react';
import { getIndexedProducts } from '../../../ApiCalls/ProductApiCalls';
import SearchBox from './SearchBox';


const Container = styled.div`
    position: sticky;
    top: 0;
    padding: 0px 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #ffffff;
    z-index: 6;
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
`

const Middle = styled.div`
    flex: 2;
    display: flex;
    align-items: center;
    justify-content: center;
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
    const { products } = useSelector(state => state.compare);

    const quantity = useSelector(state => state.usercart?.totalQuantity)
    const navigate = useNavigate();
    
    const handleProfile = () => {
        if (!isSignedIn || !currentUser) {
            navigate("/login");
        }
        else {
            navigate(`/profile/me`);
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
                   <SearchBox />
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
                    <Mbtn onClick={() => navigate(`/profile/cart/me`)}>
                        <Badge color='error' badgeContent={quantity}  >
                            <ShoppingCartOutlined />
                        </Badge>
                    </Mbtn>
                    <Mbtn onClick={() => navigate("/compare-mylist")}>
                    <Badge color='error' badgeContent={products.length}  >
                        <CompareIcon   />
                        </Badge>
                    </Mbtn>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar