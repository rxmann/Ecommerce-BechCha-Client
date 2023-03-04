import styled from 'styled-components'
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { Box, Button, InputAdornment, OutlinedInput } from '@mui/material';
import { useEffect, useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';

const Container = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const Wrapper = styled.div`
  background-color: white;
  height: 100%;
  width: 100%;
`

const SearchContainer = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-between;
    padding: 10px;
`
const SearchBox = styled(OutlinedInput)`
    width: 25%;
`

const SearchButton = styled(Button)`
    margin-right: 20px;
`


const BOX = styled(Box)`
  width: 100%;
  height: 100%;

  & .header-datatable {
    background-color: #0171b6 !important;
    color: white;
  }

  & .rows-datatable :hover {
    color:#0171b6 !important;
  }
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

const AddButton = styled(Button)`
  text-transform: unset !important;
`



const DataTable = ({ rows, columns, link, type }) => {

  const [searchQuery, setSearchQuery] = useState("");
  const [filteredRows, setFilteredRows] = useState(rows);


  useEffect(() => {
    const setFilters = async () => {
      setFilteredRows(filterRows(rows, searchQuery));
    }

    setFilters()
  }, [searchQuery, rows])



  const filterRows = (data, searchQuery) => {
    return data?.filter(row =>
      Object.values(row).some(value =>
        String(value).toLowerCase().includes(searchQuery.toLowerCase())
      )
    )
  }


  return (
    <Container>
      <SearchContainer>
        <SearchBox
          size="small"
          maxLength={30}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search fields"
          sx={{ backgroundColor: "#ffffff" }}
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


        {link && type &&
          <Link to={link} >
            <AddButton variant='contained' > {type} </AddButton>
          </Link>
        }
      </SearchContainer>

      <Wrapper>
        <BOX >
          <DataGrid
            rows={filteredRows}
            columns={columns}
            components={{
              Toolbar: GridToolbar,
            }}
            getRowId={row => row._id}
            pageSize={8}
            rowsPerPageOptions={[5, 10]}
            getRowClassName={() => `rows-datatable`}
          />
        </BOX>
      </Wrapper>
    </Container>
  )
}

export default DataTable