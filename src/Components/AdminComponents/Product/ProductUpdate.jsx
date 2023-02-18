import styled from "styled-components"
import { useEffect, useState } from "react";
import ProductForm from "./NewProductForm";
import { publicRequest } from "../../../requestMethods/requestMethods";
import { useParams } from "react-router-dom"
import ProductUpdateForm from "./ProductUpdateForm";


const Container = styled.div`
    display: flex;
    gap: 20px;
`
const Left = styled.div`
  flex: 1;
`

const Right = styled.div`
  flex: 3;
`

const ImageContainer = styled.div`
  display: flex;
`

const MainImageContainer = styled.div`
    height: 400px;
`
const SmallImage = styled.img`
  height: 50px;
  padding: 5px;
  object-fit: cover;
  cursor: pointer;
  border: ${(props) => (props.selected === true ? "#0171b6" : "white")} 1px solid;
`
const BigImage = styled.img`
  width: 100%;
  object-fit: cover;
`



const ProductUpdate = ({ prodDetails, categories }) => {

  let images = prodDetails?.images;
  const [imageSelected, setImageSelected] = useState();

  return (
    <Container>
      <Left>
        <MainImageContainer>
          <BigImage src={`${imageSelected}`} />
        </MainImageContainer>

        <ImageContainer>
          {images && images?.map(image => (
            <SmallImage key={image.url}
              selected={image === imageSelected}
              onClick={() => { setImageSelected(image.url) }}
              src={`${image.url}`} />
          ))}
        </ImageContainer>
      </Left>

      <Right>
        <ProductUpdateForm FormType={"edit"} prodDetails={prodDetails} categories={categories} />
      </Right>
    </Container>
  )
}

export default ProductUpdate