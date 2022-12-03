import styled from 'styled-components'



const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  overflow: hidden;
  z-index: 0;
`


const Container = styled.div`
  flex: 1;
  margin: 5px 20px 0px 0px;
  height: 30vh;
  min-width: 200px;
  /* max-width: 400px; */
  color: white;
  padding: 20px;
  position: relative;
  border: 0.7px solid white;
  transition: all ease 0.2s;

  &:hover {
    border: 0.2px solid lightgray;
    background-color: #b7d7eb;
  }
  &:hover ${Image} {
    opacity: 0.9;
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