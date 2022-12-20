import styled from 'styled-components'




const Button = styled.button`
  border: none;
  padding: 10px 20px;
  font-size: 20px;
  background-color: white;
  cursor: pointer;
  z-index: -1;
  &:hover {
    transform: scale(1.06, 1.06);
  }
`

const Container = styled.div`
  flex: 1;
  max-width: 200px;
  padding: 20px;
  position: relative;
  border: 1px solid white;
  transition: box-shadow 0.1s ease-in-out;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
  &:hover {
    border: 1px solid lightgray;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  }

  &:hover ${Button} {
      z-index: 1;
    }
`

const Image = styled.img`
  width: 100%;
  height: 80%;
  object-fit: cover;
  overflow: hidden;
`


const Display = styled.div`
  position: absolute;
  top: 50;
  left: 50;
  height: 100%; width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;  
`

const Name = styled.h3`
  padding: 10px;
  color: black;
`



const OneCategory = ( {category} ) => {
  return (
    <Container>
        <Name> {category.title} </Name>

        <Image src={category.img} />

        <Display>
            <Button> Shop Now </Button>
        </Display>
    </Container>
  )
}

export default OneCategory