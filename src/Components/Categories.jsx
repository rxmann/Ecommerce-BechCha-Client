import styled from 'styled-components'

const Conatainer = styled.div`
    padding: 50px;
`
const Title = styled.h1`
    color: #0171b6;
    display:table;
    padding-bottom: 15px;
    font-weight: 600;
    font-size: 24px;
    border-bottom: 2px solid #0171b6;
`


const Categories = () => {
  return (
    <Conatainer >
        <Title>
            Categories
        </Title>

        
    </Conatainer>
  )
}

export default Categories