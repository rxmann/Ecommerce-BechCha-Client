import { useState } from "react"
import styled from "styled-components"
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import BalanceIcon from '@mui/icons-material/Balance';
import FavoriteIcon from '@mui/icons-material/Favorite';


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
  height: 150px;
  object-fit: cover;
  cursor: pointer;
  margin-bottom: 10px;
`
const BigImage = styled.img`
  width: 100%;
  height: 800px;
  object-fit: contain;
`


const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding-top: 50px;
`

const Title = styled.h1`
font-weight: 500;
`

const Price = styled.span`
  font-size: 24px;
  font-weight: 500;
  color: #0171b6;
`

const Description = styled.p`
  font-size: 16px;
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
     width: 250px;
      padding: 10px;
      background-color: #0076CE;
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


const SingleProductPage = () => {
  const [imageSelected, setImageSelected] = useState(0);

  const [quantity, setQuantity] = useState(1);

  const Images = [
    "https://dlcdnwebimgs.asus.com/files/media/4AFB9B01-9AB0-47C6-B84F-EC4D0A1476CB/v1/img/kv_pd.png",
    "https://dlcdnwebimgs.asus.com/files/media/4AFB9B01-9AB0-47C6-B84F-EC4D0A1476CB/v1/img/ports_pd.png"
    ,    "https://dlcdnwebimgs.asus.com/files/media/4AFB9B01-9AB0-47C6-B84F-EC4D0A1476CB/v1/img/kv_pd.png",
    "https://dlcdnwebimgs.asus.com/files/media/4AFB9B01-9AB0-47C6-B84F-EC4D0A1476CB/v1/img/ports_pd.png"
  ]

  return (
        <Wrapper>

            <Left>
                <ImageContainer>
                  <SmallImage src={Images[0]} 
                            onClick={e => {
                              setImageSelected(0); 
                              }} />
                  <SmallImage  src={Images[1]} 
                    onClick={e => {
                      setImageSelected(1);
                    }} />
                    <SmallImage  src={Images[2]} 
                    onClick={e => {
                      setImageSelected(2);
                    }} />
                </ImageContainer>

                <MainImageContainer> 
                  <BigImage src={Images[imageSelected]} />
                </MainImageContainer>
            </Left>


            <Right>
                    <Title> Asus Gaming Monitor (390 hz) </Title>
                    <Price> RS 35000</Price>
                    <Description > Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis pariatur officiis commodi iusto laudantium placeat obcaecati nemo veritatis nesciunt voluptas ad beatae eum, distinctio cum voluptatem hic illo dolorem quae harum voluptatibus accusantium fugiat labore iure! Vero similique distinctio architecto est natus nobis ipsum atque laborum, dolores dolore hic praesentium! </Description>
                    
                    <QuantityDiv> 
                      <Button onClick={e => { 
                        if (quantity > 1 ) 
                          setQuantity(quantity-1) 
                        }} 
                        > - </Button>
                        {quantity}
                      <Button onClick={e => setQuantity(quantity+1) } > + </Button>
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
  )
}

export default SingleProductPage