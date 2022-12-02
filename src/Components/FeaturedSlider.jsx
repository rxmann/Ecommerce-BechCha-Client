import styled from 'styled-components'
import { Swiper, SwiperSlide } from 'swiper/react';


const Container = styled.div`
    background-color: #82afd6;
`

const OneSlide = styled.div`
    height: calc(100vh - 90px);
    width: 100vw;
    background-color: #7a7aec;
`

const FeaturedSlider = () => {

    const sliderItems = [
        {
          id: 1,
          img: "https://i.ibb.co/XsdmR2c/1.png",
          title: "SUMMER SALE",
          desc: "DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.",
          bg: "f5fafd",
        },
        {
          id: 2,
          img: "https://i.ibb.co/DG69bQ4/2.png",
          title: "AUTUMN COLLECTION",
          desc: "DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.",
          bg: "fcf1ed",
        },
        {
          id: 3,
          img: "https://i.ibb.co/cXFnLLV/3.png",
          title: "LOUNGEWEAR LOVE",
          desc: "DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.",
          bg: "fbf0f4",
        },
      ];

  return (
    <Container>
        <Swiper>
            {sliderItems.map( (each) => (
                <SwiperSlide>
                    <OneSlide>{each.id}</OneSlide>
                </SwiperSlide>
            )
            )}
        </Swiper>
    </Container>
  )
}

export default FeaturedSlider