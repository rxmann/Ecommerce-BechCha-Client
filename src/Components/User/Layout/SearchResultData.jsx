import styled from "styled-components"

const Container = styled.div`
    /* display: flex;
    flex-direction: column; */
    max-height: 90vh;
    overflow-y: auto;
    border: 1px solid gray;
`

const SuggestContainer = styled.div`
    padding: 5px;
    cursor: pointer;
    z-index: 5;
    background-color: #f5f7f8;

    &:hover {
        color: white;
        background-color: #0171b6;
    }
`


const SearchResultData = ( {searchResults, setSearch} ) => {
  return (
    <Container>
            {  searchResults && searchResults.map((pr) => (
                <SuggestContainer onClick={() => setSearch(pr.title)} key={pr._id}> {pr.title} </SuggestContainer>
            )) }
    </Container>
  )
}

export default SearchResultData