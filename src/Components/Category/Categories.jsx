import styled from 'styled-components'
import OneCategory from './CategoryBlock'

import { Navigation, Autoplay } from "swiper";

// Import Swiper styles
import "swiper/css/bundle";
import "swiper/css/autoplay"
import { Swiper, SwiperSlide } from "swiper/react";

const Container = styled.div`
    padding: 10px 50px;
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
    margin: 20px;
    height: 20vh;
    width: 100%;
    padding: 20px;
`

const Display = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
`

const Span = styled.span`
    color: #0171b6;
    font-size: 14px;
    font-weight: 200;
    border-bottom: .5px solid #0171b6;
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
            title: "House Appliances",
            category: "monitor"
        },
        {
            id: 3,
            img: "https://github.com/rxmxndai/rxmxndai-assets/blob/main/assets/keyboard.png?raw=true",
            title: "Gaming Accessories",
            category: "keyboard"
        },
        {
            id: 4,
            img: "https://github.com/rxmxndai/rxmxndai-assets/blob/main/assets/keyboard.png?raw=true",
            title: "Keyboards",
            category: "keyboard"
        },
        {
            id: 5,
            img: "https://github.com/rxmxndai/rxmxndai-assets/blob/main/assets/keyboard.png?raw=true",
            title: "Keyboards",
            category: "keyboard"
        },
        {
            id: 6,
            img: "https://github.com/rxmxndai/rxmxndai-assets/blob/main/assets/keyboard.png?raw=true",
            title: "Keyboards",
            category: "keyboard"
        },
        {
            id: 7,
            img: "https://github.com/rxmxndai/rxmxndai-assets/blob/main/assets/keyboard.png?raw=true",
            title: "Keyboards",
            category: "keyboard"
        },
        {
            id: 8,
            img: "https://github.com/rxmxndai/rxmxndai-assets/blob/main/assets/keyboard.png?raw=true",
            title: "Keyboards",
            category: "keyboard"
        }
    ];

    return (


        <Container >

            <Display>
                <Title>
                    Categories
                </Title>
                <Span>
                    Buy Items best siuite for you
                </Span>
            </Display>


            <Swiper
                modules={[Navigation, Autoplay]}
                autoplay= {{
                    delay: 2000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                }}
                spaceBetween={1}
                navigation
                slidesPerView={4}
                loop={true}
                pagination={{ clickable: true }}
                effect =  {'slide'}
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