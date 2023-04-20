import styled from "styled-components"
import { useState } from "react";
// import ProductUpdateForm from "./ProductUpdateForm";
import NewProductForm from "./NewProductForm";
import { useEffect } from "react";


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
    overflow: hidden;
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
  object-fit: contain;
`



const ProductUpdate = ({ prodDetails }) => {

  const [imageSelected, setImageSelected] = useState();
  
  useEffect(() => {
    if (prodDetails) {
      // console.log(prodDetails);
      setImageSelected(prodDetails?.images[0]?.url);
    }
  }, [prodDetails])


  return (
    <Container>
      <Left>
        <MainImageContainer>
          <BigImage src={`${imageSelected}`} />
        </MainImageContainer>

        <ImageContainer>
          {prodDetails.images && prodDetails.images.map(image => (
            <SmallImage key={image.public_id}
              selected={image.url === imageSelected}
              onClick={() => { setImageSelected(image.url) }}
              src={ `${image.url}`} />
          ))}
        </ImageContainer>
      </Left>

      <Right>
        <NewProductForm FormType={"edit"} prodDetails={prodDetails}  />
      </Right>
    </Container>
  )
}

export default ProductUpdate