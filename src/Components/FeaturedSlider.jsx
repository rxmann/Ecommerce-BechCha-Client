import styled from 'styled-components'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Thumbs } from 'swiper';

// Import Swiper styles
import 'swiper/css/bundle';


const Container = styled.div`
    padding: 0px 50px;
    /* color: #eeeded; */
`

const Wrapper = styled.div`
    height: 50vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: aliceblue;
`

const ImageContainer = styled.div`
    flex: 1;
    height: 100%;
    display: flex;
    align-items: center;
`

const Image = styled.img`
    height: 90%;
    overflow: hidden;
    padding-left: 50px;
`

const InfoContainer = styled.div`
    flex: 1;
    padding: 50px;
`

const Title = styled.h3`
    font-size: 30px;
`

const Description = styled.p`
    margin: 50px 0px;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 3px;
`

const ShopNow  = styled.button`
    padding: 15px;
    font-size: 20px;
    background-color: transparent;
    cursor:pointer;
    font-weight: 600;
    border: 1px solid #000000;
    letter-spacing: 2px;

    &:hover {
        background-color: #0171b6;
        color: white;
    }
`

const FeaturedSlider = () => {

    const sliderItems = [
        {
          id: 1,
          img: "https://i.ibb.co/DG69bQ4/2.png",
          title: "Dashain Sale",
          desc: "DON'T COMPROMISE ON TECH! GET FLAT 30% OFF FOR NEW MODELS"
        },
        {
          id: 2,
          img: "https://i.ibb.co/DG69bQ4/2.png",
          title: "AUTUMN COLLECTION",
          desc: "DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS."
        },
        {
          id: 3,
          img: "https://i.ibb.co/cXFnLLV/3.png",
          title: "LOUNGEWEAR LOVE",
          desc: "DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS."
        },
      ];

  return (
    <Container>
        <Swiper 
        loop = {true}
        spaceBetween = {0}
        navigation
        pagination = {{ clickable: true }}
        modules = {[Navigation, Thumbs, Pagination]}   
        grabCursor 
        >
            {sliderItems.map( (product) => (
                <SwiperSlide key={product.id} >
                    <Wrapper >
                        <ImageContainer>
                            <Image src={product.img} />
                        </ImageContainer>  

                        <InfoContainer>
                            <Title>
                                {product.title}
                            </Title>
                            <Description>
                                {product.desc}
                            </Description>

                            <ShopNow>
                                SHOP NOW
                            </ShopNow>
                        </InfoContainer>  

                    </Wrapper>
                </SwiperSlide>
            )
            )}
        </Swiper>
    </Container>
  )
}

export default FeaturedSlider