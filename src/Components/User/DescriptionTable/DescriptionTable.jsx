import styled from "styled-components"
import DataTable from "react-data-table-component"


const Container = styled.div`

`


const DescriptionTable = () => {
  return (
    <Container >
      <h1> Description </h1>
      <DataTable />
    </Container>
  )
}

export default DescriptionTable