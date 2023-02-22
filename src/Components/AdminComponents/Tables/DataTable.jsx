import styled from 'styled-components'
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { Button, InputAdornment, OutlinedInput, TextField } from '@mui/material';
import { useEffect, useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';

const Container = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
`

const Wrapper = styled.div`
  background-color: white;
  height: 100%;
  width: 100%;
`

const SearchContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    gap: 20px;
`
const SearchBox = styled(OutlinedInput)`
    width: 100%;
`

const SearchButton = styled(Button)`
    margin-right: 20px;
`

export const StatusButton = ({ type }) => {
  let color, background;
  switch (type) {
    case "pending":
      color = "info"
      background = "#ebf1fe"
      break;
    case "active":
      color = "success"
      background = "#e5faf2"
      break;
    case "passive":
      color = "error"
      background = "#fff0f1"
      break;
    default:
      color = "warning"
      background = ""
      break;
  }
  return <Button size={"small"} color={color} sx={{ background: background }} type={type}> {type} </Button>
}



const DataTable = ({ rows, columns }) => {

  const [searchQuery, setSearchQuery] = useState("");
  const [filteredRows, setFilteredRows] = useState([]);

  const filterRows = (data, searchQuery) => {
    return data.filter( row =>
        Object.values(row).some( value =>
          String(value).toLowerCase().includes(searchQuery.toLowerCase())
      )
    )
  }

  useEffect(() => {
    setFilteredRows(filterRows(rows, searchQuery));
  }, [searchQuery, rows])


  return (
    <Container>
      <SearchContainer>
        <SearchBox
          size="small"
          maxLength={30}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search fields"
          sx={{backgroundColor: "#ffffff"}}
          startAdornment={
            <InputAdornment position="start">
              <SearchIcon color="info" />
            </InputAdornment>
          }
          endAdornment={
            <InputAdornment position="end">
                <SearchButton >Search</SearchButton>
            </InputAdornment>
          }
        />
      </SearchContainer>

      <Wrapper>
        <DataGrid
          rows={filteredRows}
          columns={columns}
          pageSize={5}
          components={{
            Toolbar: GridToolbar,
          }}
          getRowId={row => row._id}
        />
      </Wrapper>
    </Container>
  )
}

export default DataTable