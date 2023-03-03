import styled from "styled-components"
import { Button } from "@mui/material";
import UserProfile from "./UserProfile";
import {  useDispatch, useSelector } from "react-redux"
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import UserUpdateForm from "./UserUpdateForm";
import { useState } from "react";
import { getOneUser, LogoutUser } from "../../../ApiCalls/UserApiCalls";


const Container =styled.div`
     display: flex;
     flex-direction: column;
     width: 100%;
`
const Card = styled.div`
    display: flex;
    gap: 30px;
    width: 100%;
    background-color: white;
`




const Bottom = styled.div`
    display: flex;
    align-items: center;
    justify-content: end;
    margin-top: 30px;
`



const ProfileDisplay = () => {

    const userId = useParams().id;
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { isSignedIn, currentUser } = useSelector(state => state.user)

    const [ user, setUser] = useState({});

    // check user login status
    useEffect(() => {
        const checkLogin = () => {
          if (!isSignedIn || !userId) {
            navigate("/login");
          }
        }
        checkLogin();
      }, [isSignedIn, userId, dispatch]);



      useEffect(() => {
        const userD = async () => {
            const response = await getOneUser(dispatch, userId)
            setUser(response);
        }
        userD();
      }, [userId]);
      

    const handleLogout = async (e) => {
        e.preventDefault();
        await LogoutUser(dispatch, currentUser._id);
    }

    return (
        <Container>
        {user ? 
        <>
            <Card>
                <UserUpdateForm user={user} isAdmin={currentUser?.isAdmin} email={currentUser?.email}/>
                <UserProfile user={user}/>
            </Card>

            {user?._id === currentUser?._id &&
                <Bottom>
                <Button variant="contained" color="error" onClick={handleLogout} > {user.username} Logout </Button>
                </Bottom>
            }
            </> : "No user found!"
        }
        </Container>
    )
}

export default ProfileDisplay