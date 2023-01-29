import { useEffect, useState } from "react"
import styled from "styled-components"
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import BalanceIcon from '@mui/icons-material/Balance';
import FavoriteIcon from '@mui/icons-material/Favorite';
import DescriptionTable from "../Components/DescriptionTable/DescriptionTable";
import { useParams } from "react-router-dom";
import { publicRequest } from "../requestMethods/requestMethods";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f5f7f8;
`
const Wrapper = styled.div`
  margin: 10px 50px; 
  padding: 10px;
  display: flex;  
  gap: 50px;
  background-color: #ffffff;
`
const Left = styled.div`
  flex: 1;
  display: flex;
  gap: 20px;
`

const ImageContainer = styled.div`
  flex: 1;
`

const MainImageContainer = styled.div`
  flex: 6;
`
const SmallImage = styled.img`
  width: 100%;
  height: 120px;
  padding: 10px;
  object-fit: contain;
  cursor: pointer;
  border: ${(props) => (props.selected === true? "#0171b6" : "white" )} 1px solid;
`
const BigImage = styled.img`
  width: 100%;
  height: 600px;
  object-fit: contain;
`


const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding-top: 50px;
`
const TitleWrapper = styled.div`

`
const Title = styled.h1`
font-weight: 500;
`

const Price = styled.span`
  font-size: 18px;
  font-weight: 600;
  color: #0171b6;
`

const Description = styled.p`
  font-size: 14px;
  font-weight: 300;
  text-align: justify;
`

const QuantityDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`
const Button = styled.button`
  cursor: pointer;
  width: 50px;
  height: 50px;
  font-size: 24px;
  display : flex;
  justify-content: center;
  align-items: center;
  border: none;
`

const AddToCart = styled.div`
      padding: 10px 20px;
      width: 180px;
      background-color: #0171b6;
      color: white;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 20px;
      cursor: pointer;
      border: none;
      font-weight: 500;
`
const QuickLinks = styled.div`
  display: flex;
  gap: 50px;
  padding: 10px 0px;
`
const Links = styled.div`
  color: #0076CE;
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  font-size: 14px;
`

const Span = styled.span`
    font-size: 10px;
    color: #aaaaaa;
    margin: 0px;
    font-weight: 600;
`

const LoadingScreen = styled.div`
  height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
`


const SingleProductPage = () => {
  const id = useParams().id;

  const [quantity, setQuantity] = useState(1);
  const [product, setProduct] = useState(null);
  const [imageSelected, setImageSelected] = useState();
  
  useEffect(() => {
    const getOneProduct = async () => {
      try {
        const response = await publicRequest.get(`/products/${id}`);
        setProduct(response.data)
      }
      catch (err) { console.log(err) };
    }
    getOneProduct();
  }, [id])
  
  
  const handleQuantity = (option, qunatity, maxQuantity) => {
    if (option === "dec") {
      if (quantity > 1) setQuantity(quantity - 1);
    }
    else if (option === "inc") {
      if (quantity < maxQuantity) setQuantity(quantity + 1)
    }
  }
  

  return ( 
    <>
    {product ?
     <Container>
     <Wrapper>
       <Left>
         <ImageContainer>
           {product.images?.map( image => (
             <SmallImage key={image} 
                        selected={image === imageSelected}
                        onClick = {() => {setImageSelected(image)}}
                        src={`data:image/png;base64, ${image}`} />
           ))}
         </ImageContainer>

         <MainImageContainer>
           <BigImage src={`data:image/png;base64, ${imageSelected || product.images[0]}`} />
         </MainImageContainer>
       </Left>


       <Right>
         <TitleWrapper>
           <Title> {product.title} </Title>
           <Span >Product ID: {product._id}</Span>
         </TitleWrapper>
         <Price> RS {product.price} </Price>
         <Description > {product.description}</Description>
         <p style={{ color: "red" }}> Stock: {product.quantity} </p>
         <QuantityDiv>
           <Button onClick={()=>handleQuantity("dec", quantity, product.quantity)}> - </Button>
           {quantity}
           <Button onClick={()=>handleQuantity("inc", quantity, product.quantity)} > + </Button>
         </QuantityDiv>

         <AddToCart>
           <AddShoppingCartIcon /> ADD TO CART
         </AddToCart>

         <QuickLinks>
           <Links> <FavoriteIcon /> ADD TO WISHLIST </Links>
           <Links> <BalanceIcon /> ADD TO COMPARE </Links>
         </QuickLinks>
       </Right>

     </Wrapper>
     <DescriptionTable />
   </Container>

   : <LoadingScreen> Loading product ... </LoadingScreen>
    }
    
    </>
  )
}

export default SingleProductPage