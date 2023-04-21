import styled from "styled-components"
import CategoryForm from "./CategoryForm"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { userRequest } from "../../../requestMethods/requestMethods"

const Container = styled.div`
  flex: 5;
  padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 20px;
`

const Title = styled.h1`
    font-size: 24px;
    font-weight: 500;
    color: gray;
`

const ChartWrap = styled.div`
  
`

const CategoryDisplay = () => {

  const catId = useParams().id;
  const [category, setCategory] = useState();

  useEffect(() => {

    const getCatInfo = async () => {
      const response = await userRequest.get(`/categories/${catId}`)
      const data = response.data.category;
      setCategory(data);
    }

    getCatInfo();

  }, [catId])

  return (
    <Container>
      <Title> Category Profile </Title>
      <CategoryForm FormType={"update"} Data={category} />
      <ChartWrap>

      </ChartWrap>
    </Container>
  )
}

export default CategoryDisplay