import styled from 'styled-components'
import Badge from '@mui/material/Badge';
import SearchIcon from '@mui/icons-material/Search';
import { ShoppingCartOutlined } from '@mui/icons-material';
import CompareIcon from '@mui/icons-material/Compare';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ClearIcon from '@mui/icons-material/Clear';
import { useState } from 'react';


const Container = styled.div`
    height: 70px;
    width: 100%;
    box-shadow: 0 0.2px #999;
    display: flex;
    align-items: center;
    justify-content: center;
`
const Wrapper = styled.div`
    width: 100%;
    margin: 0px 50px;
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

const Logo = styled.h1`
    font-size: 24px;
    font-weight: bold;
`

const Middle = styled.div`
    flex: 2;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`

const SearchContainer = styled.div`
    border: 0.7px solid lightgray;
    display: flex;
    justify-content:center;
    align-items: center;
    height: 100%; 
    width: 80%;
    box-shadow: 0px 2px 4px #888888;
`
const Searchicon = styled(SearchIcon)`
    font-size: larger;
    border-right: 0.8px solid lightgray;
    padding: 10px;
`
const SearchBox = styled.input`
    flex: 8;
    border: none;
    outline: none;
    padding: 5px;
    margin: 0px 10px;
    font-size: 15px;
    font-weight: 400;
`

const SearchButton = styled.button`
    height: 100%;
    background-color:#0171b6;
    color: white;
    cursor: pointer;
    padding: 10px 20px;
    margin-left: 10px;
    border: none;
    transition: all 0.2s ease-in-out;
    box-shadow: 0px 2px 12px #888888;
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
        <Wrapper >
            <Left>
                <Logo>Bech-cha</Logo>
            </Left>

            <Middle>
                <SearchContainer>
                    <Searchicon/>
                    <SearchBox maxLength={30} onChange={(e) => setSearch(e.value) } name='search' value={search}/>
                    
                    
                    { search === '' ? 
                    <div style={{maxWidth: '20px', backgroundColor: 'red'}} ></div>
                    : <ClearIcon onClick={() => setSearch('')} 
                    style={{cursor: 'pointer', maxWidth: '20px'}} />
                    }
                    <SearchButton>Search</SearchButton>
                </SearchContainer>
            </Middle>

            
            <Right>
                    <AccountCircleIcon style={{marginLeft: '20px', cursor: 'pointer'}} />
                    <Badge badgeContent={4} 
                            color = {'secondary'}
                            style={{margin: '0px 10px', cursor: 'pointer'}} > 
                            <ShoppingCartOutlined />
                    </Badge>
                    <CompareIcon style={{margin: '0px 10px', cursor: 'pointer'}} />
            </Right>
        </Wrapper>
    </Container>
  )
}

export default Navbar