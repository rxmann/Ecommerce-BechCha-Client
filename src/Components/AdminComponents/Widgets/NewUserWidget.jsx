import styled from "styled-components"
import { Visibility} from "@mui/icons-material"

const Container = styled.div`
    flex: 1;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
    padding: 20px;
    background-color: #ffffff;
`

const Title = styled.span`
    font-size: 24px;
    font-weight: 500;
    color: gray;
`

const List = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
`

const Item = styled.li`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 20px 0px;
`
const Image = styled.img`
    width: 40px;
    font: 40px;
    border-radius: 50%;
    object-fit: cover;
`
const User = styled.div`
    display: flex;
    flex-direction: column;
`


const Name = styled.span`
    font-weight: 500;
`
    
const Profession =  styled.span`
    font-weight: 300;
`

const Button = styled.button`
    display: flex;
    align-items: center;
    border: none;
    border-radius: 10px;
    padding: 5px 10px;
    cursor: pointer;
    background-color: #eeeef7;
    color: #555;
    gap: 5px;
    font-size: 14px;
`


const NewUserWidget = () => {
  return (
    <Container>
        <Title> New Members </Title>
        <List>
            <Item>
                <Image src={"https://zoro.to/images/zoro-min.png"} />
                <User>
                    <Name> Roronoa Zoro </Name>
                    <Profession> Sword Master </Profession>
                </User>
                <Button> <Visibility/> View  </Button>
            </Item>

            <Item>
                <Image src={"https://zoro.to/images/zoro-min.png"} />
                <User>
                    <Name> Roronoa Zoro </Name>
                    <Profession> Sword Master </Profession>
                </User>
                <Button> <Visibility/> View  </Button>
            </Item>

            <Item>
                <Image src={"https://zoro.to/images/zoro-min.png"} />
                <User>
                    <Name> Roronoa Zoro </Name>
                    <Profession> Sword Master </Profession>
                </User>
                <Button> <Visibility/> View  </Button>
            </Item>

            <Item>
                <Image src={"https://zoro.to/images/zoro-min.png"} />
                <User>
                    <Name> Roronoa Zoro </Name>
                    <Profession> Sword Master </Profession>
                </User>
                <Button> <Visibility/> View  </Button>
            </Item>

            <Item>
                <Image src={"https://zoro.to/images/zoro-min.png"} />
                <User>
                    <Name> Roronoa Zoro </Name>
                    <Profession> Sword Master </Profession>
                </User>
                <Button> <Visibility/> View  </Button>
            </Item>

            <Item>
                <Image src={"https://zoro.to/images/zoro-min.png"} />
                <User>
                    <Name> Roronoa Zoro </Name>
                    <Profession> Sword Master </Profession>
                </User>
                <Button> <Visibility/> View  </Button>
            </Item>


            
        </List>
    </Container>
  )
}

export default NewUserWidget