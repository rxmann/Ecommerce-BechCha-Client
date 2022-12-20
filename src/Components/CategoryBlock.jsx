import styled from 'styled-components'


const Image = styled.img`
  width: 100%;
  height: 80%;
  object-fit: cover;
  overflow: hidden;
  z-index: 0;
  opacity: 1;
`


const Container = styled.div`
  flex: 1;
  min-width: 100px;
  max-width: 200px;
  padding: 20px;
  position: relative;
  border: 0.3px solid white;
  transition: box-shadow 0.1s ease-in-out;
  

  &:hover {
    border: 1px solid lightgray;
    border-radius: 10px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

    .Button {
      z-index: 2;
    }
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
  /* background-color: gray; */
  padding: 10px;
  /* margin-bottom: 10px; */
  color: black;
`

const Button = styled.button`
  border: none;
  padding: 10px 20px;
  font-size: 20px;
  background-color: white;
  cursor: pointer;
  z-index: -1;

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