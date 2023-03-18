import { useEffect, useState } from "react"
import styled from "styled-components"
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import BalanceIcon from '@mui/icons-material/Balance';
import FavoriteIcon from '@mui/icons-material/Favorite';
import DescriptionTable from "../../Components/User/DescriptionTable/DescriptionTable";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux"
import { addProductToCart } from "../../ApiCalls/apiCalls";
import { getOneProduct } from "../../ApiCalls/ProductApiCalls";
import { addToCompare } from "../../Redux/compareProductSlice";
import Fetching from "../../Components/User/EmptyView/Fetching";

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
  flex: 5;
`
const SmallImage = styled.img`
  width: 100%;
  height: 120px;
  padding: 10px;
  object-fit: contain;
  cursor: pointer;
  border: ${(props) => (props.selected === true ? "#0171b6" : "white")} 1px solid;
`
const BigImage = styled.img`
  width: 100%;
  height: 600px;
  object-fit: contain;
  padding: 20px;
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
  background-color: #f5f7f8;
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
const DisplayInfo = styled.div`
  display: flex;
  flex-direction: column;
`

const DisplayUnit = styled.span`
  color: green;
  font-weight: 500;
`


const ProductPage = () => {
  const id = useParams().id;

  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);
  const [product, setProduct] = useState(null);
  const [imageSelected, setImageSelected] = useState();

  useEffect(() => {
    const getEssential = async () => {
      const pro = await getOneProduct(id);
      const textContent = document.createElement("div");
      textContent.innerHTML = pro.description;
      const plainText = textContent.innerText;
      setProduct({
        ...pro,
        description: plainText
      });
    }

    getEssential()
  }, [id])



  /// quantity increase / decrease
  const handleQuantity = (option, maxQuantity) => {
    if (option === "dec") {
      if (quantity > 1) setQuantity(quantity - 1);
    }
    else if (option === "inc") {
      if (quantity < maxQuantity) setQuantity(quantity + 1)
    }
  }


  const handleAddToCart = async () => {
    console.log("Add to cart!");
    await addProductToCart(dispatch, product, quantity, product.quantity, id);
  }

  return (
    <>
      {product ?
        <Container>
          <Wrapper>
            <Left>
              <ImageContainer>
                {product.images?.map(image => (
                  <SmallImage key={image.public_id}
                    selected={image.url === imageSelected}
                    onClick={() => { setImageSelected(image?.url) }}
                    src={image.url} />
                ))}
              </ImageContainer>

              <MainImageContainer>
                <BigImage src={imageSelected || product.images[0]?.url} />
              </MainImageContainer>
            </Left>

            <Right>
              <TitleWrapper>
                <Title> {product.title} </Title>
                <Span >Product ID: {product._id}</Span>
              </TitleWrapper>
              <Price> RS {product.price} </Price>

              {product.description}


              <DisplayInfo>

                <DisplayUnit > Stock:   {product.quantity} </DisplayUnit>

                {product.brand &&  <DisplayUnit > Brand:   {product.brand} </DisplayUnit>}
              </DisplayInfo>
             
             
              <QuantityDiv>
                <Button onClick={() => handleQuantity("dec", product.quantity)}> - </Button>
                {quantity}
                <Button onClick={() => handleQuantity("inc", product.quantity)} > + </Button>
              </QuantityDiv>

              <AddToCart onClick={handleAddToCart}>
                <AddShoppingCartIcon /> ADD TO CART
              </AddToCart>

              <QuickLinks>
                <Links onClick={() => dispatch(addToCompare(product))} > <BalanceIcon /> ADD TO COMPARE </Links>
                <Links> <FavoriteIcon /> ADD TO WISHLIST </Links>
              </QuickLinks>
            </Right>

          </Wrapper>
          <DescriptionTable />
        </Container>

        : <Fetching type={"spokes"} />
      }

    </>
  )
}

export default ProductPage