import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from "@mui/icons-material/Clear";
import Button from "@mui/material/Button";
import { InputAdornment, OutlinedInput } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { getIndexedProducts } from "../../../ApiCalls/ProductApiCalls";
import SearchResultData from "./SearchResultData";

const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5px;
  position: fixed;
  top: 10px;
`;

const WrapperA = styled.div`
  display: flex;
  gap: 5px;
`;

const WrapperB = styled.div`
  display: flex;  
  width: 100%;
`;

const SearchBoxx = styled(OutlinedInput)`
  width: 100%;
`;

const SearchButton = styled(Button)`
  margin-right: 20px;
`;
const Clear = styled(ClearIcon)`
  cursor: pointer;
  color: #0171b6;
`;

const SearchBox = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState();

  ///////////////////
  const performSearch = (searchQuery) => {
    if (search.length > 0) {
      setSearchResults([]);
      setSearch(searchQuery);
      navigate(`/search-results/${searchQuery}`);   
    }
  };

  ////////////////////////
  useEffect(() => {
    const getSearchResults = async () => {
      if (!search) {
        setSearchResults([]);
        return false;
      }
      const prods = await getIndexedProducts({ query: search });
      // console.log(prods);
      setSearchResults(prods);
    };

    getSearchResults();
  }, [search]);



  return (
    <SearchContainer>
      <WrapperA>
        <SearchBoxx
          size="small"
          maxLength={30}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          endAdornment={
            <InputAdornment position="end">
              {search && <Clear onClick={() => setSearch("")} />}
            </InputAdornment>
          }
          startAdornment={
            <InputAdornment position="start">
              <SearchIcon color="info" />
            </InputAdornment>
          }
        />
        <SearchButton variant="contained" onClick={() => performSearch(search)}>
          Search
        </SearchButton>
      </WrapperA>

      <WrapperB>
        <SearchResultData searchResults={searchResults}  performSearch={performSearch} />
      </WrapperB>
    </SearchContainer>
  );
};

export default SearchBox;
