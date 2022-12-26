import styled from 'styled-components'



const Button = styled.button`
  border: none;
  border-radius: 2px;
  background-color: #ffffff;
  padding: 10px;
  font-size: 16px;
  cursor: pointer;
  z-index: -1;

  position: absolute;
  top: calc(50%);
  left: calc(50% - 50px);

  &:hover {
    transform: scale(1.06, 1.06);
    background-color: #0171b6;
    color: white;
  }
`


const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  transition: box-shadow 0.1s ease-in-out;
  border-radius: 20px;


  width: 220px;
  height: 120px;

  &:hover {
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    background-color: #ffffff;
  }

  &:hover ${Button} {
    transition: transform .2s ease;
    z-index: 1;
  }
`

const Name = styled.h3`
  flex: 1;

`
const Display = styled.div`
  flex: 5;
  width: 100%;
  height: 100%;
  padding: 10px;
  position: relative;
  background-color: #f5f7f8;

`


const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: fill;
  overflow: hidden;
  border-radius: 2px;

  position: absolute;
  top: 0;
  left: 0;
`








const OneCategory = ( {category} ) => {
  return (
    <Container>
        <Name> {category.title} </Name>
        <Display>
          <Image src={category.img} />
          <Button> Shop Now </Button>
        </Display>
    </Container>
  )
}

export default OneCategory