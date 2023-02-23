import { Avatar } from "@mui/material"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
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
    flex-direction: column;
    gap: 20px;
`

const Title = styled.h1`
    font-size: 24px;
    font-weight: 500;
    color: gray;
`
const RecentCategories = styled.div`
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
`

const CatInfo = styled.span`
    flex: 1;
    font-size: 14px;
    font-weight: 400;
    color: gray;
`

const CategoryAdd = () => {


    const dispatch = useDispatch();

    useEffect(() => {
        getAllCategories(dispatch);
    }, [dispatch])

    const { categories } = useSelector(state => state.product)

    const getCatName = (id) => {
        for (let i = 0; i < categories.length; i++) {
            if (categories[i]._id === id) {
                return categories[i].slug;
            }
        }
        return id;
    }

    return (
        <Container>
            <Title> Add Category </Title>
            <Wrapper>
                
                <CategoryForm  FormType={"Add"} />

                <RecentCategories>
                    <Title> Recent Categories </Title>
                    {categories &&
                        categories.slice(0, 5).map((category => (
                            <Category key={category._id}>
                                <CatInfo>
                                    <Avatar  variant="square" size="large" src={category.image.url} />
                                </CatInfo>
                                <CatInfo> {category.name}  </CatInfo>
                                <CatInfo> {getCatName(category.parentId)|| "No parent"} </CatInfo>
                            </Category>
                        )))
                    }
                </RecentCategories>
            </Wrapper>
        </Container>
    )
}

export default CategoryAdd