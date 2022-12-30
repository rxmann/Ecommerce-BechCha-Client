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
`
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 30px;
`

const ImageContainer = styled.div`
  flex: 1;
  display: flex;
  gap: 20px;
  width: 100%;
`

const MainImageContainer = styled.div`
  flex: 2;
`
const SmallImage = styled.img`
  width: 70px;
  object-fit: cover;
  cursor: pointer;
  margin-bottom: 10px;
  padding: 10px;

  &:hover {
    background-color: #fd9090;
  }
`
const BigImage = styled.img`
  width: 100%;
  height: 300px;
  object-fit: contain;
`


const Right = styled.div`
  flex: 1;
`

const Title = styled.h1`

`

const Span = styled.span`

`

const Description = styled.p`

`

const QuantityDiv = styled.div`

`
const Button = styled.button``

const AddToCart = styled.div`

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
                <MainImageContainer> 
                  <BigImage src={Images[imageSelected]} />
                </MainImageContainer>

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
                    <SmallImage  src={Images[3]} 
                    onClick={e => {
                      setImageSelected(3);
                    }} />
                </ImageContainer>
            </Left>


            <Right>
                    <Title> Title </Title>
                    <Span> RS 35000</Span>
                    <Description > Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis pariatur officiis commodi iusto laudantium placeat obcaecati nemo veritatis nesciunt voluptas ad beatae eum, distinctio cum voluptatem hic illo dolorem quae harum voluptatibus accusantium fugiat labore iure! Vero similique distinctio architecto est natus nobis ipsum atque laborum, dolores dolore hic praesentium! </Description>
                    <QuantityDiv> 
                      <Button onClick={e => { 
                        if (quantity > 1 ) 
                          setQuantity(quantity-1) 
                        }} 
                        > - </Button>
                        {quantity}
                      <Button onClick={e => setQuantity(quantity+1) } > + </Button>

                      <AddToCart>  </AddToCart>
                    </QuantityDiv>
            </Right>
        </Wrapper>
  )
}

export default SingleProductPage