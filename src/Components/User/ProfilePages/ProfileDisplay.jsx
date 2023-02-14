import styled from "styled-components"
import { Button } from "@mui/material";
import UserProfile from "./UserProfile";
import {  useDispatch, useSelector } from "react-redux"
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import UserUpdateForm from "./UserUpdateForm";
import { LogoutUser } from "../../../Redux/apiCalls";
import Cookies from "js-cookie";


const Container =styled.div`
     display: flex;
     flex-direction: column;
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
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { isSignedIn, currentUser } = useSelector(state => state.user)


    // check user login status
    useEffect(() => {
        const checkLogin = () => {
          if (!isSignedIn || !currentUser) {
            navigate("/login");
          }
        }
        checkLogin();
      }, [isSignedIn, navigate]);



    const handleLogout = (e) => {
        e.preventDefault();
        LogoutUser(dispatch, currentUser._id);
    }

    return (
        <Container>
            <Card>
                <UserProfile />
                <UserUpdateForm />
            </Card>

            <Bottom>
                <Button variant="contained" color="error" onClick={handleLogout} > Logout </Button>
            </Bottom>
        </Container>
    )
}

export default ProfileDisplay