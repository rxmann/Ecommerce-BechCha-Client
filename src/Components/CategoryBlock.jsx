import styled from 'styled-components'



const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  overflow: hidden;
  z-index: 0;
  opacity: 0.8;
`


const Container = styled.div`
  flex: 1;
  margin: 20px 10px 0px 0px;
  height: 30vh;
  min-width: 200px;
  color: white;
  padding: 20px;
  position: relative;
  border: 0.3px solid white;
  box-shadow: 0 1px 2px rgba(0,0,0,0.15);
  transition: box-shadow 0.1s ease-in-out;
  

  &:hover {
    border: 1px solid lightgray;
    background-color: aliceblue;
    transform: scale(1, 1);
    box-shadow: 0 5px 15px rgba(0,0,0,0.3);
  }
  &:hover ${Image} {
    opacity: 1;
  }

`

const Display = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;

  height: 100%; width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  display: flex;
  
`

const Name = styled.h3`
  background-color: gray;
  padding: 10px;
  margin-bottom: 10px;
`

const Button = styled.button`
  border: none;
  padding: 10px 20px;
  font-size: 20px;
  background-color: white;
  cursor: pointer;
`

const OneCategory = ( {category} ) => {
  return (
    <Container>
        <Image src={category.img}>
            
        </Image>

        <Display>
            <Name> {category.title} </Name>
            <Button> Shop Now </Button>
        </Display>
    </Container>
  )
}

export default OneCategory