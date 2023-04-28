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
    z-index: 3;
    background-color: #f5f7f8;

    &:hover {
        color: white;
        background-color: #0171b6;
    }
`


const SearchResultData = ( {searchResults, performSearch} ) => {
  return (
    <Container>
            {  searchResults && searchResults.map((pr) => (
                <SuggestContainer onClick={() => {
                  performSearch(pr.title)
                }} key={pr._id}> {pr.title} </SuggestContainer>
            )) }
    </Container>
  )
}

export default SearchResultData