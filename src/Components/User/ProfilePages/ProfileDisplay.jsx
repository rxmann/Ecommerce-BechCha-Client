import styled from "styled-components"
import { Button } from "@mui/material";
import UserProfile from "./UserProfile";
import {  useDispatch, useSelector } from "react-redux"
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import UserUpdateForm from "./UserUpdateForm";
import { LogoutUser } from "../../../Redux/apiCalls";
import { useState } from "react";
import { userRequest } from "../../../requestMethods/requestMethods";


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
    const { isSignedIn, currentUser, isFetching } = useSelector(state => state.user)

    const [ user, setUser] = useState({});

    // check user login status
    useEffect(() => {
        const checkLogin = () => {
          if (!isSignedIn || !userId) {
            navigate("/login");
          }
        }
        checkLogin();
      }, [isSignedIn, navigate, userId, isFetching]);



      useEffect(() => {
        const userD = async () => {
            try {
                const response = await userRequest.get(`/users/find/${userId}`)
                setUser(response.data);
            }
            catch (er) {
                // console.log(er);
                setUser(null)
            }
        }
        userD();
      }, [userId, isFetching, navigate]);
      

    const handleLogout = (e) => {
        e.preventDefault();
        LogoutUser(dispatch, currentUser._id);
    }

    return (
        <Container>
        {user ? 
        <>
            <Card>
                <UserUpdateForm user={user} isAdmin={currentUser?.isAdmin} email={currentUser?.email}/>
                <UserProfile user={user}/>
            </Card>

            {user?._id === currentUser?._id ?
                <Bottom>
                <Button variant="contained" color="error" onClick={handleLogout} > {user.username} Logout </Button>
                </Bottom>
                : ""
            }
            </> : "No user found!"
        }
        </Container>
    )
}

export default ProfileDisplay