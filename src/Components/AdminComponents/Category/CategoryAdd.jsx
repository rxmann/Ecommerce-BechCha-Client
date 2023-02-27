import { Avatar } from "@mui/material"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import styled from "styled-components"
import { getAllCategories } from "../../../Redux/apiCalls"
import CategoryForm from "./CategoryForm"
import { useNavigate } from "react-router-dom"


const Container = styled.div`
    flex: 5;
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 30px;
`

const Wrapper = styled.div`
    display: flex;
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
    border-radius: 1px;
    cursor: pointer;
`

const SmImage = styled.div`
    flex: 1;
`

const CatTitle = styled.span`
    flex: 2;
    font-weight: 400;
`

const CatChild = styled.span`
    flex: 2;
    color: gray;
`

const Form = styled.div`
    flex: 2;
`

const CategoryAdd = () => {


    const dispatch = useDispatch();
    const navigate = useNavigate();

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

                <Form>
                    <CategoryForm FormType={"Add"} />
                </Form>

                <RecentCategories>
                    <Title> Recent Categories </Title>
                    <Category >
                        <SmImage>  </SmImage>
                        <CatTitle> Category  </CatTitle>
                        <CatTitle> Parent </CatTitle>
                    </Category>

                    {categories &&
                        categories.slice(0, 5).map((category => (
                            <Category key={category._id} onClick={() => navigate("/admin/dashboard")} >
                                <SmImage >
                                    <Avatar variant="square" size="large" src={category.image.url} />
                                </SmImage>
                                <CatTitle> {category.name}  </CatTitle>
                                <CatChild> {getCatName(category.parentId) || "No parent"} </CatChild>
                            </Category>
                        )))
                    }
                </RecentCategories>
            </Wrapper>
        </Container>
    )
}

export default CategoryAdd