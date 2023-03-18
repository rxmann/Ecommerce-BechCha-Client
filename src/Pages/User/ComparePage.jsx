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

const MainWrapper = styled.div`
  flex: 5;
  display: flex;
  align-items: center;
  justify-content: center;
`
const ComparePage = () => {
  const dispatch = useDispatch();
  const { products } = useSelector(state => state.compare)


  return (
    <Container>
      {products.length > 0 && <Button sx={{ marginLeft: "auto" }} color={"error"} onClick={() => dispatch(emptyCompare())}> EMPTY COMPARE LIST</Button>}
      <MainWrapper>
        {products.map((product) => (
        <>
          <CompareCard key={product._id} data={product} />
        </>
        ))}
      </MainWrapper>
    </Container>
  )
}

export default ComparePage