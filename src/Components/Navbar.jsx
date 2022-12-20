import styled from 'styled-components'
import Badge from '@mui/material/Badge';
import SearchIcon from '@mui/icons-material/Search';
import { ShoppingCartOutlined } from '@mui/icons-material';
import CompareIcon from '@mui/icons-material/Compare';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ClearIcon from '@mui/icons-material/Clear';
import { useState } from 'react';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
    height: 70px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #ffffff;
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
    flex: 1;
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

const SearchButton = styled(Button)`
    cursor: pointer;
    color: #0171b6;
`

const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: end;
`



const Navbar = () => {

    const navigate = useNavigate();

    const [search, setSearch] = useState("");



  return (
    <Container>
        <Wrapper >
            <Left>
                <Logo>Bech'cha</Logo>
            </Left>

            <Middle>
                <SearchContainer>
                    <Searchicon fontSize= "medium" />
                    <SearchBox maxLength={30} onChange={(e) => setSearch(e.value) } name='search' value={search}/>
                    
                    
                    { search === '' ? 
                    <div style={{width: '20px', backgroundColor: 'red'}} ></div>
                    : <ClearIcon onClick={() => setSearch('')} 
                    style={{cursor: 'pointer', maxWidth: '20px'}} />
                    }


                    <SearchButton>Search</SearchButton>

                </SearchContainer>
            </Middle>

            
            <Right> 
                    <AccountCircleIcon onClick={()=>navigate("/register")} style={{marginLeft: '20px', cursor: 'pointer'}} />
                    <Badge badgeContent={4} 
                            color = {'secondary'}
                            style={{marginLeft: '20px', cursor: 'pointer'}} > 
                            <ShoppingCartOutlined />
                    </Badge>
                    <CompareIcon style={{marginLeft: '20px', cursor: 'pointer'}} />
            </Right>
        </Wrapper>
    </Container>
  )
}

export default Navbar