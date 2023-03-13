import { Delete } from "@mui/icons-material"
import { Button } from "@mui/material"
import { useDispatch, useSelector } from "react-redux"
import styled from "styled-components"
import CompareCard from "../../Components/User/Compare/CompareCard"
import { emptyCompare } from "../../Redux/compareProductSlice"

const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px 50px;
    gap: 20px;
`
const TopDiv = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  gap: 30px;
`

const MainWrapper = styled.div`
  flex: 5;
`
const ComparePage = () => {
  const dispatch = useDispatch();
  const { products } = useSelector(state => state.compare)
  return (
    <Container>
      <Button  sx={{marginLeft: "auto"}} color={"error"} onClick={() => dispatch(emptyCompare())}> EMPTY COMPARE LIST</Button>
        <TopDiv>
            {products.map((product) => (
              <CompareCard key={product._id} data={product} />
            ))}
        </TopDiv>

        <MainWrapper>
            B
        </MainWrapper>
    </Container>
  )
}

export default ComparePage