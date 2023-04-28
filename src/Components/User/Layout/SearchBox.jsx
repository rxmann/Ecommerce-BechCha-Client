import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from "@mui/icons-material/Clear";
import Button from "@mui/material/Button";
import { InputAdornment, OutlinedInput } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { getIndexedProducts } from "../../../ApiCalls/ProductApiCalls";

const SearchContainer = styled.div`
  min-width: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  gap: 5px;
`;

const SearchBoxx = styled(OutlinedInput)`
    width: 100%;
`

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

  const performSearch = () => {
    search.length > 0 && navigate(`/search-results/${search}`);
  };

  useEffect(() => {
    const getSearchResults = async () => {
      const prods = await getIndexedProducts({ query: search });
      console.log(prods);
    };

   getSearchResults(); 
  }, [search]);

  return (
    <SearchContainer>
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
      <SearchButton variant="contained" onClick={() => performSearch()}>
        Search
      </SearchButton>
    </SearchContainer>
  );
};

export default SearchBox;
