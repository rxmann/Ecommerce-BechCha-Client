import styled from 'styled-components';
import VerifiedIcon from '@mui/icons-material/Verified';
import EmailIcon from '@mui/icons-material/Email';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
import { Avatar } from "@mui/material";
import moment from 'moment';


const Container = styled.div`
    flex: 1;
`

const Profile = styled.div`
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



const UserProfile = ({ user }) => {

    const date = moment(user?.createdAt);
    const formattedDate = date.format('MMM D, YYYY');

    return (
        <Container>
            <Profile>
                <Avatar src={user?.image} sx={{ width: 100, height: 100 }} />
                <UsernameWrapper>
                    @{user?.username}
                    {user?.isVerified && <VerifiedIcon color="primary" />}
                </UsernameWrapper>
                <UserInfo>
                    <ItemTitle> Account Details </ItemTitle>
                    <Item>
                        <EmailIcon />
                        <Data> {user?.email} </Data>
                    </Item>
                    <Item>
                        <LocationCityIcon />
                        <Data> {user?.address} </Data>
                    </Item>
                    <Item>
                        <SmartphoneIcon />
                        <Data> {user?.contacts} </Data>
                    </Item>
                    <Item>
                        <PermContactCalendarIcon />
                        <Data> {user?.dob} </Data>
                    </Item>
                    <ItemTitle> Joined {formattedDate} </ItemTitle>
                </UserInfo>
            </Profile>
        </Container>
    )
}

export default UserProfile