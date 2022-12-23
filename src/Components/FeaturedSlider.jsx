import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Thumbs, Autoplay } from "swiper";

// Import Swiper styles
import "swiper/css/bundle";
import "swiper/css/autoplay"

const Container = styled.div`
  padding: 10px 50px;
`;

const Wrapper = styled.div`
  height: 400px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
`;

const ImageContainer = styled.div`
  flex: 1;
  display: flex;
  overflow: hidden;
  align-items: center;
  height: 100%;
  width: 100%;
  padding: 10px;
`;

const Image = styled.img`
  height: 90%;
  width: 90%;
  padding-left: 50px;
  object-fit: contain;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`;

const Title = styled.h3`
  font-size: 30px;
`;

const Description = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
`;

const ShopNow = styled.button`
  padding: 15px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
  font-weight: 600;
  letter-spacing: 2px;
  box-shadow: 1px 2px 4px rgba(0,0,0,0.15);
  transition: box-shadow 0.3s ease-in-out;
  border: 0.3px solid #0171b6;

  &:hover {
    background-color: #0171b6;
    color: white;
    box-shadow: 1px 2px 6px rgba(0,0,0,0.3);
  }
`;

const FeaturedSlider = () => {
  const sliderItems = [
    {
      id: 0,
      img: "https://github.com/rxmxndai/rxmxndai-assets/blob/main/assets/G24F2.png?raw=true",
      title: "Dashain Sale",
      desc: "DON'T COMPROMISE ON TECH! GET FLAT 30% OFF FOR NEW MODELS",
    },
    {
      id: 1,
      img: "https://github.com/rxmxndai/rxmxndai-assets/blob/main/assets/keyboard.png?raw=true",
      title: "Dashain Sale",
      desc: "DON'T COMPROMISE ON TECH! GET FLAT 30% OFF FOR NEW MODELS",
    },
    {
      id: 2,
      img: "https://github.com/rxmxndai/rxmxndai-assets/blob/main/assets/G24F2.png?raw=true",
      title: "Dashain Sale",
      desc: "DON'T COMPROMISE ON TECH! GET FLAT 30% OFF FOR NEW MODELS",
    },
  ];

  return (
    <Container>
      <Swiper
        modules={[Navigation, Thumbs, Pagination, Autoplay]}
        autoplay = {{delay: 4000}}
        loop={true}
        spaceBetween={0}
        slidesPerView= {1}
        navigation
        pagination={{ clickable: true }}
        grabCursor
      >
        {sliderItems.map((product) => (
          <SwiperSlide key={product.id}>
            <Wrapper>
              <ImageContainer>
                <Image src={product.img} />
              </ImageContainer>

              <InfoContainer>
                <Title>{product.title}</Title>
                <Description>{product.desc}</Description>

                <ShopNow>SHOP NOW</ShopNow>
              </InfoContainer>
            </Wrapper>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};

export default FeaturedSlider;
