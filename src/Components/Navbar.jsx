import styled from 'styled-components'
import SearchIcon from '@mui/icons-material/Search';

const Container = styled.div`
    height: 60px;
    width: 100vw;
`
const Wrapper = styled.div`
    color: #0171B6;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 20px;
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
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px 10px;
    height: 40px;
    max-width: 900px;
`

const SearchContainer = styled.div`
    border: 1px solid lightgray;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%; 
`
const Searchicon = styled(SearchIcon)`
    font-size: larger;
    border-right: 1px solid lightgray;
    padding: 10px;
`
const SearchBox = styled.input`
    flex: 5;
    border: none;
    height: 100%;
    padding: 0px 10px;
    outline: none;
    font-size: 20px;
    font-weight: bold;
`

const SearchButton = styled.button`
    background-color: #0171B6;
    color: white;
    cursor: pointer;
    height: 100%;
    padding: 10px 20px;
    border: none;
`

const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: end;
`



const Navbar = () => {
  return (
    <Container>
        <Wrapper>
            <Left>
                <Logo>Bech-cha</Logo>
            </Left>

            <Middle>
                <SearchContainer>
                    <Searchicon/>
                    <SearchBox />
                </SearchContainer>
                <SearchButton>Search</SearchButton>
            </Middle>

            
            <Right>
                    Register
                    Cart
                    Compare
            </Right>
        </Wrapper>
    </Container>
  )
}

export default Navbar