import styled from 'styled-components'
import OneCategory from './CategoryBlock'

const Container = styled.div`
    margin: 10px 50px;
    background-color: #ffffff;
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
    /* justify-content: space-between; */
    flex-wrap: wrap;
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

        <List>
            {CategoriesList.map( (each) => (
                <OneCategory category={each} key={each.id}/>
            ))}
        </List>


    </Container>
  )
}

export default Categories