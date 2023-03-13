import { Delete } from "@mui/icons-material"
import { Button } from "@mui/material"
import { useDispatch } from "react-redux"
import styled from "styled-components"
import { emptyCompare } from "../../Redux/compareProductSlice"

const Container = styled.div`
    display: flex;
    flex-direction: column;
`
const TopDiv = styled.div`
  flex: 1;
`

const MainWrapper = styled.div`
  flex: 5;
`
const ComparePage = () => {
  const dispatch = useDispatch();
  return (
    <Container>
      <Button color={"error"} onClick={() => dispatch(emptyCompare())}> <Delete /> </Button>
        <TopDiv>
            A
        </TopDiv>

        <MainWrapper>
            B
        </MainWrapper>
    </Container>
  )
}

export default ComparePage