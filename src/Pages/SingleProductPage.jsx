import { useState } from "react"
import styled from "styled-components"



const Wrapper = styled.div`
  margin: 10px 50px; 
  padding: 10px;
  display: flex;
  gap: 50px;
  background-color: #f5f7f8;
`
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 30px;
`

const Right = styled.div`
  flex: 1;
`

const ImageContainer = styled.div`
  flex: 1;
  display: flex;
  gap: 20px;
  width: 100%;
  background-color: #333333;
`

const MainImageContainer = styled.div`
  flex: 5;
`
const SmallImage = styled.img`
  width: 120px;
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
  height: 600px;
  object-fit: contain;
`




const SingleProductPage = () => {
  const [imageSelected, setImageSelected] = useState(0);

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

            </Right>
        </Wrapper>
  )
}

export default SingleProductPage