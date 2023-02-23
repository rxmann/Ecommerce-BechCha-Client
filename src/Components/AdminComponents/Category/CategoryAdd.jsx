import { Avatar } from "@mui/material"
import { useEffect } from "react"
import { useSelector } from "react-redux"
import styled from "styled-components"
import { getAllCategories } from "../../../Redux/apiCalls"
import CategoryForm from "./CategoryForm"

const Container = styled.div`
    flex: 5;
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 30px;
`

const Wrapper = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    gap: 20px;
`

const Title = styled.h1`
    font-size: 24px;
    font-weight: 500;
    color: gray;
`
const RecentCategories = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    height: 100%;
    gap: 10px;
`

const Category = styled.div`
    padding: 10px 20px;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const CatInfo = styled.span`
    font-size: 16px;
    font-weight: 500;
    color: gray;
`

const CategoryAdd = () => {

    useEffect(() => {
        getAllCategories();
    }, [])

    const { categories } = useSelector(state => state.product)


    return (
        <Container>
            <Title> Add Category </Title>
            <Wrapper>
                <CategoryForm FormType={"Add"} />
                <RecentCategories>
                    <Title> Recent Categories </Title>
                    {categories &&
                        categories.slice(0, 5).map((category => (
                            <Category>
                                <Avatar variant="square" size="large" src={category.image.url} />
                                <CatInfo> {category.name}  </CatInfo>
                                <CatInfo> {category.parentId || "No parent"} </CatInfo>
                            </Category>
                        )))
                    }
                </RecentCategories>
            </Wrapper>
        </Container>
    )
}

export default CategoryAdd