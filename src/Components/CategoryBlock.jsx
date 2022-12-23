import styled from 'styled-components'




const Button = styled.button`
  border: none;
  padding: 10px;
  font-size: 10px;
  background-color: white;
  cursor: pointer;
  z-index: -1;
  &:hover {
    transform: scale(1.06, 1.06);
    background-color: #0171b6;
    color: white;
  }
`

const Container = styled.div`
  flex: 1;
  max-width: 120px;
  max-height: 100px;
  padding: 20px;
  position: relative;
  transition: box-shadow 0.1s ease-in-out;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 10px;
  background-color: #ffffff;
  border-radius: 20px;

  &:hover {
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  }

  &:hover ${Button} {
      transition: transform .2s ease;
      z-index: 1;
    }
`

const Image = styled.img`
  width: 100%;
  height: 80%;
  object-fit: cover;
  overflow: hidden;
  transform: scale(0.8);

  &:hover {
    transform: scale(1);
  }
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
        <Image src={category.img} />
        <Name> {category.title} </Name>
        <Display>
            <Button> Shop Now </Button>
        </Display>
    </Container>
  )
}

export default OneCategory