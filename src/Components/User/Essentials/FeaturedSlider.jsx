import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Thumbs, Autoplay } from "swiper";
import { getFeatured } from "../../../ApiCalls/ProductApiCalls";
// Import Swiper styles
import "swiper/css/bundle";
import "swiper/css/autoplay";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  padding: 10px 50px;
`;

const Wrapper = styled.div`
  height: 60vh;
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
  box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.15);
  transition: box-shadow 0.3s ease-in-out;
  border: 0.3px solid #0171b6;

  &:hover {
    background-color: #0171b6;
    color: white;
    box-shadow: 1px 2px 6px rgba(0, 0, 0, 0.3);
  }
`;

const FeaturedSlider = () => {
  const navigate = useNavigate();
  const [data, setData] = useState();

  useEffect(() => {
    const getFeaturedItems = async () => {
      let response = await getFeatured();
      response = response.map((pd) => {
        const textContent = document.createElement("div");
        textContent.innerHTML = pd.description;
        const plainText = textContent.innerText.slice(0, 300) + '...';
        return { ...pd, description: plainText };
      });
      console.log(response[0]);
      setData(response);
    };

    getFeaturedItems();
  }, []);

  return (
    <Container>
      <Swiper
        modules={[Navigation, Thumbs, Pagination, Autoplay]}
        autoplay={{ delay: 4000 }}
        loop={true}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        grabCursor
      >
        {data?.length > 0 &&
          data.map((product) => (
            <SwiperSlide key={product._id}>
              <Wrapper>
                <ImageContainer>
                  <Image src={product.images[0].url} />
                </ImageContainer>

                <InfoContainer>
                  <Title>{product.title}</Title>
                  <Description>{product.description}</Description>

                  <ShopNow onClick={() => navigate(`/product/${product._id}`)}>
                    SHOP NOW
                  </ShopNow>
                </InfoContainer>
              </Wrapper>
            </SwiperSlide>
          ))}
      </Swiper>
    </Container>
  );
};

export default FeaturedSlider;
