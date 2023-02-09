import styled from "styled-components"
import { useState } from "react";
import ProductForm from "./ProductForm";

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
  border: ${(props) => (props.selected === true? "#0171b6" : "white" )} 1px solid;
`
const BigImage = styled.img`
  width: 100%;
  object-fit: cover;
`



const ProductUpdate = () => {

    let images = [];
    images[0] = "https://img.freepik.com/premium-vector/social-media-post-design-ecommerce-product-marketing_528542-192.jpg?w=2000"
    images[1] = "https://media.wired.com/photos/627bfd36a4fb038463303e27/master/pass/Sony-WH-1000MX5-Gear.jpg";
    const [imageSelected, setImageSelected] = useState(images[0]);
    return (
        <Container>
            
            <Left>
                <MainImageContainer>
                    <BigImage src={`${imageSelected}`} />
                </MainImageContainer>

                <ImageContainer>
                    {images?.map(image => (
                        <SmallImage key={image}
                            selected={image === imageSelected}
                            onClick={() => { setImageSelected(image) }}
                            src={`${image}`} />
                    ))}
                </ImageContainer>
            </Left>

            <Right>
                <ProductForm  FormType={"edit"}/>
            </Right>
           
        </Container>
    )
}

export default ProductUpdate