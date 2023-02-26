import styled from "styled-components"
import { Visibility } from "@mui/icons-material"
import { userRequest } from "../../../requestMethods/requestMethods"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

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
    height: 40px;
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

const Infor = styled.span`
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

    const navigate = useNavigate();
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const getUsers = async () => {
            try {
                const response = await userRequest.get("/users/find?new=true");
                setUsers(response.data)
            }
            catch (err) {
                console.log(err.response?.data);
            }
        }
        getUsers();
    }, [navigate])


    return (
        <Container>
            <Title> New Members </Title>
            <List>
                {users.map((user) => (
                    <Item key={user._id}>
                        {user.image !== "" ? <Image src={user.image} /> : <AccountCircleIcon sx={
                            {
                                width: '40px',
                                height: '40px',
                            }
                        } size="medium" />}
                        <User>
                            <Name> {user.username} </Name>
                            <Infor> {user.email} </Infor>
                        </User>
                        <Button onClick={() => navigate(`/admin/user/${user._id}`)} > <Visibility /> View  </Button>
                    </Item>
                ))}
            </List>
        </Container>
    )
}

export default NewUserWidget