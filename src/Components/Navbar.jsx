import styled from 'styled-components'
import Badge from '@mui/material/Badge';
import SearchIcon from '@mui/icons-material/Search';
import { ShoppingCartOutlined } from '@mui/icons-material';
import CompareIcon from '@mui/icons-material/Compare';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ClearIcon from '@mui/icons-material/Clear';
import { useState } from 'react';

const Container = styled.div`
    height: 60px;
    width: 100vw;
    box-shadow: 0 0.2px #999;
`
const Wrapper = styled.div`
    color: #0171B6;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 50px;
`

const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;  
`

const Logo = styled.h1`
    font-size: 24px;
    font-weight: bold;
`

const Middle = styled.div`
    flex: 2;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px 10px;
    height: 40px;
    max-width: 900px;
`

const SearchContainer = styled.div`
    border: 2px solid lightgray;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%; 
`
const Searchicon = styled(SearchIcon)`
    font-size: larger;
    border-right: 0.8px solid lightgray;
    padding: 10px;
`
const SearchBox = styled.input`
    border: none;
    height: 100%;
    padding: 0px 10px;
    outline: none;
    font-size: 20px;
    font-weight: 400;
`

const SearchButton = styled.button`
    background-color: #0171B6;
    color: white;
    cursor: pointer;
    padding: 10px 20px;
    margin: 3px;
    border: none;
    transition: all 0.2s ease-in-out;

    &::after
    {
        transform: translateY(-50%) scale(0.98);
    }

`

const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: end;
`



const Navbar = () => {
    const [search, setSearch] = useState("");



  return (
    <Container>
        <Wrapper>
            <Left>
                <Logo>Bech-cha</Logo>
            </Left>

            <Middle>
                <SearchContainer>
                    <Searchicon/>
                    <SearchBox maxLength={20} onChange={(e) => setSearch(e.value) } name='search' value={search}/>
                    {search !== '' 
                    && <ClearIcon onClick={() => setSearch('')} 
                    style={{cursor: 'pointer', width: '40px'}} 
                    />}
                    <SearchButton>Search</SearchButton>
                </SearchContainer>
            </Middle>

            
            <Right>
                    <AccountCircleIcon style={{marginLeft: '20px', cursor: 'pointer'}} />
                    <Badge badgeContent={4} color={"primary"} style={{marginLeft: '20px', cursor: 'pointer'}} > 
                        <ShoppingCartOutlined />
                    </Badge>
                    <CompareIcon style={{marginLeft: '20px', cursor: 'pointer'}} />
            </Right>
        </Wrapper>
    </Container>
  )
}

export default Navbar