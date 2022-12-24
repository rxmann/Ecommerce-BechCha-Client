import styled from 'styled-components'
import OneCategory from './CategoryBlock'

import { Navigation, Pagination, Thumbs, Autoplay } from "swiper";

// Import Swiper styles
import "swiper/css/bundle";
import "swiper/css/autoplay"
import { Swiper, SwiperSlide } from "swiper/react";
const Container = styled.div`
    margin: 10px 50px;
`

const Title = styled.h1`
    color: #0171b6;
    display: table;
    padding: 10px;
    font-weight: 700;
    font-size: 24px;
    border-bottom: 3px solid #0171b6;
`
const List = styled.div`
    display: flex;
    align-items: center;
    margin: 10px 0px;
    padding: 10px;

    height: 20vh;
    width: 100%;
`

const Categories = () => {

    const CategoriesList = [
        {
            id: 0,
            img: "https://github.com/rxmxndai/rxmxndai-assets/blob/main/assets/G24F2.png?raw=true",
            title: "Monitors",
            category: "monitor"
        },
        {
            id: 1,
            img: "https://github.com/rxmxndai/rxmxndai-assets/blob/main/assets/keyboard.png?raw=true",
            title: "Keyboards",
            category: "keyboard"
        },
        {
            id: 2,
            img: "https://github.com/rxmxndai/rxmxndai-assets/blob/main/assets/G24F2.png?raw=true",
            title: "Monitors",
            category: "monitor"
        },
        {
            id: 3,
            img: "https://github.com/rxmxndai/rxmxndai-assets/blob/main/assets/keyboard.png?raw=true",
            title: "Keyboards",
            category: "keyboard"
        }
    ];

    return (


        <Container >
            <Title>
                Categories
            </Title>


            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                autoplay={{ delay: 2000 }}
                // loop={true}
                spaceBetween={10}
                slidesPerView={3}
                navigation
                pagination={{ clickable: true }}
                grabCursor
            >
                <List>
                    {CategoriesList.map((each) => (
                        <SwiperSlide key={each.id}>
                            <OneCategory category={each} key={each.id} />
                        </SwiperSlide>
                    ))}
                </List>

            </Swiper>


        </Container>
    )
}

export default Categories