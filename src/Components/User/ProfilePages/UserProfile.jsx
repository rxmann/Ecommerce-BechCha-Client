import styled from 'styled-components';
import VerifiedIcon from '@mui/icons-material/Verified';
import EmailIcon from '@mui/icons-material/Email';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
import { Avatar } from "@mui/material";
import { useSelector } from 'react-redux';
import moment from 'moment';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


const Container =styled.div`

`    

const Profile = styled.div`
    flex: 1;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 30px;
`

const UserInfo = styled.div`
    width: 100%;
    padding: 20px 10px;
    display: flex;
    flex-direction: column;
    gap: 20px;
`

const ItemTitle = styled.span`
    font-weight: 200;
    color: gray;
`

const Item = styled.span`
    display: flex;
    gap: 20px;
    align-items: center;
`

const Data = styled.span`
    font-weight: 300;
`
const UsernameWrapper = styled.span`
    display: flex;
    align-items: center;
    gap: 10px;
    margin: 5px;
    font-weight: 500;
`



const UserProfile = () => {

    const { currentUser, isSignedIn } = useSelector(state => state.user)
    const navigate = useNavigate();
    // check user login status
    useEffect(() => {
        const checkLogin = () => {
          if (!isSignedIn) {
            navigate("/login");
          }
        }
        checkLogin();
      }, [isSignedIn, navigate]);


    const date = moment(currentUser?.createdAt);
    const formattedDate = date.format('MMM D, YYYY');


    


  return (
    <Container>
        <Profile>
        <Avatar src={currentUser?.image} sx={{ width: 100, height: 100 }} />
                <UsernameWrapper> @{currentUser?.username} <VerifiedIcon color="primary" /> </UsernameWrapper>
                <UserInfo>
                    <ItemTitle> Account Details </ItemTitle>
                    <Item> 
                        <EmailIcon /> 
                        <Data> {currentUser?.email} </Data> 
                    </Item> 
                    <Item> 
                        <LocationCityIcon /> 
                        <Data> {currentUser?.address} </Data> 
                    </Item> 
                    <Item> 
                        <SmartphoneIcon /> 
                        <Data> {currentUser?.contacts} </Data> 
                    </Item> 
                    <Item>
                        <PermContactCalendarIcon />
                        <Data> {currentUser?.dob} </Data>
                    </Item>
                    <ItemTitle> Joined {formattedDate} </ItemTitle>
                </UserInfo>
            </Profile>
    </Container>
  )
}

export default UserProfile